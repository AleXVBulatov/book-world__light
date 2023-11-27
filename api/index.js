const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { v4: uuid4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// для получения гатегорий:
app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "db", "categories.json"));
});
// для получения товаров с query params:
app.get("/products", (req, res) => {
  const param = req.query.title;

  fs.readFile(path.join(__dirname, "db", "products.json"), "utf-8", (err, data) => {
    if (err) throw err;

    const list = JSON.parse(data);

    const filtered = list.filter((product) => {
      const title = product.title.toLowerCase();
      const author = product.author.toLowerCase();
      const result = `${title} ${author}`;

      if (!param) {
        return result;
      } else {
        const value = param.toLowerCase();
        return result.includes(value);
      }
    });

    res.send(JSON.stringify(filtered));
  });
});

app.get("/categories/:slug/:id", (req, res) => {
  const { id } = req.params;
  // console.log("id: ", id);
  fs.readFile(path.join(__dirname, "db", "products.json"), "utf-8", (err, data) => {
    if (err) throw err;

    const product = JSON.parse(data).find((product) => product.id === id);
    if (product) {
      res.send(product);
    } else {
      res.send("Данные продукт не найден");
    }
  });
});

app.post("/users/login", (req, res) => {
  fs.readFile(path.join(__dirname, "db", "users.json"), "utf-8", (err, data) => {
    if (err) throw err;

    if (!data) return;

    const users = JSON.parse(data);
    const user = users.find((user) => user.email === req.body.email);

    if (!user) {
      res.send("Неверное имя пользователя или пароль");
    } else if (user.email !== req.body.email || user.password !== req.body.password) {
      res.send("Неверное имя пользователя или пароль");
    } else if (user.email === req.body.email && user.password === req.body.password) {
      res.send(user);
    }
  });
});

app.post("/users/signup", (req, res) => {
  console.log(req.body);

  fs.readFile(path.join(__dirname, "db", "users.json"), "utf-8", (err, data) => {
    if (err) throw err;

    const users = JSON.parse(data);
    const user = users.find((user) => user.email === req.body.email);

    console.log(user);

    if (user) {
      res.send("Такой пользователь уже есть");
    } else {
      res.send("Профиль создан");
      console.log("Запись");
      const newUser = {
        ...req.body,
        id: uuid4(),
        role: "costomer",
      };

      users.push(newUser);

      fs.writeFileSync(path.join(__dirname, "db", "users.json"), JSON.stringify(users), "utf-8", (err) => {
        if (err) throw err;
      });
    }
  });
});

app.patch("/users/:id", (req, res) => {
  // console.log(req.params);
  // console.log(req.body);

  fs.readFile(path.join(__dirname, "db", "users.json"), "utf-8", (err, data) => {
    if (err) throw err;

    const users = JSON.parse(data);
    const user = users.find((user) => user.id === req.body.id);
    const idx = users.findIndex((user) => user.id === req.body.id);

    if (user) {
      const updateUser = {
        ...user,
        ...req.body,
      };

      users[idx] = updateUser;

      fs.writeFileSync(path.join(__dirname, "db", "users.json"), JSON.stringify(users), "utf-8", (err) => {
        if (err) throw err;
      });

      res.send(updateUser);
    }
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
