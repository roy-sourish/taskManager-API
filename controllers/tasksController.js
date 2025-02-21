/**
 * Get all tasks
 * GET => api/v1/tasks
 */
export const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

/**
 * Get a single task
 * GET => api/v1/tasks/:id
 */
export const getSingleTask = (req, res) => {
  res.send("get single tasks");
};

/**
 * Create task
 * GET => api/v1/tasks
 */
export const createTask = (req, res) => {
  res.send("create task");
};

/**
 * Update task
 * GET => api/v1/tasks/:id
 */
export const updateTask = (req, res) => {
  res.send("update task");
};

/**
 * Delete task
 * GET => api/v1/tasks/:id
 */
export const deleteTask = (req, res) => {
  res.send("delete task");
};
