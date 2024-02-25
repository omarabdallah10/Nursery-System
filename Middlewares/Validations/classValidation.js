const { body, query, param } = require("express-validator");

exports.insertClassValidation = [
  body("_id").isInt({ min: 1 }).withMessage("ID must be a number"),
  body("name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be a string and between 3 to 20 characters")
    .isAlpha()
    .withMessage("Name must be alphabets only"),
  body("supervisor").isNumeric().withMessage("Supervisor must be a number"),
  body("children")
    .isArray()
    .withMessage("Children must be an array of numbers")
    .isLength({ min: 1 })
    .withMessage("Children array must contain at least one child"),
];

exports.updateClassValidation = [
  body("_id").isNumeric().withMessage("ID must be a number"),
  body("name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be a string and between 3 to 20 characters")
    .isAlpha()
    .withMessage("Name must be alphabets only"),
  body("supervisor").isNumeric().withMessage("Supervisor must be a number"),
  body("children")
    .isArray()
    .withMessage("Children must be an array of numbers")
    .isLength({ min: 1 })
    .withMessage("Children array must contain at least one child"),
];

exports.deleteClassValidation = [
  param("_id").isInt({ min: 1 }).withMessage("ID must be a number"),
];
