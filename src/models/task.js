"use strict";
const { Model, ForeignKeyConstraintError } = require("sequelize");
const TagController = require("../controllers/TagController");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    
    static associate(models) {
      Task.belongsToMany(models.Tag, {
        through: "TagTask",
        as: "tags",
        foreignKey: "TaskId",
      });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      status: DataTypes.STRING,
      priority: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
