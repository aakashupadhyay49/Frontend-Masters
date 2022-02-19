const singleCourse = JSON.parse(localStorage.getItem("previewCourse")) || {};
const loggedInData =
	JSON.parse(localStorage.getItem("loginFrontEndData")) || {};

console.log(singleCourse);
const upperSection = (singleCourse) => {
	document.querySelector("#imageAndAuthor").innerHTML = "";

	// CREATING ELEMENTS
	// images
	const bgImage = document.createElement("img");
	const authorImg = document.createElement("img");

	// texts
	const heading = document.createElement("h1");
	const authorName = document.createElement("h3");
	const authorJob = document.createElement("p");
	const videoDuration = document.createElement("p");
	const ccTag = document.createElement("p");

	// spans
	const durationSpan = document.createElement("span");

	// Divs
	const upperMainDiv = document.createElement("div");
	const upperTextDiv = document.createElement("div");
	const uppAuthorMain = document.createElement("div");
	const uppAuthorText = document.createElement("div");

	// SETTING ATTTRIBUTES AND TEXT CONTENTS
	let webImage = singleCourse.webpImg;
	if (!webImage.startsWith("https")) {
		webImage = `http://127.0.0.1:3000/static/images/courses/${webImage}`;
	}
	console.log(webImage);
	bgImage.src = webImage;

	authorImg.src = singleCourse.author.authorImg;

	heading.textContent = singleCourse.courseName;
	authorName.textContent = singleCourse.author.author;
	authorJob.textContent = singleCourse.author.authorJob;
	videoDuration.textContent = singleCourse.duration;
	ccTag.textContent = "cc";

	// ADDING CLASSES AND IDS
	upperMainDiv.id = "upperMainDiv";
	upperTextDiv.id = "upperTextDiv";
	uppAuthorMain.id = "uppAuthorMain";
	uppAuthorText.id = "uppAuthorText";
	durationSpan.classList.add("durationSpan");
	ccTag.classList.add("ccTag");

	// APPENDING
	durationSpan.append(videoDuration, ccTag);

	uppAuthorText.append(authorName, authorJob);
	uppAuthorMain.append(authorImg, uppAuthorText);

	upperTextDiv.append(heading, uppAuthorMain, durationSpan);
	upperMainDiv.append(bgImage, upperTextDiv);

	document.querySelector("#imageAndAuthor").append(upperMainDiv);
};

const bottomSection = (singleCourse) => {
	document.querySelector("#preview").innerHTML = "";
	// CREATING ELEMNENTS
	// images
	const previewImg = document.createElement("img");

	// texts
	const description = document.createElement("p");
	const publishedAt = document.createElement("p");

	// buttons
	const fullAccessBtn = document.createElement("button");

	// divs
	const bottomMainDiv = document.createElement("div");
	const bottomTextDiv = document.createElement("div");

	// SETTING ATTRIBUTES AND TEXT CONTENTS

	let previewImage = singleCourse.previewImage;

	if (!previewImage.startsWith("https")) {
		previewImage = `http://127.0.0.1:3000/static/images/courses/${previewImage}`;
	}
	console.log(previewImage);
	previewImg.src = previewImage;
	description.textContent = singleCourse.description;

	// random published dates

	publishedAt.textContent = `Published: ${singleCourse.publishedAt}`;
	fullAccessBtn.textContent = "Get Unlimited Access Now";
	if (Object.entries(loggedInData).length > 0) {
		fullAccessBtn.style.display = "none";
	}

	// ADDING CLASSES AND IDS
	bottomTextDiv.id = "bottomTextDiv";
	bottomMainDiv.id = "bottomMainDiv";

	fullAccessBtn.addEventListener("click", () => {
		window.location.href = "/LOGIN_SIGNUP/signup.html";
	});

	// APPENDING
	bottomTextDiv.append(description, publishedAt, fullAccessBtn);
	bottomMainDiv.append(previewImg, bottomTextDiv);

	document.querySelector("#preview").append(bottomMainDiv);
};

upperSection(singleCourse);
bottomSection(singleCourse);
