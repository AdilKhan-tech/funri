const User = require("./User");
const Product = require("./Product");
const CartItem = require("./CartItem");
const WishlistItem = require("./WishlistItem");
const Order = require("./Order");
const OrderItem = require("./OrderItem");

CartItem.belongsTo(User, { foreignKey: "user_id" });
CartItem.belongsTo(Product, { foreignKey: "product_id" });
WishlistItem.belongsTo(User, { foreignKey: "user_id" });
WishlistItem.belongsTo(Product, { foreignKey: "product_id" });
Order.belongsTo(User, { foreignKey: "user_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });
Order.hasMany(OrderItem, { foreignKey: "order_id" });

module.exports = { User, Product, CartItem, WishlistItem, Order, OrderItem };
