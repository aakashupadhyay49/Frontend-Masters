const Tweet = require("../models/tweets.model");

// const tweets = require('../JSON/tweets.json');
const { OK } = require("../utils/error_codes");

// GET /tweets
//pagination for tweets
const getTweetsPagination = async (req, res, next) => {
	try {
		const page = req.query.page || 1;
		const limit = req.query.limit || 6;
		const skip = (page - 1) * limit;
		const tweets = await Tweet.find({}).skip(skip).limit(limit);
		res.status(OK).send(tweets);
	} catch (err) {
		next(err);
	}
};
const getTweets = async (req, res, next) => {
	try {
		const tweets = await Tweet.find();
		res.status(StatusCodes.OK).json(tweets);
	} catch (err) {
		next(err);
	}
};

//Post /tweets
const postTweet = async (req, res, next) => {
	try {
		let img = req.files.img[0].path;
		let tweetLogo = req.files.tweetLogo[0].path;
		let tweet = new Tweet(req.body);
		tweet.img = img;
		tweet.tweetLogo = tweetLogo;
		await tweet.save();
		console.log(tweet);
		return res.status(200).send(tweet);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getTweets,
	postTweet,
	getTweetsPagination,
};
