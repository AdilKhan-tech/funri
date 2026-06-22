const Product = require("../models/Product");
const { Op } = require("sequelize");

class ProductController {

    static async createProduct(req, res, next) {
        try {
            const {
                product_name,
                name,
                name_en,
                price,
                category,
                stock_quantity,
                description,
                product_image,
                image_url,
            } = req.body;

            const finalProductName = product_name || name || name_en;
            if (!finalProductName) {
                return res.status(400).json({ message: "product_name is required" });
            }
            if (price === undefined || price === null || Number.isNaN(Number(price))) {
                return res.status(400).json({ message: "price must be a valid number" });
            }
            if (!category) {
                return res.status(400).json({ message: "category is required" });
            }

            const finalStockQuantity = stock_quantity === undefined ? 0 : Number(stock_quantity);
            if (!Number.isInteger(finalStockQuantity) || finalStockQuantity < 0) {
                return res.status(400).json({ message: "stock_quantity must be a non-negative integer" });
            }

            const finalProductImage = req.file?.path || product_image || image_url || "";

            const product = await Product.create({
                product_name: finalProductName,
                price: Number(price),
                category,
                stock_quantity: finalStockQuantity,
                description: description || "",
                product_image: finalProductImage,
            });
            return res.status(201).json(product);
        }catch (error) {
            next(error)
        }
    }

    static async getAllProducts(req, res) {
        const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
        const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 100);
        const offset = (page - 1) * limit;
        const { keywords, sortField, sortOrder } = req.query;

        try {
            const whereClause = {};

            if (keywords) {
                whereClause[Op.or] = [{ product_name: { [Op.like]: `%${keywords}%` } }];
            }

            const allowedSortFields = ["id", "product_name", "price", "category", "stock_quantity", "created_at", "updated_at"];
            const finalSortField = allowedSortFields.includes(sortField) ? sortField : "id";
            const finalSortOrder = sortOrder && sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC";

            const { count, rows } = await Product.findAndCountAll({
                where: whereClause,
                limit,
                offset,
                order: [[finalSortField, finalSortOrder]],
            });

            return res.status(200).json({
                pagination: {
                    page,
                    limit,
                    total: count,
                    pageCount: Math.ceil(count / limit),
                },
                data: rows,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Failed to retrieve products",
                error: error.message,
            });
        }
    }

    static async updateProductById(req, res, next) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            const {
                product_name,
                name,
                name_en,
                price,
                category,
                stock_quantity,
                description,
                product_image,
                image_url,
            } = req.body;

            const finalProductName = product_name ?? name ?? name_en ?? product.product_name;
            const finalPrice = price === undefined ? product.price : Number(price);
            if (Number.isNaN(finalPrice)) {
                return res.status(400).json({ message: "price must be a valid number" });
            }

            const rawStock = stock_quantity === undefined ? product.stock_quantity : Number(stock_quantity);
            if (!Number.isInteger(rawStock) || rawStock < 0) {
                return res.status(400).json({ message: "stock_quantity must be a non-negative integer" });
            }

            const finalProductImage = req.file?.path || product_image || image_url || product.product_image || "";

            await product.update({
                product_name: finalProductName,
                price: finalPrice,
                category: category ?? product.category,
                stock_quantity: rawStock,
                description: description ?? product.description,
                product_image: finalProductImage,
            });

            return res.status(200).json(product);
    
        }catch (error) {
            next(error);
        }
      }

    static async deleteProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            await product.destroy();
            return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete Product", error: error.message });
        }
    }
}

module.exports = ProductController;
