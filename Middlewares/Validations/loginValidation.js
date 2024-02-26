const { body, query, param } = require("express-validator");

exports.validateLogin = [
  body("email").toLowerCase().isEmail().withMessage("Invalid email"),
  body("password")
    .isString()
    .isStrongPassword()
    .withMessage("Password must be a string and between 8 to 20 characters"),
];
