const { Router } = require("express");
const router = Router();
const isAuthenticatedUser = require("../Middlewares/auth");
const imageUploader = require("../middlewares/cloudinary_upload");
const {
  registerSeller,
  signinSeller,
  createProduct,
  editProduct,
  deleteProduct,
  viewOrders,
  viewProduct,
  editOrderStatus,
} = require("../Controllers/seller_controller");
router.post("/signup", registerSeller);
router.post("/login", signinSeller);
router.post("/product", isAuthenticatedUser, imageUploader, createProduct);
router.put("/product/:id", isAuthenticatedUser, editProduct);
router.delete("/product/:id", isAuthenticatedUser, deleteProduct);
router.get("myOrders", isAuthenticatedUser, viewOrders);
router.get("/myProducts", isAuthenticatedUser, viewProduct);
router.get("/order/:id", isAuthenticatedUser, editOrderStatus);
module.exports = router;
