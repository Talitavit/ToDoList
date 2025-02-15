const db = require("../models");
const { Tag } = db;

class Tagcontroller {
  async store(req, res) {
   try {
         const { name , color } = req.body;

         const existingTag = await Tag.findOne({ where: { name } });
         if (existingTag) {
           return res.status(400).json({ message: "Tag já existe!" });
         }

         const tag = await Tag.create({ name, color});
         return res.status(201).json(tag);
       } catch (error) {
         return res.status(400).json({ message: "Falha ao cria tag!" });
       }
  }
}

module.exports = new Tagcontroller();
