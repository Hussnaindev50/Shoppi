const Admin = require("../Models/adminSchema")
const Seller = require("../Models/sellerSchema")
const User=require("../Models/userSchema")
const Product = require("../Models/productSchema")
const Order=require("../Models/orderSchema")
const adminSignin = async (req, res) => {
	const { email, password } = req.body;
  if (!email || !password) {
    return next("Please Enter Email & Password", 400);
  }
  const admin = await Admin.findOne({ email }).select("+password");
  if (!admin) {
    return next("Invalid email or password", 401);
  }
  const isPasswordMatched = await admin.comparePassword(password);
  console.log("the password match result: " + isPasswordMatched);
  if (!isPasswordMatched) {
    return next("Invalid email or password", 401);
  }
  sendToken(admin, 200, res);
  console.log("Retrieved user:", user);
  console.log("Password match result:", isPasswordMatched);
}
// Controller to View Products:
const viewProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Controller to View Sellers
const viewSellers = async (req, res) => {
  try {
    const sellers = await Seller.find({});
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sellers" });
  }
};

// Controller to View Users
const viewUsers= async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch purchasers" });
  }
};

// Controller to Restrict the User
const restrictUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await Purchaser.findByIdAndUpdate(userId, {
      isRestricted: true,
    });
    if (result) {
      res.send(`Purchaser with ID ${userId} has been restricted.`);
    } else {
      res.send(
        `Purchaser with ID ${userId} not found or already restricted.`
      );
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to restrict purchaser" });
  }
};

// Controller to Restrict the Seller
const restrictSeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;
    const result = await Seller.findByIdAndUpdate(sellerId, {
      isRestricted: true,
    });
    if (result) {
      res.send(`Seller with ID ${sellerId} has been restricted.`);
    } else {
      res.send(`Seller with ID ${sellerId} not found or already restricted.`);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to restrict seller" });
  }
};

// Controller to Restrict the Product
const restrictProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await Product.findByIdAndUpdate(productId, {
      isRestricted: true,
    });
    if (result) {
      res.send(`Product with ID ${productId} has been restricted.`);
    } else {
      res.send(`Product with ID ${productId} not found or already restricted.`);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to restrict product" });
  }
};

// Controller to View Orders
const viewOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};


module.exports = {
  adminSignin,
  viewProducts,
  viewSellers,
  viewUsers,
  restrictUser,
  restrictSeller,
  restrictProduct,
  viewOrders,
};