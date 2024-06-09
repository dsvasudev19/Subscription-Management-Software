const { Plan, Feature } = require("../models");

const addPlan = async (req, res, next) => {
  try {
    const { price, name, description, duration, featureIds } = req.body;
    const newPlan = await Plan.create({ price, name, description, duration });

    if (Array.isArray(featureIds) && featureIds.length > 0) {
      const features = await Feature.findAll({
        where: { id: featureIds },
      });
      await newPlan.setFeatures(features);
    }

    res.status(201).json(newPlan);
  } catch (error) {
    next(error);
  }
};

const updatePlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { price, name, description, duration, featureIds } = req.body;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    await plan.update({ price, name, description, duration });

    if (Array.isArray(featureIds) && featureIds.length > 0) {
      const features = await Feature.findAll({
        where: { id: featureIds },
      });
      await plan.setFeatures(features);
    }

    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};

const deletePlan = async (req, res, next) => {
  try {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    await plan.destroy();

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllPlans = async (req, res, next) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json(plans);
  } catch (error) {
    next(error);
  }
};

const getPlanById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};

const addSingleFeature = async (req, res, next) => {
  try {
    const { planId, featureId } = req.body;

    const plan = await Plan.findByPk(planId);
    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    const feature = await Feature.findByPk(featureId);
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }

    await plan.addFeature(feature);

    res.status(200).json({ message: "Feature added to plan successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPlan,
  updatePlan,
  deletePlan,
  getAllPlans,
  getPlanById,
  addSingleFeature,
};
