const express = require("express");

const teacherController = require("../Controller/teacherController");
const {
  insertTeacherValidation,
  updateTeacherValidation,
  deleteTeacherValidation,
} = require("../Middlewares/Validations/teacherValidation");
const validator = require("../Middlewares/Validations/validator");
const { isTeacher } = require("../Middlewares/authenticationMW");
const { isAdmin } = require("../Middlewares/authenticationMW");

const router = express.Router();

router
  .route("/teachers")
  .all(isTeacher)
  .get(isAdmin, teacherController.getAllTeachers)
  .post(
    isAdmin,
    insertTeacherValidation,
    validator,
    teacherController.addNewTeacher
  )
  .put(updateTeacherValidation, validator, teacherController.updateTeacher);

router.route("/teachers/supervisors").get(teacherController.getAllSupervisors);

router
  .route("/teacher/:id")
  .get(teacherController.getTeacherById)
  .delete(
    isAdmin,
    deleteTeacherValidation,
    validator,
    teacherController.deleteTeacher
  );

module.exports = router;
