let windowQuery = window.matchMedia("(max-width: 900px)");

const appendTweets = (tweets, appendingDiv) => {
	appendingDiv.innerHTML = "";
	tweets.forEach((tweet) => {
		// CREATING ELEMENTS
		// texts
		const name = document.createElement("h4");
		const username = document.createElement("p");
		const tweetDesc = document.createElement("p");
		const hrTag = document.createElement("hr");
		const publishedAt = document.createElement("p");

		// images
		const tweetImg = document.createElement("img");
		const userImg = document.createElement("img");

		// divs
		const mainDiv = document.createElement("div");
		const textDiv = document.createElement("div");
		const userMainDiv = document.createElement("div");
		const userTextDiv = document.createElement("div");

		// SETTING ATTRIBUTES AND TEXT CONTENTS
		// texts
		name.textContent = tweet.name;
		username.textContent = tweet.username;

		let descToArray = tweet.tweet.split(" ");
		for (let i = 0; i < descToArray.length; i++) {
			if (descToArray[i][0] == "@") {
				descToArray[i] = `<span class="blueWord">${descToArray[i]}</span>`;
			}
		}

		tweetDesc.innerHTML = descToArray.join(" ");
		publishedAt.textContent = tweet.publishedAt;

		// images
		tweetImg.src = tweet.tweetLogo;
		userImg.src = tweet.img;

		// ADDING IDS AND CLASSES
		mainDiv.classList.add("tweetMainDiv");
		textDiv.classList.add("tweetTextDiv");
		userMainDiv.classList.add("tweetUserMain");
		userTextDiv.classList.add("tweetUserText");
		tweetImg.classList.add("tweetLogo");

		// APPENDING
		userTextDiv.append(name, username);
		userMainDiv.append(userImg, userTextDiv);

		textDiv.append(tweetDesc, hrTag, publishedAt);
		mainDiv.append(userMainDiv, tweetImg, textDiv);
		appendingDiv.append(mainDiv);
	});
};

const setHiddenClass = (arr) => {
	for (let i = 0; i < 4; i++) {
		arr[i].classList.add("hiddenClass");
	}
};

async function getTweets(queries = "") {
	let url = `http://127.0.0.1:3000/api/v1/tweets/test`;

	if (queries) {
		url = `${url}?${queries}`;
	}
	console.log(url);
	let api = await fetch(url);
	let tweeets = await api.json();
	return tweeets;
}

(async () => {
	const tweetsOne = await getTweets("page=1");
	const tweetsTwo = await getTweets("page=2");
	const tweetsThree = await getTweets("page=1");
	console.log(tweetsOne);

	console.log(tweets);

	// DEFINING APPENDING DIVS
	let tweetDiv1 = document.getElementById("cell1");
	let tweetDiv2 = document.getElementById("cell2");
	let tweetDiv3 = document.getElementById("cell3");

	appendTweets(tweetsOne, tweetDiv1);
	appendTweets(tweetsTwo, tweetDiv2);
	appendTweets(tweetsThree, tweetDiv3);
	//appendTweets(courses.courses, allCourseDiv);
})();

window.addEventListener("DOMContentLoaded", () => {
	let pageOneTweets = document.querySelectorAll("#cell1 >.tweetMainDiv");
	let pageTwoTweets = document.querySelectorAll("#cell2 >.tweetMainDiv");
	let pageThreeTweets = document.querySelectorAll("#cell3 >.tweetMainDiv");

	console.log("pageOneTweets", pageOneTweets);

	for (let i = 0; i < 4; i++) {
		pageOneTweets[i].classList.add("hiddenClass");
		pageTwoTweets[i].classList.add("hiddenClass");
		pageThreeTweets[i].classList.add("hiddenClass");
	}
});
