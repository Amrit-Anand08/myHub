const express = require("express");
const router = express.Router();

const Task = require("../model/task.model");

router.get("/title-notification", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });

  res.json({
    message: "All tasks found",
    tasks,
  });
});

router.post("/title-notification", async (req, res) => {
  const task = await Task.create({
    name: req.body.name,
  });

  res.status(201).json({
    message: "Task added",
    task,
  });
});

router.put("/title-notification/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      isCompleted: true,
    },
    { new: true },
  );

  res.json({
    message: "Task completed",
    task,
  });
});

module.exports = router;
