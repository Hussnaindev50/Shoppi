const mongoose=require("mongoose")
const Product = require("../Models/productSchema")
//Add Product
const createProduct = async (req, res) => {
	const { name, description, price, quantity } = req.body;
	const product = await Product.create({
		name,
		description,
		price,
		quantity
	})
	res.send(product)
}
//Update product
const updateProduct = async (req, res) => {
	const id =new mongoose.Types.ObjectId(req.params);
	const { name, description, price, quantity } = req.body;
	const updatedProduct = await Product.findByIdAndUpdate(id,{
name, description, price, quantity
	})
	console.log(updatedProduct)
}
//Get Products
const getProducts = async (req, res) => {
		const id = new mongoose.Types.ObjectId(req.params);
    const getProduct = await Product.findById(id);
    console.log(getProduct);
}
//Delete Product
const deleteProduct = async (req, res) => {
		const id = new mongoose.Types.ObjectId(req.params);
	const delProduct = await Product.findByIdAndDelete(id);
	console.log(delProduct)
}
module.exports = { createProduct,deleteProduct,updateProduct,getProducts }