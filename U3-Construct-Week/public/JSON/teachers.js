class Teachers {
	constructor(author, authorJob, authorImg) {
		this.author = author;
		this.authorJob = authorJob;
		this.authorImg = authorImg;
	}
}
const courses = require("./courses");
const authors = courses.map((course) => {
	const { author, authorJob, authorImg } = course;
	return { ...new Teachers(author, authorJob, authorImg) };
});

module.exports = authors;
