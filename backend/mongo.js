const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ayesh:ayesh@cluster0-zorpn.gcp.mongodb.net/Office?retryWrites=true', { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('MongoDB connection succeeded');
	} else {
		console.log('Error : ' + JSON.stringify(err, undefined, 2));		
	}
});

module.exports = mongoose;