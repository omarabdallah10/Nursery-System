const express = require("express");

const childController = require("../Controller/childController");
const {
  insertChildValidation,
  updateChildValidation,
  deleteChildValidation,
} = require("../Middlewares/Validations/childValidation");
const validator = require("../Middlewares//Validations/validator");

const router = express.Router();

router.route("/children").get(childController.getAllChildren);

router
  .route("/child")
  .post(insertChildValidation, validator, childController.addNewChild);

router
  .route("/child/:id")
  .get(childController.getChildById)
  .delete(deleteChildValidation, validator, childController.deleteChild)
  .put(updateChildValidation, validator, childController.updateChildData);

module.exports = router;
