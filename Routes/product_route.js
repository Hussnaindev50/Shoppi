const { Router } = require("express");
const router = Router();
const Product= require("../Models/productSchema");
const Seller = require("../Models/sellerSchema");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error(error.message);
    res.send("Something went wrong");
  }
});

router.delete("/products", async (req, res) => {
  try {
    const deleteResult = await Seller.deleteMany({});

    if (deleteResult.deletedCount > 0) {
      res.send(`Deleted ${deleteResult.deletedCount} products.`);
    } else {
      res.send("No products found to delete.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
