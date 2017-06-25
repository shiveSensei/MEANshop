const mongoose = require('mongoose');
const config = require('../config/database');

//Product Schema
const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	sku: {
		type: String,
		required: true,
		index: true,
		unique: true
	},
	description: {
		type: String,
		//required: true
	},
	price: {
		type: String,
		required: true
	}
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

//---------------------FUNCTIONS

//Add product to db
module.exports.addProduct = function (newProduct, callback) {
	newProduct.save(callback);

}

//Remove product by id
module.exports.removeProductBySku = function (sku, callbck) {
	Product.findOneAndRemove({'sku': req.body.sku}, (err, product)=>{
		res.

	});

}

//Update product

//Get products by category

