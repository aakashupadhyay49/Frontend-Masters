const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const bodyParser = require("body-parser");
require("dotenv").config();

// Routes Imports
const coursesRouter = require("./routes/courses.router");
const authorRouter = require("./routes/authors.test.route");
const userRouter = require("./routes/user.test.router");
const tweetsRouter = require("./routes/tweets.route");
const imageRouter = require("./routes/image.router");
const teacherRouter = require("./routes/teachers.routes");
const guideRouter = require("./routes/guides.routes");

app.use(express.static("./public"));
app.use(express.json());
app.use(bodyParser.json());

// Courses.route;
app.use("/api/v1/courses", coursesRouter);

// Authors route;
app.use("/api/v1/author", authorRouter);

// Tweets Route
app.use("/api/v1/tweets", tweetsRouter);

// User Router
app.use("/api/v1/users", userRouter);

// Image Router
app.use("/static/images/", imageRouter);
// Teacher Router
app.use("/api/v1/teacher", teacherRouter);

// Guide Router
app.use("/api/v1/guide", guideRouter);

app.listen(3000, async () => {
	await connectDB(process.env.MONGO_URI_TEST);
	console.log(`app is listening on port 3000...`);
});
