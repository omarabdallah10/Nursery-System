const { body, query, param } = require("express-validator");
const Teacher = require("../../Model/teacherSchema");

exports.insertTeacherValidation = [
  body("_id").isInt({ min: 1 }).withMessage("ID must be a number"),
  body("name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be a string and between 3 to 20 characters")
    .isAlpha()
    .withMessage("Name must be alphabets only"),
  body("password")
    .isString()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be a string and between 8 to 20 characters"),
  body("email")
    .isEmail()
    .withMessage("Invalid email")
    .custom((value) => {
      return Teacher.findOne({ email: value }).then((teacher) => {
        if (teacher) {
          return Promise.reject("Email already exists");
        }
      });
    }),
];

exports.updateTeacherValidation = [
  param("_id").isNumeric().withMessage("ID must be a number"),
  body("name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be a string and between 3 to 20 characters")
    .isAlpha()
    .withMessage("Name must be alphabets only"),
  body("password")
    .isString()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be a string and between 8 to 20 characters"),
  body("email")
    .isEmail()
    .withMessage("Invalid email")
    .custom((value) => {
      return Teacher.findOne({ email: value }).then((teacher) => {
        if (teacher) {
          return Promise.reject("Email already exists");
        }
      });
    }),
];

exports.deleteTeacherValidation = [
  param("_id").isInt({ min: 1 }).withMessage("ID must be a number"),
];


