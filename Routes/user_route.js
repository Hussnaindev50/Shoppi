const express = require("express");
const router = express.Router();
const {
  registerUser,
  signIn,
  viewProducts,
  addProductToCart,
  viewCartProducts,
  checkout,
  viewOrders,
} = require("../Controllers/user_controller");
const  isAuthenticatedUser = require("../Middlewares/auth");

//User Route

router.post("/signup", registerUser);
router.post("/login", signIn);
//Admin Route
// router.get(isAuthenticatedUser, authorizeRoles("/admin/user"), getUsers);
// router.get( "/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),getSingleUser);
// .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
// .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
router.get("/products", viewProducts);
router.post("/myCart", isAuthenticatedUser, addProductToCart);
router.get("/myCart", isAuthenticatedUser, viewCartProducts);
router.post("/checkout", isAuthenticatedUser,checkout);
router.get("/orders/:id", isAuthenticatedUser, viewOrders);

module.exports = router;
