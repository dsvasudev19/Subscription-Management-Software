"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Subscription, {
        foreignKey: "userId",
        as: "subscriptions",
      });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM({ values: ["Admin", "SuperAdmin", "User"] }),
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
