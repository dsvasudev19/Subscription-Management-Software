const { Coupon } = require("../models");

const getAllCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.findAll();
    res.status(200).json({ success: true, message: "coupons found", coupons });
  } catch (error) {
    next(error);
  }
};

const getCouponById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findByPk(id);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    res.status(200).json({ success: true, message: "coupon found", coupon });
  } catch (error) {
    next(error);
  }
};
const createCoupon = async (req, res, next) => {
  try {
    const { code, discount, expiry } = req.body;
    const newCoupon = await Coupon.create({ code, discount, expiry });
    res.status(201).json({
      success: true,
      message: "coupon created successfully",
      newCoupon,
    });
  } catch (error) {
    next(error);
  }
};

const updateCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, discount, expiry } = req.body;
    const coupon = await Coupon.findByPk(id);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    await coupon.update({ code, discount, expiry });
    res.status(200).json(coupon);
  } catch (error) {
    next(error);
  }
};

const deleteCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupon = await Coupon.findByPk(id);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    await coupon.destroy();
    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCoupons,
  getCouponById,
  createCoupon,
  updateCoupon,
  deleteCoupon,
};
