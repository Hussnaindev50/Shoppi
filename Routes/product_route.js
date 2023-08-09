const express = require("express");
const router = express.Router();
const { createProduct, deleteProduct, updateProduct, getProducts,} = require("../Controllers/product_controller");
router.post("/products", createProduct);
router.post("/delproduct/:id", deleteProduct);
router.put("/product/:id", updateProduct)
router.get("/productdetail/:id",getProducts)
module.exports=router