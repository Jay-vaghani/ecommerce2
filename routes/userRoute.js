const express = require("express");
const { createUser, temp } = require("../controllers/userController");
const router = express.Router();

router.post("/register", createUser);

module.exports = router;
