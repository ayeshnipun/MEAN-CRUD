const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ayeshnipun:ayeshnipun@cluster0-8zrdf.mongodb.net/test?retryWrites=true', (err) => {
	if (!err) {
		console.log('MongoDB connection succeeded');
	} else {
		console.log('Error : ' + JSON.stringify(err, undefined, 2));		
	}
});

module.exports = mongoose;