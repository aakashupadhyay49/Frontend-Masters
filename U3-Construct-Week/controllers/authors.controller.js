const Author = require("../models/authors.test.model");
const redis = require("../config/redis");

const { INTERNAL_SERVER_ERROR, OK } = require("../utils/error_codes");

const getAuthorsStatic = async (req, res) => {
	try {
		const authors = await Author.find().lean().exec();
		return res.status(OK).send(authors);
	} catch (err) {
		console.log("Error", err);
		return res.status(INTERNAL_SERVER_ERROR).send({ err: err.messgage });
	}
};

const createAuthor = async (req, res) => {
	try {
		const author = req.body;
		author.authorImg = req.file.path;
		await Author.create(author);

		return res.status(OK).send(author);
	} catch (err) {
		console.log(err);
		return res.status(INTERNAL_SERVER_ERROR).send({ err: err.message });
	}
};

module.exports = { getAuthorsStatic, createAuthor };
