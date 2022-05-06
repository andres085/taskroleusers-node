'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsToMany(models.User, {
        foreignKey: "userId",
        through: "UserTasks"
      })
    }
  }
  Task.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Task',
  });
  return Task;
};