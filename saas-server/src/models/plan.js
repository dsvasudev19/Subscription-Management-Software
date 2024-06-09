"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Feature, {
        through: models.PlanFeatures,
        foreignKey: "planId",
        as: "features",
      });

      this.hasMany(models.Plan, {
        foreignKey: "planId",
        as: "plans",
      });
    }
  }
  Plan.init(
    {
      price: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
