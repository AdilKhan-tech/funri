const Product = require("../models/Product");
// const Gender = require("../models/Product");
// const getPagination = require("../utils/pagination");
const { Op } = require("sequelize");

class GenderController {

    static async createProduct(req, res, next) {
        try {
            const { name_en, price, } = req.body;

            const image_url = req.file?.path || null;

            const product = await Product.create({
                name_en,
                price,
                image_url,
            });
            return res.status(201).json(product);
        }catch (error) {
            next(error)
        }
    }

    // static async getAllGenders(req, res) {
    //     const { page, limit, offset } = getPagination(req);
    //     const { keywords, sortField, sortOrder } = req.query;

    //     try {
    //         const whereClause = {};
    
    //         if (keywords) {
    //             whereClause[Op.or] = [
    //             { name_en: { [Op.like]: `%${keywords}%` } },
    //             { name_ar: { [Op.like]: `%${keywords}%` } },
    //             ];
    //         }
    
    //         const allowedSortFields = [
    //             "id",
    //             "name_en",
    //             "name_ar",
    //             "price"
    //         ];
    
    //         const finalSortField = allowedSortFields.includes(sortField) ? sortField : "id";
    //         const finalSortOrder = sortOrder && sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC";
        
    //         const { count, rows } = await Gender.findAndCountAll({
    //             where: whereClause,
    //             limit,
    //             offset,
    //             order: [[finalSortField, finalSortOrder]],
    //         });
    
    //         const pageCount = Math.ceil(count / limit);
        
    //         return res.status(200).json({
    //             pagination: {
    //                 page,
    //                 limit,
    //                 total: count,
    //                 pageCount,
    //             },
    //             data: rows,
    //         });
    //     } catch (error) {
    //         return res.status(500).json({
    //             message: "Failed to retrieve genders",
    //             error: error.message,
    //         });
    //     }
    // }

    static async updateProductById(req, res, next) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
        
            const { name_en, price, } = req.body;
        
            const image_url = req.file?.path || product.image_url;
        
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

module.exports = GenderController;
