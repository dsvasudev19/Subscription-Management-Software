"use strict";

const {Admin}=require("./../../src/models")
const bcrypt=require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin User",
          email: "admin@example.com",
          password: bcrypt.hashSync("demo",10),
          role: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Normal User",
          email: "user@example.com",
         password: bcrypt.hashSync("demo",10),
          role: "User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SuperAdmin User",
          email: "superadmin@example.com",
          password: bcrypt.hashSync("demo",10),
          role: "SuperAdmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await Admin.create({
      name:"Super Admin",
      email:"admin@demo.com",
      password:bcrypt.hashSync("demo",10)
    })
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          userId: 1,
          planId: 1,
          startDate: new Date(),
          endDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
          count: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Subscriptions", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
