const tweets = require("./public/JSON/tweets");
const connectDB = require("./config/connect");
const Tweet = require("./models/tweets.model");
require("dotenv").config();

const tweetDates = [
	"3:33am · Mar 1, 2019",
	"3:57pm · Oct 11, 2020",
	"5:51pm · Aug 29, 2020",
	"5:44pm · Aug 27, 2020",
	"11:43pm · Apr 28, 2020",
];

for (let tweet of tweets) {
	tweet.createdAt = tweetDates[Math.floor(Math.random()) * tweetDates.length];
}
const populate = async (tweets) => {
	try {
		await connectDB(process.env.MONGO_URI_TEST);
		await Tweet.deleteMany();
		await Tweet.create(tweets);
		console.log(`Done`);
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

populate(tweets);
