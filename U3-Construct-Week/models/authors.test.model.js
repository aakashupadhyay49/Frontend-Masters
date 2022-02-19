const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
	{
		author: {
			type: String,
			required: true,
		},
		authorJob: {
			type: String,
			required: true,
		},
		authorImg: {
			type: String,
			required: false,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model("author", authorSchema);
