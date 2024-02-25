const express = require("express");

const {login} = require("../Controller/authenticationController");
const {validateLogin} = require("../Middlewares/Validations/loginValidation")
const validator = require("../Middlewares/validator");

const router = express.Router();

router.route("/login").post(validateLogin, validator, login);

module.exports = router;