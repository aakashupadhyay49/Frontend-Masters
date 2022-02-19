const User = require("../models/user.test.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/redis");
require("dotenv").config();

const {
	INTERNAL_SERVER_ERROR,
	OK,
	BAD_REQUEST,
} = require("../utils/error_codes");

const generateToken = (user) => {
	return jwt.sign(
		{
			first_name: user.first_name,
			last_name: user.last_name,
			username: user.username,
			roles: user.roles || "user",
		},
		process.env.SECRET_HASH
	);
};

const getUsers = async (req, res) => {
	try {
		// { roles: { $not: { $in: ["admin"] } } }
		const users = await User.find().lean().exec();
		return res.status(OK).send(users);
	} catch (err) {
		console.log("Error", err);
		return res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
	}
};

const registerUser = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email }).exec();
		if (user) {
			return res
				.status(BAD_REQUEST)
				.send({ message: "User with this email already exists" });
		}

		user = await User.create(req.body);
		delete user.roles;
		let token = generateToken(user);
		return res.status(OK).send({ user, token });
	} catch (err) {
		console.log("Error", err);
		return res.status(INTERNAL_SERVER_ERROR).send({ err: err.message });
	}
};

const loginUser = async (req, res) => {
	try {
		let user = await User.findOne({
			$or: [{ email: req.body.email }, { username: req.body.username }],
		}).exec();
		if (!user) {
			return res
				.status(BAD_REQUEST)
				.send({ message: `Email id or password incorrect` });
		}

		const match = user.checkPassword(req.body.password);
		if (!match) {
			return res
				.status(BAD_REQUEST)
				.send({ message: `Email id or password incorrect` });
		}

		delete user.roles;
		const token = generateToken(user);
		return res.status(OK).send({ user, token });
	} catch (err) {
		console.log("Error", err);
		return res.status(OK).send({ error: err.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(BAD_REQUEST).send({ message: `No user found` });
		}

		delete user.roles;
		return res.status(OK).send(user);
	} catch (err) {
		console.log("Error", err);
		return res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
	}
};

module.exports = { registerUser, loginUser, deleteUser, getUsers };
