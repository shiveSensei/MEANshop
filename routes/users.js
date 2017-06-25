const express = require('express');
const router = express.Router();
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//Get Users
router.get('/users', (req, res, next)=>{

	res.send('All users');

});

//Profile
router.get('/profile', (req, res, next)=>{
	res.send('YES');
});

module.exports = router;