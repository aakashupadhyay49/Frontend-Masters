const authors = require("./public/JSON/teachers");
const connectDB = require("./config/connect");
const Author = require("./models/authors.test.model");
require("dotenv").config();

const populate = async (authors) => {
	try {
		await connectDB(process.env.MONGO_URI_TEST);
		await Author.deleteMany();
		await Author.create(authors);
		console.log(`Done`);
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

populate(authors);
