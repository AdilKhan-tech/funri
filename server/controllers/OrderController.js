const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const CartItem = require("../models/CartItem");
const Product = require("../models/Product");
const sequelize = require("../config/database");

class OrderController {
  static async getOrders(req, res) {
    try {
      const orders = await Order.findAll({
        where: { user_id: req.user.id },
        include: [{ model: OrderItem, include: [{ model: Product, attributes: ["id","product_name","product_image"] }] }],
        order: [["created_at","DESC"]],
      });
      return res.json({ data: orders });
    } catch (error) { return res.status(500).json({ message: "Failed to fetch orders", error: error.message }); }
  }
  static async createOrder(req, res) {
    const t = await sequelize.transaction();
    try {
      const { shipping_address } = req.body;
      const user_id = req.user.id;
      if (!shipping_address) { await t.rollback(); return res.status(400).json({ message: "shipping_address is required" }); }
      const cartItems = await CartItem.findAll({ where: { user_id }, include: [{ model: Product }], transaction: t });
      if (cartItems.length === 0) { await t.rollback(); return res.status(400).json({ message: "Cart is empty" }); }
      let total = 0;
      const orderItemsData = cartItems.map((item) => { total += item.Product.price * item.quantity; return { product_id: item.product_id, quantity: item.quantity, price: item.Product.price }; });
      const order = await Order.create({ user_id, total, shipping_address, status: "Processing" }, { transaction: t });
      await OrderItem.bulkCreate(orderItemsData.map((i) => ({ ...i, order_id: order.id })), { transaction: t });
      await CartItem.destroy({ where: { user_id }, transaction: t });
      await t.commit();
      const created = await Order.findByPk(order.id, { include: [{ model: OrderItem, include: [{ model: Product }] }] });
      return res.status(201).json({ message: "Order placed successfully", data: created });
    } catch (error) { await t.rollback(); return res.status(500).json({ message: "Failed to place order", error: error.message }); }
  }
}
module.exports = OrderController;
