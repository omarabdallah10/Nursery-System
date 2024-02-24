const express = require("express");

const childController = require("../Controller/childController");

const router = express.Router();

router.route("/children").get(childController.getAllChildren);

router.route("/child").post(childController.addNewChild);

router
  .route("/child/:id")
  .get(childController.getChildById)
  .delete(childController.deleteChild)
  .put(childController.updateChildData);

module.exports = router;
