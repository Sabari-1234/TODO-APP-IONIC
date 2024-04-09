const Task = require("../models/task");
exports.newTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.getSingleData = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};
