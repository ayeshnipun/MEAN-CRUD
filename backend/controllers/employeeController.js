const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee.model');

router.get('/', (req, res) => {
	Employee.find((err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			console.log('Error : '+ JSON.stringify(err, undefined, 2));
		}
	})
})

router.post('/', (req, res) => {
	var emp = new Employee({
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary,
	})

	emp.save((err, doc) => {
		if (!err) {
			console.log(doc);
			res.send(doc);
		} else {
			console.log('Error : '+ JSON.stringify(err, undefined, 2));
		}
	})
})

module.exports = router