const express = require("express");

const teacherController = require("../Controller/teacherController");

const router = express.Router();

router
  .route("/teachers")
  .get(teacherController.getAllTeachers)
  .post(teacherController.addNewTeacher)
  .put(teacherController.updateTeacher);

router.route("/teachers/supervisors").get(teacherController.getAllSupervisors);

router
  .route("/teacher/:id")
  .get(teacherController.getTeacherById)
  .delete(teacherController.deleteTeacher);

module.exports = router;
