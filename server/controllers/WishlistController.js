const WishlistItem = require("../models/WishlistItem");
const Product = require("../models/Product");

class WishlistController {
  static async getWishlist(req, res) {
    try {
      const items = await WishlistItem.findAll({
        where: { user_id: req.user.id },
        include: [{ model: Product, attributes: ["id","product_name","price","product_image","stock_quantity"] }],
        order: [["created_at","DESC"]],
      });
      return res.json({ data: items });
    } catch (error) { return res.status(500).json({ message: "Failed to fetch wishlist", error: error.message }); }
  }
  static async addToWishlist(req, res) {
    try {
      const { product_id } = req.body;
      const user_id = req.user.id;
      if (!product_id) return res.status(400).json({ message: "product_id is required" });
      const product = await Product.findByPk(product_id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      const existing = await WishlistItem.findOne({ where: { user_id, product_id } });
      if (existing) return res.status(409).json({ message: "Already in wishlist" });
      const item = await WishlistItem.create({ user_id, product_id });
      return res.status(201).json({ message: "Added to wishlist", data: item });
    } catch (error) { return res.status(500).json({ message: "Failed to add to wishlist", error: error.message }); }
  }
  static async removeFromWishlist(req, res) {
    try {
      const { id } = req.params;
      const item = await WishlistItem.findOne({ where: { id, user_id: req.user.id } });
      if (!item) return res.status(404).json({ message: "Wishlist item not found" });
      await item.destroy();
      return res.json({ message: "Removed from wishlist" });
    } catch (error) { return res.status(500).json({ message: "Failed to remove from wishlist", error: error.message }); }
  }
}
module.exports = WishlistController;
