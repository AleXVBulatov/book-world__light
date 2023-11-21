const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { v4: uuid4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "db", "categories.json"));
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "db", "products.json"));
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
