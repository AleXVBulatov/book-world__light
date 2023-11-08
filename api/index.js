const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.get("/categories", (req, res) => {
  res.sendFile(path.resolve(__dirname, "db", "categories.json"));
});

app.get("/books", (req, res) => {
  res.sendFile(path.resolve(__dirname, "db", "books.json"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
