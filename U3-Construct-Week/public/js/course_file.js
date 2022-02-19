const loginValid = JSON.parse(localStorage.getItem("loginFrontEndData")) || {};

// import courses from "/JSON/courses.js";
import navbar from "../components/header.js";
import footer from "../components/footer.js";
// import { get } from "express/lib/response";

async function getCourses(queries = "") {
	let url = `http://127.0.0.1:3000/api/v1/courses`;
	if (queries) {
		url = `${url}?${queries}`;
	}
	console.log(url);
	let api = await fetch(url);
	let courses = await api.json();
	return courses;
}

(async () => {
	const courses = await getCourses();
	appendCourses(courses.courses, allCourseDiv);
})();

// using components
document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();
let id;

// GLOBAL DIVS
let allCourseDiv = document.querySelector("#allCourses");
let popularCourseDiv = document.querySelector("#popularCourses");
let searchCourseDiv = document.querySelector("#searchDiv");

async function appendCourses(courses, appendingDiv) {
	document.getElementById("allCourses").innerHTML = "";
	document.getElementById("popularCourses").innerHTML = "";
	document.querySelector("#searchDiv").innerHTML = "";

	// SETTING CONDITION FOR APPENDING DIV

	courses.forEach((course) => {
		// CREATING ELEMENTS
		const title = document.createElement("h2");
		const authorName = document.createElement("p");
		const authorJob = document.createElement("p");
		const description = document.createElement("p");
		const duration = document.createElement("p");
		const ccTag = document.createElement("p");

		// buttons
		const watchFreePrevBtn = document.createElement("button");
		const getFullAccessBtn = document.createElement("button");

		// imgs
		const authorImg = document.createElement("img");
		const backgroundImg = document.createElement("img");

		// divs
		const mainDiv = document.createElement("div");
		const authorCredsDiv = document.createElement("div");
		const authorCredsTextDiv = document.createElement("div");
		const textDiv = document.createElement("div");

		// span
		const durationSpan = document.createElement("span");
		const buttonSpan = document.createElement("span");

		// SETTING ATTRIBUTES AND TEXT CONTENTS
		title.textContent = course.courseName;
		authorName.textContent = course.author.author;
		authorJob.textContent = course.author.authorJob;
		description.textContent = course.description;
		duration.textContent = course.duration;
		ccTag.textContent = `cc`;

		// buttons
		watchFreePrevBtn.textContent = `Watch Free Preview`;
		getFullAccessBtn.textContent = `Get Full Access`;

		if (Object.entries(loginValid).length > 0)
			getFullAccessBtn.style.display = "none";

		//images

		authorImg.src = course.author.authorImg;

		let webImage = course.webpImg;
		if (!webImage.startsWith("https")) {
			webImage = `http://127.0.0.1:3000/static/images/courses/${webImage}`;
		}
		backgroundImg.src = webImage;

		// adding classes
		ccTag.classList.add("ccTag");
		authorCredsDiv.classList.add("authorMainDiv");
		authorCredsTextDiv.classList.add("authorTextDiv");
		mainDiv.classList.add("courseMainDiv");
		textDiv.classList.add("courseTextDiv");
		durationSpan.classList.add("durationSpan");
		buttonSpan.classList.add("buttonSpan");
		backgroundImg.classList.add("bigImage");

		// EVENT LISTENERS
		let previewListeners = [watchFreePrevBtn, backgroundImg, title];
		previewListeners.forEach((one) => {
			one.addEventListener("click", () => {
				goToPreviewPage(course);
			});
		});

		// APPENDING
		authorCredsTextDiv.append(authorName, authorJob);
		authorCredsDiv.append(authorImg, authorCredsTextDiv);

		durationSpan.append(duration, ccTag);
		buttonSpan.append(watchFreePrevBtn, getFullAccessBtn);
		textDiv.append(
			title,
			authorCredsDiv,
			description,
			durationSpan,
			buttonSpan
		);
		mainDiv.append(backgroundImg, textDiv);

		// APPENDING TO MAIN DIV
		appendingDiv.append(mainDiv);
	});
}

function goToPreviewPage(course) {
	localStorage.setItem("previewCourse", JSON.stringify(course));
	window.location.href = "preview.html";
}

async function searchResults() {
	let query = document.querySelector("#searchCourse").value;
	if (!query) {
		document.getElementById("allCoursesLi").click();
		clearTimeout(id);
		return;
	}
	let filteredData = await getCourses(`courseName=${query}`);

	if (popularCourseDiv.innerHTML) {
		document.querySelector("#headingAndSearch > h1").textContent =
			"Popular Search Result";
	} else {
		document.querySelector("#headingAndSearch > h1").textContent =
			"Course Search Results";
	}
	appendCourses(filteredData.courses, searchCourseDiv);
}

function debouncing(func, delay) {
	clearTimeout(id);
	id = setTimeout(() => {
		func();
	}, delay);
}
// INITIALIZING MAIN FUNCTION

// GLOBAL EVENT LISTENERS

document.querySelector("#popularLi").addEventListener("click", async () => {
	document.querySelector("#headingAndSearch > h1").textContent =
		"View Popular Courses";
	const courses = await getCourses(`popular=true`);
	appendCourses(courses.courses, popularCourseDiv);
	document.querySelector("#allCoursesLi").style.backgroundColor = "#161616";
	document.querySelector("#popularLi").style.backgroundColor = "#0a57a3";

	// rgb(194, 194, 194);

	document.querySelector("#popularLi").style.color = "white";
	document.querySelector("#allCoursesLi").style.color = "rgb(194, 194, 194)";
});

document.querySelector("#allCoursesLi").addEventListener("click", async () => {
	document.querySelector("#headingAndSearch > h1").textContent =
		"Frontend Masters Courses";

	const courses = await getCourses();
	appendCourses(courses.courses, allCourseDiv);
	document.querySelector("#allCoursesLi").style.backgroundColor = "#0a57a3";
	document.querySelector("#popularLi").style.backgroundColor = "#161616";

	document.querySelector("#popularLi").style.color = "rgb(194, 194, 194)";
	document.querySelector("#allCoursesLi").style.color = "white";
});

document.querySelector("#searchCourse").addEventListener("input", (event) => {
	debouncing(searchResults, 1000);
});
