const express = require("express");
const {
  adminSignin,
  viewProducts,
  viewSellers,
	viewUsers,
} = require("../Controllers/admin_controller");
const isAuthenticatedUser = require("../Middlewares/auth");
const router = express.Router();
router.post("/signin", adminSignin)
router.get("/products", isAuthenticatedUser, viewProducts);
// Can view Sellers
router.get("/Sellers", isAuthenticatedUser,viewSellers);

// Can view Users
router.get("/user", isAuthenticatedUser, viewUsers);

// Can restrict Products, seller, purchasers
router.put("/user/restrict/:id", isAuthenticatedUser, (req, res) => {
  res.send("restrict the particular purchaser from doing any activity");
});
router.put("/Seller/restrict/:id", isAuthenticatedUser, (req, res) => {
  res.send("restrict the particular Seller from doing any activity");
});
router.put("/Products/restrict/:id", isAuthenticatedUser, (req, res) => {
  res.send("restrict the particular product to be shown in the list");
});

// Can view orders
router.get("/orders", isAuthenticatedUser, (req, res) => {
  res.send("list down all of the Orders");
});

module.exports = router;
