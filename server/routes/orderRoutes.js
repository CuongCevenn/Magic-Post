const express = require("express");
const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
  createOrderId,
  acceptOrderChangeRegion,
  acceptOrderChangePoint,
  acceptOrderDone,
  findMyOrder,
  acceptOrder,
} = require("../controllers/orderController");
const {
  authorizePermissions,
  authenticateUser,
  authenticatePointStaff,
  authenticateRegionStaff
} = require("../middleware/authentication");

const router = express.Router();

router
  .route("/")
  .post(authenticatePointStaff, createOrder)
  // .get(authorizePermissions("leader"), getAllOrders);
  .get(getAllOrders);

router.route("/ps/createId").post(authenticatePointStaff, createOrderId);
router.route("/ps/changePoint").post(authenticatePointStaff, acceptOrderChangePoint);
router.route("/ps/changeStatus").post(authenticatePointStaff, acceptOrderDone);


router.route("/rs/changeRegion").post(authenticateRegionStaff, acceptOrderChangeRegion);
router.route("/rs/changeStatus").post(authenticateRegionStaff, acceptOrderDone);
router.route("/rs/changePoint").post(authenticateRegionStaff, acceptOrderChangePoint);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);
router.route("/findMyOrder").post(findMyOrder);

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
