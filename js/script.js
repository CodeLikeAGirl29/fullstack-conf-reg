// Focus Name Field On Load
const nameField = document.getElementById("name");
nameField.focus();

// Job Role Section Variables
const otherJobRole = document.getElementById("other-job-role");
// Hide Other Job Role section by default
otherJobRole.style.display = "none";

function showOrHideOther() {
  // Show or hide element based on job role value
  otherJobRole.style.display = jobRole.value === "other" ? "inherit" : "none";
}

const jobRole = document.getElementById("title");
// Event handler for job role change
jobRole.addEventListener("change", showOrHideOther);

// T-shirt Info Section Variables
const colors = document.getElementById("color");
const colorOptions = colors.children;
const shirtColors = document.getElementById("shirt-colors");
const shirtDesign = document.getElementById("design");

// Hide Shirt Colors Element
colors.disabled = true;

// Function to show colors based on theme selected
const showColor = (e) => {
	colors.disabled = false;
	for (let i = 0; i < colorOptions.length; i++) {
		const eTarget = e.target.value;
		const colorTheme = colorOptions[i].getAttribute("data-theme");
		if (eTarget === colorTheme) {
			colorOptions[i].hidden = false;
			colorOptions[i].setAttribute("selected", true);
		} else {
			colorOptions[i].hidden = true;
			colorOptions[i].removeAttribute("selected");
		}
	}
};

// Event handler for color change
shirtDesign.addEventListener("change", showColor);

// Register for Activities Section Variables
const activitiesField = document.getElementById("activities");
const activitiesBox = document.getElementById("activities-box");
const totalAmount = document.getElementById("activities-cost");
const activityDates = activitiesBox.querySelectorAll("input");
// Total cost amount variable
let total = 0;

// Function to calculate total cost based on selected activities
const totalCost = (e) => {
	const activityCost = e.target.getAttribute("data-cost");
	if (e.target.checked === true) {
		total = total + +activityCost;
	} else if (e.target.checked === false) {
		total = total - activityCost;
	}
	totalAmount.innerHTML = `Total: $${total}`;
};

// Function to disable conflicting activity times
const activityConflict = (e) => {
	for (i = 0; i < activityDates.length; i++) {
		let targetDayAndTime = e.target.getAttribute("data-day-and-time");
		let totalDayAndTime = activityDates[i].getAttribute("data-day-and-time");
		if (targetDayAndTime === totalDayAndTime && e.target !== activityDates[i]) {
			if (e.target.checked) {
				activityDates[i].disabled = true;
				activityDates[i].parentElement.classList.add("disabled");
			} else {
				activityDates[i].disabled = false;
				activityDates[i].parentElement.classList.remove("disabled");
			}
		}
	}
};

// Event handlers for total cost and activity conflicts
activitiesBox.addEventListener("change", activityConflict);
activitiesField.addEventListener("change", totalCost);

// Payment Info Section Variables
const paymentMethod = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

// Hide Paypal and Bitcoin by default
paypal.hidden = true;
bitcoin.hidden = true;

// Select Credit Card by Default
paymentMethod.children[1].setAttribute("selected", true);

// Function to display correct payment method depending on selection
const displayPaymentMethod = (e) => {
	if (e.target.value === paypal.getAttribute("id")) {
		paypal.hidden = false;
		creditCard.hidden = true;
		bitcoin.hidden = true;
	} else if (e.target.value === creditCard.getAttribute("id")) {
		creditCard.hidden = false;
		paypal.hidden = true;
		bitcoin.hidden = true;
	} else if (e.target.value === bitcoin.getAttribute("id")) {
		bitcoin.hidden = false;
		paypal.hidden = true;
		creditCard.hidden = true;
	}
};

// Event handler for displaying payment method
paymentMethod.addEventListener("change", displayPaymentMethod);

// Form Validation Variables
const emailAddress = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");
const emailAddressParent = emailAddress.parentElement;

// Name Validator
const nameValidator = () => {
	const nameValue = nameField.value;
	const isValidName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
	if (isValidName) {
		validationPass(nameField);
	} else {
		validationFail(nameField);
	}
	return isValidName;
};

// Conditional Error Message for email
const emailCannotBeBlank = `<span id="email-hint" class="email-hint hint">Email address cannot be blank.</span>`;
const emailNeedsFormatting = `<span id="email-hint" class="email-hint hint">Email address needs an '@' and '.' symbol.</span>`;

// Email Validator
const emailValidator = () => {
	const emailValue = emailAddress.value;
	const isValidEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);

	// Function to clear added HTML from conditional error message
	function clearEmailHTML() {
		while (emailAddress.nextSibling) {
			emailAddressParent.removeChild(emailAddress.nextSibling);
		}
	}
	// Validate email and conditional errors
	if (isValidEmail) {
		validationPass(emailAddress);
	} else if (emailValue === "") {
		clearEmailHTML();
		emailAddressParent.insertAdjacentHTML("beforeend", emailCannotBeBlank);
		validationFail(emailAddress);
	} else {
		clearEmailHTML();
		emailAddressParent.insertAdjacentHTML("beforeend", emailNeedsFormatting);
		validationFail(emailAddress);
	}
	return isValidEmail;
};

// Register section validator
const registerValidator = () => {
	const registerSectionIsValid = total > 0;
	if (registerSectionIsValid) {
		validationPass(activitiesBox);
	} else {
		validationFail(activitiesBox);
	}
	return registerSectionIsValid;
};

// Credit Card Number Validator
const cardNumberValidator = () => {
	const cardNumberValue = cardNumber.value;
	const isValidCardNumber = /^\d{13,16}$/.test(cardNumberValue);
	if (isValidCardNumber) {
		validationPass(cardNumber);
	} else {
		validationFail(cardNumber);
	}
	return isValidCardNumber;
};

// Zip Code Validator
const zipCodeValidator = () => {
	const zipCodeValue = zipCode.value;
	const isValidZipCode = /^\d{5}$/.test(zipCodeValue);
	if (isValidZipCode) {
		validationPass(zipCode);
	} else {
		validationFail(zipCode);
	}
	return isValidZipCode;
};

// CVV Validator
const cvvValidator = () => {
	const cvvValue = cvv.value;
	const isValidCvv = /^\d{3}$/.test(cvvValue);
	if (isValidCvv) {
		validationPass(cvv);
	} else {
		validationFail(cvv);
	}
	return isValidCvv;
};

// Input validation indicators
// Change styling when validation pass
function validationPass(element) {
	element.parentElement.classList.add("valid");
	element.parentElement.classList.remove("not-valid");
	element.parentElement.lastElementChild.style.display = "none";
}
// Change styling when validation fails
function validationFail(element) {
	element.parentElement.classList.add("not-valid");
	element.parentElement.classList.remove("valid");
	element.parentElement.lastElementChild.style.display = "block";
}

// Event handler for Real-Time Validator
form.addEventListener("change", (e) => {
	nameValidator();
	emailValidator();
	registerValidator();
	cardNumberValidator();
	zipCodeValidator();
	cvvValidator();
});

// Event handler for form submission
form.addEventListener("submit", (e) => {
	nameValidator();
	emailValidator();
	registerValidator();
	cardNumberValidator();
	zipCodeValidator();
	cvvValidator();

	// Prevent form from submitting if validators fail
	if (!nameValidator() || !emailValidator() || !registerValidator()) {
		e.preventDefault();
	}
	// Prevent form submission if credit card is selected and validator fails
	if (paymentMethod.children[1].selected) {
		if (!cardNumberValidator() || !zipCodeValidator() || !cvvValidator()) {
			e.preventDefault();
		}
	}
});

// Accessibility features variables
const checkBox = document
	.getElementById("activities")
	.getElementsByTagName("input");
// focus on register for activities box
for (let i = 0; i < checkBox.length; i++) {
	checkBox[i].addEventListener("focus", (e) => {
		e.target.parentElement.classList.add("focus");
	});
	checkBox[i].addEventListener("blur", (e) => {
		e.target.parentElement.classList.remove("focus");
	});
}
