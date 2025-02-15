"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsToMany(models.Task, {
        through: "TagTasks",
        as: "tasks",
        foreignKey: "TagId",
      });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
