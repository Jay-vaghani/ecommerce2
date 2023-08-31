const express = require("express");
const { getAllProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProduct);

module.exports = router;
