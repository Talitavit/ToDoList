"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsTo(models.User, { foreignKey: "userId" });

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
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
