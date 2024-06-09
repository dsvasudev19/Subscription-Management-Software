const { Subscription, Plan, Feature } = require("../models");
const moment = require("moment");

const authorize = (feature) => {
  return async (req, res, next) => {
    try {
      if (req.user.role === "SuperAdmin") {
        return next();
      }
      const userId = req.user.id;
      const subscription = await Subscription.findOne({
        where: {
          userId,
          createCount: { [Op.gt]: 0 },
          endDate: { [Op.gte]: moment().toDate() },
        },
      });
      if (!subscription) {
        return res
          .status(403)
          .json({ error: "User does not have an active subscription" });
      }
      const plan = await Plan.findByPk(subscription.planId, {
        include: [{ model: Feature, as: "features" }],
      });
      if (!plan) {
        return res.status(403).json({ error: "Failed to fetch plan details" });
      }
      const hasFeature = plan.features.some((f) => f.name === feature);
      if (!hasFeature) {
        return res.status(403).json({
          error: `The subscribed plan does not include the feature: ${feature}`,
        });
      }
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = authorize;
