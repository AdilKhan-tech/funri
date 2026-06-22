const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/EmailController");

router.post("/order", EmailController.sendOrderEmail);
router.post("/contact", EmailController.sendContactEmail);

module.exports = router;
