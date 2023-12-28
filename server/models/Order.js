const mongoose = require("mongoose");

const donHang = mongoose.Schema({
  orderId: { type: String, required: true },
  fromName: { type: String, required: true },
  fromAddress: { type: String, required: true },
  fromPhone: { type: String, required: true },
  typePackage: { type: String, required: true },
  content: { type: String, required: true },
  toName: { type: String, required: true },
  toAddress: { type: String, required: true },
  toPhone: { type: String, required: true },
  region: { type: String, required: true },
  point: { type: String, required: true },
  orderStatus: {
    type: String,
    required: true,
    enum: ["Tạo đơn thành công", "Đang giao", "Giao thành công", "Thất bại"],
    default: "Tạo đơn thành công",
  },
});

const Order = mongoose.model("Order", donHang);

module.exports = Order;
