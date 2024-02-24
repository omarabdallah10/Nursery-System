const express = require("express");


const classController = require("../Controller/classController");

const router = express.Router();

router
  .route("/class")
  .get(classController.getAllClass)
  .post(classController.addNewClass)
  .put(classController.updateClassData)
  .delete(classController.deleteClassData);

router.route("/class/:id").get(classController.getClassById);

router.route("/classChildren/:id").get(classController.getClassChildren);

router.route("/classTeacher/:id").get(classController.getClassSupervisor);

module.exports = router;