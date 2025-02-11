const { Task } = require("../models");

class Taskcontrollers {
  async store(req, res) {
    try {
      const { title, description, status, priority } = req.body;
      const task = await Task.create({ title, description, status, priority });
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new Taskcontrollers();
