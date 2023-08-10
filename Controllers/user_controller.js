const User = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const sendToken = require("../Utils/token");
const hashing = require("../Utils/hashing");

//Registration
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;
  const hashedPassword = await hashing.hashPassword(password);
  console.log(`the hashed password ${hashedPassword}`);
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

module.exports = { registerUser, signIn, getUsers };
