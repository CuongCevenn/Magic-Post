const Order = require("../models/Order");
const Product = require("../models/Product");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = "some-random-value";
  return { client_secret, amount };
};

const createOrder = async (req, res) => {
  const { fromName, fromAddress, fromPhone, typePackage, content, toName, toAddress, toPhone } = req.body;

  const order = await Order.create({
    fromName,
    fromAddress,
    fromPhone,
    typePackage,
    content,
    toName,
    toAddress,
    toPhone
  });

  res.status(201).json({ order });
  // Then the frontend can proceed to checkout, and when payment is made, the status will change to 'paid'
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.json({ count: orders.length, orders });
};

const getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    throw new CustomError.NotFoundError(`No Order with id: ${req.params.id}`);
  }
  checkPermissions({ requestUser: req.user, resourceUserId: order.user });
  res.json({ order });
};

const getCurrentUserOrders = async (req, res) => {
  const userOrders = await Order.find({ user: req.user.userId });
  res.json({ count: userOrders.length, orders: userOrders });
};

const updateOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { paymentIntentId } = req.body;

  if (!order) {
    throw new CustomError.NotFoundError(`No Order with id: ${req.params.id}`);
  }
  checkPermissions({ requestUser: req.user, resourceUserId: order.user });

  order.paymentIntentId = paymentIntentId;
  order.status = "paid";
  await order.save();

  res.json({ order });
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
};
