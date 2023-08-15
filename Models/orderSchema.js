const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },

});

module.exports = mongoose.model("Order", orderSchema);
