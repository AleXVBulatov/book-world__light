const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/categories", (req, res) => {
  res.sendFile(path.resolve(__dirname, "db", "categories.json"));
});

app.get("/products", (req, res) => {
  res.sendFile(path.resolve(__dirname, "db", "products.json"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
