const mongoose = require("mongoose");

const singleOrderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const donHang = mongoose.Schema({
  orderId: { type: String, required: true },
  fromName: { type: String, required: true },
  fromAddress: { type: String, required: true },
  fromPhone: { type: String, required: true },
  // fromPostalCode: {type: String, required: true},
  typePackage: { type: String, required: true },
  specialService: { type: String },
  // instructionWhenUnavailable: { type: String, required: true },
  content: { type: String, required: true },
  toName: { type: String, required: true },
  toAddress: { type: String, required: true },
  toPhone: { type: String, required: true },
  // toPostalCode: {type: String, required: true },
  region: { type: String, required: true },
  point: { type: String, required: true },
  weight: { type: Number },
  orderTime: { type: Date },
  receiveTime: { type: Date },
  subTotal: { type: Number },
  otherCost: { type: Number },
  totalCost: { type: Number },
  orderStatus: {
    type: String,
    required: true,
    enum: ["Tạo đơn thành công", "Đang giao", "Giao thành công", "Thất bại"],
    default: "Tạo đơn thành công",
  },
});

const orderSchema = mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingFee: {
      type: Number,
      required: true,
      default: 0,
    },
    // subtotal is total for all orderItems (price * quantity)
    subtotal: {
      type: Number,
      required: true,
      default: 0,
    },
    // total = subtotal + shippingFee + tax
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    orderItems: [singleOrderItemSchema],
    status: {
      type: String,
      enum: ["pending", "failed", "paid", "delivered", "canceled"],
      default: "pending",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: String,
      required: true,
      default: "Unknown",
    },
    phone: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", donHang);

module.exports = Order;
