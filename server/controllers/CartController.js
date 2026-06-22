const CartItem = require("../models/CartItem");
const Product = require("../models/Product");

class CartController {
  static async getCart(req, res) {
    try {
      const items = await CartItem.findAll({
        where: { user_id: req.user.id },
        include: [{ model: Product, attributes: ["id","product_name","price","product_image","stock_quantity"] }],
        order: [["created_at","DESC"]],
      });
      return res.json({ data: items });
    } catch (error) { return res.status(500).json({ message: "Failed to fetch cart", error: error.message }); }
  }
  static async addToCart(req, res) {
    try {
      const { product_id, quantity } = req.body;
      const user_id = req.user.id;
      if (!product_id) return res.status(400).json({ message: "product_id is required" });
      const product = await Product.findByPk(product_id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      const existing = await CartItem.findOne({ where: { user_id, product_id } });
      if (existing) { existing.quantity += quantity || 1; existing.updated_at = new Date(); await existing.save(); return res.json({ message: "Cart updated", data: existing }); }
      const item = await CartItem.create({ user_id, product_id, quantity: quantity || 1 });
      return res.status(201).json({ message: "Added to cart", data: item });
    } catch (error) { return res.status(500).json({ message: "Failed to add to cart", error: error.message }); }
  }
  static async updateCartItem(req, res) {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const item = await CartItem.findOne({ where: { id, user_id: req.user.id } });
      if (!item) return res.status(404).json({ message: "Cart item not found" });
      if (quantity < 1) return res.status(400).json({ message: "Quantity must be at least 1" });
      item.quantity = quantity; item.updated_at = new Date(); await item.save();
      return res.json({ message: "Cart updated", data: item });
    } catch (error) { return res.status(500).json({ message: "Failed to update cart", error: error.message }); }
  }
  static async removeFromCart(req, res) {
    try {
      const { id } = req.params;
      const item = await CartItem.findOne({ where: { id, user_id: req.user.id } });
      if (!item) return res.status(404).json({ message: "Cart item not found" });
      await item.destroy();
      return res.json({ message: "Removed from cart" });
    } catch (error) { return res.status(500).json({ message: "Failed to remove from cart", error: error.message }); }
  }
}
module.exports = CartController;
