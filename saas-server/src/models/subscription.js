"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(models.Plan, {
        foreignKey: "planId",
        as: "plan",
      });
    }
  }
  Subscription.init(
    {
      userId: DataTypes.INTEGER,
      planId: DataTypes.INTEGER,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};
