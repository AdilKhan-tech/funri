const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  total: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.ENUM("Processing","Shipped","Delivered","Cancelled"), allowNull: false, defaultValue: "Processing" },
  shipping_address: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, { tableName: "orders", timestamps: false });
module.exports = Order;
