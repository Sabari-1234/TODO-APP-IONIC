const express = require("express");
const {
  newTask,
  getTask,
  updateTask,
  deleteTask,
  getSingleData,
} = require("../controller/taskController");
const router = express.Router();

router.route("/tasks").get(getTask).post(newTask);
router
  .route("/tasks/:id")
  .put(updateTask)
  .delete(deleteTask)
  .get(getSingleData);

module.exports = router;
