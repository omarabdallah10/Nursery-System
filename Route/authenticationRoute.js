const express = require("express");
const authController = require("../Controller/authenticationController");

const router = express.Router();

router.route("/login").post(authController.hashedLogin);

module.exports = router;