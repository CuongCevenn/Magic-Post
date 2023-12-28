const Order = require("../models/Order");
const Product = require("../models/Product");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = "some-random-value";
  return { client_secret, amount };
};

function generateRandomString(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const createOrderId = async (req, res) => {
  let randomId = 0;
  let flag = 1;
  while (flag) {
    randomId = generateRandomString(10);
    const orderId = await Order.findOne({ orderId: randomId });
    if (!orderId) {
      flag = 0;
    }
  }
  res.status(210).json({ orderId: randomId });
};

const createOrder = async (req, res) => {
  const {
    orderId,
    fromName,
    fromAddress,
    fromPhone,
    typePackage,
    content,
    toName,
    toAddress,
    toPhone,
    region,
    point,
    orderStatus,
  } = req.body;

  const order = await Order.create({
    orderId,
    fromName,
    fromAddress,
    fromPhone,
    typePackage,
    content,
    toName,
    toAddress,
    toPhone,
    region,
    point,
    orderStatus,
  });

  res.status(201).json({
    orderId: order.orderId,
    fromName: order.fromName,
    fromAddress: order.fromAddress,
    fromPhone: order.fromPhone,
    typePackage: order.typePackage,
    content: order.content,
    toName: order.etoName,
    toAddress: order.Address,
    toPhone: order.toPhone,
    region: order.region,
    point: order.point,
    orderStatus: order.orderStatus,
  });
  // Then the frontend can proceed to checkout, and when payment is made, the status will change to 'paid'
};

const acceptOrderChangeRegion = async (req, res) => {
  const { orderId, region } = req.body;
  const result_region = await Order.updateOne(
    { orderId },
    { $set: { region: region } }
  );
  if ((result_region.modifiedCount > 0)) {
    res.status(211).json({ msg: "Cap nhat thanh cong" });
  } else {
    res.status(404).json({ msg: `No document with ID ${orderId} found.` });

  }
};

const acceptOrderChangePoint = async (req, res) => {
  const { orderId, point } = req.body;
  const result = await Order.updateOne({ orderId }, { $set: { point: point } });
  if (result.modifiedCount > 0) {
    console.log(`Document with ID ${orderId} updated point successfully.`);
    res.status(211).json({ msg: "Cap nhat thanh cong" });
  } else {
    res.status(404).json({ msg: "loi doi point" });
  }
}

const acceptOrderDone = async (req, res) => {
  const { orderId, orderStatus } = req.body;
  const result = await Order.updateOne({ orderId }, { $set: { orderStatus: orderStatus } });
  if (result.modifiedCount > 0) {
    console.log(`Document with ID ${orderId} updated point successfully.`);
    res.status(211).json({ msg: "Cap nhat thanh cong" });
  } else {
    res.status(404).json({ msg: "loi doi point" });
  }
}

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
  createOrderId,
  acceptOrderChangeRegion,
  acceptOrderChangePoint,
  acceptOrderDone
};
