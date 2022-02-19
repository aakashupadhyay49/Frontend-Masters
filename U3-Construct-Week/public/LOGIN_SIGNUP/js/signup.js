import plans from "../../JSON/plans.js";
import footer from "../../components/footer.js";
import navbar from "../../components/header.js";

document.querySelector("#header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#register").addEventListener("submit", registerUser);

function mapPlans(plans) {
	plans.forEach((plan) => {
		// CREATING ELEMENTS
		const planName = document.createElement("h3");
		const planDesc = document.createElement("p");
		const price = document.createElement("p");
		const tickIcon = document.createElement("i");
		const radioButton = document.createElement("input");

		// spans
		const priceSpan = document.createElement("span");

		// divs
		const textLabel = document.createElement("label");
		const mainDiv = document.createElement("div");

		// SETTING ATTRIBUTES AND TEXT CONTENTS

		planName.textContent = plan.planType;
		planDesc.textContent = plan.description;
		tickIcon.innerHTML = `check_circle`;
		price.textContent = plan.planPrice;
		radioButton.setAttribute("type", "radio");

		// Add Classes and ids
		tickIcon.classList.add("material-icons");
		tickIcon.classList.add("tickIcon");
		textLabel.classList.add("planTextDiv");
		mainDiv.classList.add("planMainDiv");
		priceSpan.classList.add("priceSpan");
		radioButton.name = "allPlans";
		radioButton.classList.add("planRadioButton");
		radioButton.id = plan.id;
		textLabel.setAttribute("for", plan.id);

		// appending
		priceSpan.append(tickIcon, price);
		textLabel.append(planName, priceSpan, planDesc);
		mainDiv.append(radioButton, textLabel);

		document.querySelector("#planSelect").append(mainDiv);
	});
}

async function registerUser(event) {
	event.preventDefault();

	// FOR CHECKED PLAN

	let firstName = document.querySelector("#firstName").value;
	let lastName = document.querySelector("#lastName").value;

	const plansNodes = document.querySelectorAll(`input[name="allPlans"]`);
	let checkedPlan;
	for (let i = 0; i < plansNodes.length; i++) {
		if (plansNodes[i].checked) {
			checkedPlan = plansNodes[i].id;
			break;
		}
	}

	let paymentMode = document.querySelector("#paymentsSelect").value;
	const userObj = {
		first_name: firstName,
		last_name: lastName,
		email: document.querySelector("#email").value,
		password: document.querySelector("#password").value,
		username: document.querySelector("#username").value,
		mobile: document.querySelector("#mobile").value,
		course_purchased: checkedPlan,
	};

	if (
		!(
			userObj.first_name &&
			userObj.last_name &&
			userObj.email &&
			userObj.password &&
			userObj.username &&
			userObj.mobile &&
			userObj.course_purchased
		)
	) {
		alert("Missing Values");
		return;
	}

	const url = `http://localhost:3000/api/v1/users/register`;

	const api = await fetch(url, {
		method: "POST",
		body: JSON.stringify(userObj),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await api.json();
	checkValidUser(data, paymentMode, userObj, checkedPlan);
}

function checkValidUser(data, paymentMode, userObj, checkedPlan) {
	// Creating Plan Object
	const planObj = {
		monthly: "39",
		yearly: "390",
		monthly_team: "195",
		yearly_team: "1950",
	};
	console.log(data);
	if (data?.token !== undefined) {
		alert("Registration Successful");
		localStorage.setItem("userToken", data.token);
	} else {
		alert("Registration failed");
		return;
	}
	const userPlan = [checkedPlan, planObj[checkedPlan]];
	localStorage.setItem("frontEndUserPlan", JSON.stringify(userPlan));
	localStorage.setItem("frontEndUser", JSON.stringify(userObj));
	if (paymentMode === "cdCard") window.location.href = "cdCard.html";
	else window.location.href = "payPal.html";
}

// Defining css

// initializing functions
mapPlans(plans);

document.addEventListener("DOMContentLoaded", function () {
	const allPlans = document.querySelectorAll(`input[name="allPlans"]`);
	allPlans[0].checked = true;
});
