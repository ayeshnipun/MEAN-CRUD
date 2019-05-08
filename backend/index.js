const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const { mongoose } = require('./mongo');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4000, () => console.log("Server started at port 4000"));
app.use('/employees', employeeController)
