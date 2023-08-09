const User = require("../Models/userSchema");
const sendToken = require("../Utils/token");
//Registration
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password,role } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
		password,
		role
  });
  sendToken(user, 201, res);
};
// Login
const signIn = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return next("Please Enter Email & Password", 400);
  }
  const user = await User.findOne({ email }).select("password");
  if (!user) {
    return next("Invalid email or password", 401);
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next("Invalid email or password", 401);
  }
  sendToken(user, 200, res);
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
