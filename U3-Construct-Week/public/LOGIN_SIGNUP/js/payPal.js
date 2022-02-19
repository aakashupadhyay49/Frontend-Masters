// Local Storages
const userPlan = JSON.parse(localStorage.getItem("frontEndUserPlan")) || [];
console.log(userPlan);

function placeValues(userPlan) {
	let planName;
	let planPrice;

	switch (userPlan[0]) {
		case "monthly":
			planName = "MONTHLY";
			planPrice = "$39";
			break;

		case "yearly":
			planName = "YEARLY";
			planPrice = "$390";
			break;

		case "monthly_team":
			planName = "MONTHLY TEAM";
			planPrice = "$195";
			break;

		case "yearly_team":
			planName = "YEARLY TEAM";
			planPrice = "$1950";
			break;

		default:
			planName = "";
			planPrice = "";
	}

	document.querySelector("#planNameSpan").textContent = planName;
	document.querySelector("#planPriceSpan").textContent = planPrice;
	document.querySelector("#totalPrice").textContent = planPrice;
}

placeValues(userPlan);

function checkout() {
	alert("Purchase Successful");
	window.location.href = "/LOGIN_SIGNUP/login.html";
}

document.querySelector("#buttonSpan").addEventListener("click", checkout);
