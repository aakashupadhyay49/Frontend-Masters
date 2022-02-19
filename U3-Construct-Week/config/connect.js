const mongoose = require("mongoose");

module.exports = (url) => {
	console.log("connected to db");
	return mongoose.connect(url);
};
