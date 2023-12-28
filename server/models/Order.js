const mongoose = require("mongoose");

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

const Order = mongoose.model("Order", donHang);

module.exports = Order;
