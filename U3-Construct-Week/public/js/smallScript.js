function logOut(event) {
	localStorage.removeItem("loginFrontEndData");
	window.location.reload();
}

window.addEventListener("load", () => {
	let loginData = JSON.parse(localStorage.getItem("loginFrontEndData")) || {};

	console.log(loginData);
	if (Object.entries(loginData).length > 0) {
		document.querySelector("#loginLI").textContent = loginData.username;
		document.querySelector("#loginLI").setAttribute("href", "#");

		document.querySelector("#joinLI").textContent = "Logout";
		document.querySelector("#joinLI").setAttribute("href", "#");
		document.querySelector("#joinLI").addEventListener("click", logOut);

		document.querySelector("#pricingLI").style.display = "none";
	} else {
		document.querySelector("#loginLI").textContent = "Login";
		document
			.querySelector("#loginLI")
			.setAttribute("href", "/LOGIN_SIGNUP/login.html");

		document.querySelector("#joinLI").textContent = "Join Now";
		document
			.querySelector("#joinLI")
			.setAttribute("href", "/LOGIN_SIGNUP/signup.html");

		document.querySelector("#pricingLI").style.display = "inline-block";

		// document.querySelector("#joinLI").removeEventListener("click", logOut);
	}
});
