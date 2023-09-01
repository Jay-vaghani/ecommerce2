const mongoose = require("mongoose");
const Validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    validate: [Validator.isEmail, "please enter valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    // minLength: [4, "Please enter minimum 4 charterers in your password"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPassword: String,
  resetPasswordExpire: Date,
});


const User = new mongoose.model("user", userSchema);

module.exports = User;
