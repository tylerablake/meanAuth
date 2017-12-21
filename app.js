const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

// //Connect to DB
// mongoose.connect(config.database);

// //On Connection
// mongoose.connection.on('connected', function(){
//     console.log('Connected to database ' + config.database);
// });

// //On Error
// mongoose.connection.on('error', function(error){
//     console.log('Database error: ' + error);
// });

const app = express();

const users = require('./routes/users');

//Port Number
const port = 8000;

//CORS Middleware
app.use(cors());

//Set Static Folder for Angular
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Route
app.get('/', function(req,res){
    res.send('Coming Soon');
})

//Start Server
app.listen(port, function(){
    console.log('Server started on port ' + port);
});