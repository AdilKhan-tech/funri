const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const authenticateToken = require("../middlewares/authenticateToken");
router.use(authenticateToken);
router.get("/", OrderController.getOrders);
router.post("/create", OrderController.createOrder);
module.exports = router;
