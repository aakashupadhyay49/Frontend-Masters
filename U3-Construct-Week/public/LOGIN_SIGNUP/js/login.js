import footer from "../../components/footer.js";
import navbar from "../../components/header.js";

document.querySelector("#header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

const loginUser = async (event) => {
	event.preventDefault();
	const url = `http://localhost:3000/api/v1/users/login`;

	let loginObj = {
		password: document.querySelector("#password").value,
		username: document.querySelector("#username").value,
	};

	const api = await fetch(url, {
		method: "POST",
		body: JSON.stringify(loginObj),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await api.json();
	checkValidUser(data, loginObj);
};

function checkValidUser(data, loginObj) {
	if (data?.token !== undefined) {
		alert("Login Successful");
		localStorage.setItem("loginFrontEndData", JSON.stringify(loginObj));
		window.location.href = "/index.html";
	} else {
		alert("Login Failed");
		return;
	}
}

document.querySelector("#loginForm").addEventListener("submit", loginUser);
