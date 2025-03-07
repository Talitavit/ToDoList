"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    
    static associate(models) {
      Task.belongsToMany(models.Tag, {
        through: "TagTasks",
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
