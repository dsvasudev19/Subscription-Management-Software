"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Plans",
      [
        {
          price: "Free",
          name: "Basic Plan",
          description: "Free for 14 Days: Limited to 1 user",
          duration: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "4999 INR",
          name: "Standard Plan",
          description: "INR 4999 Per Year, Per User, up to 5 users",
          duration: 365,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "3999 INR",
          name: "Plus Plan",
          description: "INR 3999 Per Year, Per User above 10 users",
          duration: 365,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Features",
      [
        {
          name: "ViewUser",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CreateUser",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CreatePlan",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DeletePlan",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpdatePlan",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ViewPlan",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpdateUser",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "DeleteUser",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CreateFeature",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ViewFeature",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpdateFeature",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DeleteFeature",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DeleteCoupon",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CreateCoupon",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UpdateCoupon",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ViewCoupon",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "PlanFeatures",
      [
        {
          planId: 1,
          featureId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planId: 1,
          featureId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planId: 2,
          featureId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planId: 2,
          featureId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planId: 3,
          featureId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PlanFeatures", null, {});
    await queryInterface.bulkDelete("Features", null, {});
    await queryInterface.bulkDelete("Plans", null, {});
  },
};
