const express = require('express');
const router = express.Router();
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Product = require('../models/product');



//get all products
router.get('', (req, res, next) => {
	res.send('PRODUCTS');

});

//Add a product
router.post('/addproduct', (req, res, next)=>{
	let newProduct = new Product({
		name: req.body.name,
		sku: req.body.sku,
		category: req.body.category,
		description: req.body.description,
		price: req.body.price
	});

	Product.addProduct(newProduct, (err, product)=>{
		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Product added", productName: newProduct.name});

		}
	});
});


//Remove product
router.delete('/removeProduct', (req, res, next) =>{
	res.send('REmove PRoduct');
});

module.exports = router;




