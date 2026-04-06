const Product = require("../models/Product");
const { Op } = require("sequelize");

class ProductController {

    static async createProduct(req, res, next) {
        try {
            const { name, name_en, price } = req.body;
            const finalName = name || name_en;

            if (!finalName) {
                return res.status(400).json({ message: "name is required" });
            }

            const image_url = req.file?.path || "";

            const product = await Product.create({
                name: finalName,
                price,
                image_url,
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
                whereClause[Op.or] = [
                    { name: { [Op.like]: `%${keywords}%` } },
                ];
            }

            const allowedSortFields = ["id", "name", "price", "created_at", "updated_at"];
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
        
            const { name_en, price, } = req.body;
        
            const image_url = req.file?.path || product.image_url || "";
        
            await gender.update({
                name_en: name_en ?? product.name_en,
                price: price ?? product.price,
                image_url: image_url
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
