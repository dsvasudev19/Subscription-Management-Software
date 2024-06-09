const { Feature } = require("../models");

const getAllFeatures = async (req, res, next) => {
  try {
    const features = await Feature.findAll();
    res.status(200).json(features);
  } catch (error) {
    next(error);
  }
};

const getFeatureById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const feature = await Feature.findByPk(id);
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    res.status(200).json(feature);
  } catch (error) {
    next(error);
  }
};

const addFeature = async (req, res, next) => {
  try {
    const { name, status } = req.body;
    const newFeature = await Feature.create({ name, status });
    res.status(201).json(newFeature);
  } catch (error) {
    next(error);
  }
};

const updateFeature = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    const feature = await Feature.findByPk(id);
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    await feature.update({ name, status });
    res.status(200).json(feature);
  } catch (error) {
    next(error);
  }
};

const deleteFeature = async (req, res, next) => {
  try {
    const { id } = req.params;
    const feature = await Feature.findByPk(id);
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    await feature.destroy();
    res.status(200).json({ message: "Feature deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllFeatures, getFeatureById, addFeature, updateFeature, deleteFeature };
