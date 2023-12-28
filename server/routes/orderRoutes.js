const express = require("express");
const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
  createOrderId,
  findMyOrder,
  acceptOrder,
} = require("../controllers/orderController");
const {
  authorizePermissions,
  authenticateUser,
  authenticatePointStaff,
} = require("../middleware/authentication");

const router = express.Router();

router
  .route("/")
  .post(authenticatePointStaff, createOrder)
  // .get(authorizePermissions("leader"), getAllOrders);
  .get(getAllOrders);

router.route("/ps/createId").post(authenticatePointStaff, createOrderId);
router.route("/ps/accept").post(authenticatePointStaff, acceptOrder);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);
router.route("/findMyOrder").post(findMyOrder);

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
