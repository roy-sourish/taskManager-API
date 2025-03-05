import Task from "../models/Task.js";
import asyncWrapper from "../middleware/async.js";
/**
 * Get all tasks
 * GET => api/v1/tasks
 */
export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

/**
 * Get a single task
 * GET => api/v1/tasks/:id
 */
export const getSingleTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});

/**
 * Create task
 * GET => api/v1/tasks
 */
export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

/**
 * Update task
 * GET => api/v1/tasks/:id
 */
export const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});

/**
 * Delete task
 * GET => api/v1/tasks/:id
 */
export const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});
