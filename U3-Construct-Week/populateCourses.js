const courses = require("./public/JSON/courses");
const connectDB = require("./config/connect");
const Course = require("./models/courses.model");
const redis = require("./config/redis");
const Author = require("./models/authors.test.model");
require("dotenv").config();

const videoLengths = [
	"3 hrs 30 minutes",
	"2 hrs 11 minutes",
	"5 hrs 44 minutes",
	"1 hr 17 minutes",
	"5 hrs 19 minutes",
];

const randomDates = [
	"December 7, 2021",
	"January 17, 2020",
	"August 5, 2021",
	"September 10, 2020",
	"March 5, 2021",
	"July 12, 2020",
];

const popularArr = [true];

let i = 0;

for (let elem of courses) {
	delete elem.author;
	delete elem.authorJob;
	delete elem.authorImg;
	elem.previewImage = elem.previewImages;
	delete elem.previewImages;
	elem.description = elem.desc;
	delete elem.desc;
	elem.duration = videoLengths[Math.floor(Math.random()) * videoLengths.length];
	elem.publishedAt =
		randomDates[Math.floor(Math.random()) * randomDates.length];
	if (i % 3 === 0)
		elem.popular = popularArr[Math.floor(Math.random()) * popularArr.length];
	i++;
}

const populate = async (courses) => {
	await connectDB(process.env.MONGO_URI_TEST);
	const authors = await Author.find().lean().exec();

	for (let i = 0; i < courses.length; i++) {
		courses[i].author = authors[i]._id;
	}

	await Course.deleteMany();
	let fetchCourses = await Course.create(courses);
	fetchCourses.forEach(async (course) => {
		await redis.set(`courses.${course._id}`, JSON.stringify(course));
	});
	await redis.set(`course`, JSON.stringify(fetchCourses));
	process.exit(0);
};

populate(courses);
