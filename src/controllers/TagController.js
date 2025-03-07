const { Tag } = require("../models/index");

class Tagcontroller {
  async store(req, res) {
    try {
      const { name, color } = req.body;

      const existingTag = await Tag.findOne({ where: { name } });
      if (existingTag) {
        return res.status(400).json({ message: "Tag já existe!" });
      }

      const tag = await Tag.create({ name, color });
      return res.status(201).json(tag);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Falha ao cria tag!" });
    }
  }

  async index(req, res) {
    try {
      const tags = await Tag.findAll();

      return res.status(200).json(tags);
    } catch (error) {
      return res.status(400).json({ message: "Falha ao listar tag!" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const tags = await Tag.findByPk(id);

      if (!tags) {
        return res.status(404).json({ message: "Tag não encontrada!" });
      }
      return res.status(200).json(tags);
    } catch (error) {
      return res.status(404).json({ message: "Falha ao encontrar tag!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, color } = req.body;

      const tag = await Tag.findByPk(id);

      if (!tag) {
        return res.status(404).json({ message: "Tag não encontrada!" });
      }

      tag.name = name;

      tag.color = color;

      await tag.save();

      return res.status(200).json(tag);
    } catch (error) {
      return res.status(404).json({ message: "Falha ao encontrar tag!" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tag.findByPk(id);

      if (!tag) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
      }

      await Tag.destroy({ where: { id } });
      return res.status(200).json({ message: "Tarefa excluida com sucesso!" });
    } catch (error) {
      return res.status(404).json({ message: "Falha ao excluir tarefa!" });
    }
  }
}

module.exports = new Tagcontroller();
