const express = require("express");
const router = express.Router();

const adminRoutes=require("../Routes/admin_routes")
const sellerRoutes = require("../Routes/seller_route")
const userRoutes = require("../Routes/user_route")
const productRoutes = require("../Routes/product_route")

router.use("/admin", adminRoutes);
router.use("/seller", sellerRoutes);
router.use("/user", userRoutes);
router.use(productRoutes);
module.exports = router;