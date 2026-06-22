const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const WishlistItem = sequelize.define("WishlistItem", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, { tableName: "wishlist_items", timestamps: false });
module.exports = WishlistItem;
