const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/productController');
// const authenticateToken = require("../middlewares/authenticateToken");

// const upload = require("../middlewares/upload")

router.post('/create', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
// router.put('/update/:id', upload.single("image_url"),  GenderController.updateGenderById);
// router.delete('/delete/:id', GenderController.deleteGenderById);


module.exports = router;
