const { Tag } = require("../models/index");

class Tagcontroller {
  async store(req, res) {
    try {
      const { name, color } = req.body;
      const userId = req.user.id;

      if (!name?.trim()) {
        return res.status(400).json({
          error: true,
          message: "Todos os campos são obrigatórios!",
        });
      }

      const existingTag = await Tag.findOne({ where: { name, userId } });
      if (existingTag) {
        return res.status(400).json({
          message: "Tag já existe!",
          is_error: true,
        });
      }

      const tag = await Tag.create({ name, color, userId });
      return res.status(201).json(tag);
    } catch (error) {
      const message = "Falha ao criar tag!";
      console.error("Erro ao criar tag:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async index(req, res) {
    try {
      const tags = await Tag.findAll();
      return res.status(200).json(tags);
    } catch (error) {
      const message = "Falha ao listar tags!";
      console.error("Erro ao listar tags:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tag.findByPk(id);

      if (!tag) {
        return res.status(404).json({
          message: "Tag não encontrada!",
          is_error: true,
        });
      }
      return res.status(200).json(tag);
    } catch (error) {
      const message = "Falha ao buscar tag!";
      console.error("Erro ao buscar tag:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, color } = req.body;

      const tag = await Tag.findByPk(id);
      if (!tag) {
        return res.status(404).json({
          message: "Tag não encontrada!",
          is_error: true,
        });
      }

      await tag.update({ name, color });
      return res.status(200).json(tag);
    } catch (error) {
      const message = "Falha ao atualizar tag!";
      console.error("Erro ao atualizar tag:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tag.findByPk(id);

      if (!tag) {
        return res.status(404).json({
          message: "Tag não encontrada!",
          is_error: true,
        });
      }

      await tag.destroy();
      return res.status(200).json({ message: "Tag excluída com sucesso!" });
    } catch (error) {
      const message = "Falha ao excluir tag!";
      console.error("Erro ao excluir tag:", error);
      return res.status(400).json({ message, is_error: true });
    }
  }
}

module.exports = new Tagcontroller();
