const { Task, Tag } = require("../models");

class TaskController {
  async store(req, res) {
    try {
      const { title, description, status, priority, tags } = req.body;
      const userId = req.user.id;

      const task = await Task.create({
        title,
        description,
        status,
        priority,
        userId,
      });

      if (tags && tags.length > 0) {
        const tagsToAssociate = await Tag.findAll({
          where: { id: tags, userId: req.user.id },
        });

        await task.setTags(tagsToAssociate);
      }

      const taskWithTags = await Task.findByPk(task.id, {
        include: [
          {
            model: Tag,
            as: "tags",
            attributes: ["id", "name", "color", "createdAt", "updatedAt"],
            through: { attributes: [] },
          },
        ],
      });

      return res.status(201).json(taskWithTags);
    } catch (error) {
      const message = "Falha ao criar tarefa!";
      console.error("Erro ao criar tarefa:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async index(req, res) {
    try {
      const tasks = await Task.findAll({
        include: [{ model: Tag, as: "tags" }],
      });

      return res.status(200).json(tasks);
    } catch (error) {
      const message = "Falha ao listar tarefas!";
      console.error("Erro ao listar tarefas:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id, {
        include: [{ model: Tag, as: "tags" }],
      });

      if (!task) {
        return res.status(404).json({
          message: "Tarefa não encontrada!",
          is_error: true,
        });
      }

      return res.status(200).json(task);
    } catch (error) {
      const message = "Falha ao buscar tarefa!";
      console.error("Erro ao buscar tarefa:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status, priority, tags } = req.body;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({
          message: "Tarefa não encontrada!",
          is_error: true,
        });
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
      const message = "Falha ao atualizar tarefa!";
      console.error("Erro ao atualizar tarefa:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({
          message: "Tarefa não encontrada!",
          is_error: true,
        });
      }

      await task.destroy();
      return res.status(200).json({ message: "Tarefa excluída com sucesso!" });
    } catch (error) {
      const message = "Falha ao excluir tarefa!";
      console.error("Erro ao excluir tarefa:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }
}

module.exports = new TaskController();
