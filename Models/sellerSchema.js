const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "seller",
    require: true,
  },
});

module.exports = mongoose.model("Seller", sellerSchema);
