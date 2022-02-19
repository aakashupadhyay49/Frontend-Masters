const jwt = require("jsonwebtoken");
require("dotenv").config();

const { StatusCodes } = require("http-status-codes");
const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.SECRET_HASH, function (err, user) {
			if (err) return reject(err);
			resolve(user);
		});
	});
};

const authenticate = async (req, res, next) => {
	if (!req?.headers?.authorization) {
		return res.status(BAD_REQUEST).send({ message: "Provide valid token" });
	}

	const bearerToken = req.headers.authorization;
	if (!bearerToken.startsWith("Bearer "))
		return res
			.status(BAD_REQUEST)
			.send({ message: "Please provide a valid authorization token" });

	const token = bearerToken.split(" ")[1];
	let user;
	try {
		user = await verifyToken(token);
	} catch (err) {
		console.log(err);
		return res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
	}

	req.user = user;
	return next();
};

module.exports = authenticate;
