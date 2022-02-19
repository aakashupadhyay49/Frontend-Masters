// local Storages
const endUser = JSON.parse(localStorage.getItem("frontEndUser")) || {};
const userPlan = JSON.parse(localStorage.getItem("frontEndUserPlan")) || [];
console.log(endUser);
console.log(userPlan);
document.getElementById("cdForm").addEventListener("submit", (event) => {
	checkout(event, endUser, userPlan[1]);
});

let lastThreeDigits = endUser.mobile;
document.querySelector(
	"#lastDigits"
).textContent = `...${lastThreeDigits.substring(lastThreeDigits.length - 3)}`;

function checkout(event, endUser, planPrice) {
	event.preventDefault();

	let date = new Date();
	let time = date.toLocaleTimeString();

	let otpSubmitted = document.querySelector("#otp").value;

	let fullName = `${endUser.first_name} ${endUser.last_name}`;
	if (otpSubmitted == 123456) {
		alert(`Your Purchase of $${planPrice} is successful`);
		alert(`${fullName}, your A/C is debited by USD${planPrice} at ${time}`);
		window.location.href = "/LOGIN_SIGNUP/login.html";
	} else {
		alert("WRONG OTP SUBMITTED");
	}
}
