import express from 'express';
import Task from '../models/Tasks.js';
import mongoose from 'mongoose';

const TasksRouter = express.Router();
const { ObjectId } = mongoose.Types;

//get
TasksRouter.get('/tasks', async (req, res) => {
  try {
    const data = await Task.find();
    res.status(200).json({ lists: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//create
TasksRouter.patch('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { completion } = req.body;

  try {
    const objectId = new ObjectId(id);
    const updatedTask = await Task.findByIdAndUpdate(objectId, { completion }, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default TasksRouter;
