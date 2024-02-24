const express = require("express");

const classController = require("../Controller/classController");
const {
  insertClassValidation,
  updateClassValidation,
  deleteClassValidation,
} = require("../Middlewares/Validations/classValidation");
const validator = require("../Middlewares/Validations/validator");

const router = express.Router();

router
  .route("/class")
  .get(classController.getAllClass)
  .post(insertClassValidation, validator, classController.addNewClass)
  .put(updateClassValidation, validator, classController.updateClassData)
  .delete(deleteClassValidation, validator, classController.deleteClassData);

router.route("/class/:id").get(classController.getClassById);

router.route("/classChildren/:id").get(classController.getClassChildren);

router.route("/classTeacher/:id").get(classController.getClassSupervisor);

module.exports = router;
