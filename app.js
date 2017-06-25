const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);

});

//On error
mongoose.connection.on('error', () =>{
	console.log('Database error ' + err);
});

//Body Parser Middleware
app.use(bodyParser.json());

//required Routes files
const users = require('./routes/users');
const products = require('./routes/products');

//Routes
app.get('/', (req, res) =>{
	res.send('Invalid Endpoint');
})

//use Routes
app.use('/api/users', users);
app.use('/api/products',products);

//Start Server
app.listen(config.port, ()=>{
	console.log('Listening on port ' + config.port);

});

