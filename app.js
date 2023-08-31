const express = require("express");
const app = express();
const productRoute = require("./routes/productRoute");

app.use("/product", productRoute);

app.use(express.json());

module.exports = app;
