const Task = require('../models/task.model');

class TaskService {
  async getAllTasks() {
    return await Task.find();
  }

  async createTask(taskData) {
    const task = new Task(taskData);
    return await task.save();
  }

  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskService();