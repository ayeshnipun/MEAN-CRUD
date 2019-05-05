const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./mongo');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());
app.listen(4000, () => console.log("Server started at port 4000"));
app.use('/employees', employeeController)
