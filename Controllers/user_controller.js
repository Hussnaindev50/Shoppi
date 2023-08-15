const User = require("../Models/userSchema");
const sendToken = require("../Utils/token");
const hashing = require("../Utils/hashing");
const Order = require("../Models/orderSchema")
const Product=require("../Models/productSchema")
//Registration
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;
  const hashedPassword = await hashing.hashPassword(password);
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
  });
  sendToken(user, 201, res);
};
// Login
const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next("Please Enter Email & Password", 400);
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next("Invalid email or password", 401);
  }
  const isPasswordMatched = await user.comparePassword(password);
  console.log("the password match result: " + isPasswordMatched);
  if (!isPasswordMatched) {
    return next("Invalid email or password", 401);
  }
  sendToken(user, 200, res);
  console.log("Retrieved user:", user);
  console.log("Password match result:", isPasswordMatched);
};

// Users detail
const getUsers = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
};
//All prooducts view
const viewProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Controller to send Products in Cart
const addProductToCart = async (req, res) => {
  try {
    const productId = req.params.id;
    // Assuming you have a way to associate the cart with the purchaser, for example, using req.userId
    const userId = req.userId;
    const cartItem = { product: productId, user: userId };
    await Cart.create(cartItem);
    res.send(`Product with ID ${productId} has been added to the cart.`);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product to cart" });
  }
};

// Controller to view Products available in Cart
const viewCartProducts = async (req, res) => {
  try {
    // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
    const userId = req.userId;
    const cartItems = await Cart.find({ user:userId }).populate(
      "product"
    );
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};

// Controller for User to Checkout
const checkout = async (req, res) => {
  try {
    // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
    const userId = req.userId;
    const cartItems = await Cart.find({ user: userId });

    // Assuming you have a way to calculate the total amount and other details for the order
    const order = {
      user: userId,
      products: cartItems.map((item) => item.product),
      totalAmount: 100, // Replace with the actual calculated total amount
      createdAt: new Date(),
    };

    await Order.create(order);

    // Assuming you have a way to handle payment processing (e.g., using Stripe API
    // Clear the cart after successful checkout
    await Cart.deleteMany({ purchaser: purchaserId });

    res.send("Checkout via Stripe");
  } catch (error) {
    res.status(500).json({ message: "Failed to complete checkout" });
  }
};

// Controller to View Order List
const viewOrders = async (req, res) => {
  try {
    // Assuming you have a way to associate orders with the purchaser, for example, using req.userId
    const userId = req.userId;
    const orders = await Order.find({ user: userId }).populate(
      "products"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

module.exports = {
  registerUser,
  signIn,
  getUsers,
  viewProducts,
  addProductToCart,
  viewCartProducts,
  checkout,
  viewOrders,
};
