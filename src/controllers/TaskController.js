const { SHOWINDEXES } = require("sequelize/lib/query-types");
const { Task } = require("../models");
const { where } = require("sequelize");

class Taskcontrollers {
  async store(req, res) {
    try {
      const { title, description, status, priority } = req.body;
      const task = await Task.create({ title, description, status, priority });
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ message: "Falha ao cria tarefa!" });
    }
  }

  async index(req, res) {
    try {
      const tasks = await Task.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json({ message: "Falha ao listar tarefas!" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ message: "Tarefa nao encontrada" });
      }
      return res.status(200).json(task);
    } catch (error) {
      return res.status(404).json({ message: "Falha ao encontrar tarefa" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status, priority } = req.body;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ message: "Tarefa não encontrada" });
      }

      await task.update({ title, description, status, priority });
      return res
        .status(200)
        .json({ message: "Tarefa atualizada com sucesso!" });
    } catch (error) {
      return res.status(404).json({ message: "Falha ao atualizar tarefa" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ message: "Tarefa não encontrada" });
      }

      await Task.destroy({ where: { id } });
      return res.status(200).json({ message: "Tarefa excluida com sucesso!" });
    } catch (error) {
      return res.status(404).json({ message: "Falha ao excluir tarefa" });
    }
  }
}

module.exports = new Taskcontrollers();
