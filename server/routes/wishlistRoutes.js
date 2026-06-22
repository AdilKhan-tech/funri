const express = require("express");
const router = express.Router();
const WishlistController = require("../controllers/WishlistController");
const authenticateToken = require("../middlewares/authenticateToken");
router.use(authenticateToken);
router.get("/", WishlistController.getWishlist);
router.post("/add", WishlistController.addToWishlist);
router.delete("/remove/:id", WishlistController.removeFromWishlist);
module.exports = router;
