const { Task, Tag } = require("../models");

class TaskController {
  async store(req, res) {
    try {
      const { title, description, status, priority, tags } = req.body;

      const task = await Task.create({ title, description, status, priority });

      if (tags && tags.length > 0) {
        const tagsToAssociate = await Tag.findAll({
          where: { id: tags },
        });

        await task.setTags(tagsToAssociate);
      }

      const taskWithTags = await Task.findByPk(task.id, {
        include: [
          {
            model: Tag,
            as: "tags",
            attributes: ["id", "name", "color", "createdAt", "updatedAt"],
            though: { attributes: [] },
          },
        ],
      });

      return res.status(201).json(taskWithTags);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      return res.status(400).json({ message: "Falha ao criar tarefa!" });
    }
  }

  async index(req, res) {
    try {
      const tasks = await Task.findAll({
        include: [{ model: Tag, as: "tags" }],
      });

      return res.status(200).json(tasks);
    } catch (error) {
      console.error("Erro ao listar tarefas:", error);
      return res.status(400).json({ message: "Falha ao listar tarefas!" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id, {
        include: [{ model: Tag, as: "tags" }],
      });

      if (!task) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
      }

      return res.status(200).json(task);
    } catch (error) {
      console.error("Erro ao buscar tarefa:", error);
      return res.status(400).json({ message: "Falha ao encontrar tarefa!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status, priority, tags } = req.body;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
      }

      await task.update({ title, description, status, priority });

      if (tags && tags.length > 0) {
        const tagsToAssociate = await Tag.findAll({
          where: { id: tags },
        });

        await task.setTags(tagsToAssociate);
      }

      const updatedTask = await Task.findByPk(task.id, {
        include: [{ model: Tag, as: "tags" }],
      });

      return res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      return res.status(400).json({ message: "Falha ao atualizar tarefa" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
      }

      await task.destroy();
      return res.status(200).json({ message: "Tarefa excluída com sucesso!" });
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      return res.status(400).json({ message: "Falha ao excluir tarefa!" });
    }
  }
}

module.exports = new TaskController();
