const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  date: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  description: { type: String },
  status: { type: Boolean },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
