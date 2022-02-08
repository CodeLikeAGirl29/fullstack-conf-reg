// Set focus on first text field on page load
const focusInput = document.querySelectorAll(`input[type=text]`);
focusInput[0].focus();

//create form variable
const form = document. querySelector('form');

//Disable Submission button
const submit = document.querySelector('button[type="submit"]');

// Since I added the "Other Title" input in the HTML, I needed to hide it.
var otherJob = document.getElementById('other-title');
otherJob.style.display = 'none';

//T-shirt color info
//First, hide all colors, and put message in color field
const color = document.getElementById('color');
const jsPuns1 = color[0];
const jsPuns2 = color[1];
const jsPuns3 = color[2];
const heart1 = color[3];
const heart2 = color[4];
const heart3 = color[5];
for (i=0; i<color.length; i+=1) {
    color[i].hidden = true;
}
const colorChoice = document.createElement('option');
color.appendChild(colorChoice);
colorChoice.textContent = "Please select a T-shirt Theme";
colorChoice.selected = true;

const shirtDiv = document.querySelector('.shirt-box');

//Putting event listener on design box, to trigger when a choice is selected.
//Will hide the colors until a choice is made(for exceeds).
//Hides colors again if "Select Theme" is chosen, though the box is hidden at the same time.
//Only including this to prove I know how to hide them again, though the box is hidden as well.
const design = document.querySelector('#design');
const jsPuns = document.querySelector('#design option[value="js puns"]');
const heart = document.querySelector('#design option[value="heart js');
const colorList = document.getElementById('colors-js-puns');
colorList.style.display = 'none';
design.addEventListener('change', () => {
    if(jsPuns.selected === true) {
        colorList.style.display = '';
        colorChoice.hidden = true;
        jsPuns1.selected = true;
        jsPuns1.hidden = false;
        jsPuns2.hidden = false;
        jsPuns3.hidden = false;
        heart1.hidden = true;
        heart2.hidden = true;
        heart3.hidden = true;
    } else if(heart.selected === true) {
        colorList.style.display = '';
        colorChoice.hidden = true;
        heart1.selected = true;
        jsPuns1.hidden = true;
        jsPuns2.hidden = true;
        jsPuns3.hidden = true;
        heart1.hidden = false;
        heart2.hidden = false;
        heart3.hidden = false;        
    } else {
        colorList.style.display = 'none';
        for (i=0; i<color.length; i+=1) {
            color[i].hidden = true;
        }
        colorChoice.selected = true;
    }
});

//For fun, changed the shirtDiv background color to match the shirt color chosen.
shirtDiv.addEventListener('change', () => {
    if(jsPuns1.selected === true) {
        shirtDiv.style.backgroundColor = "#6495ed";
    } else if (jsPuns2.selected === true) {
        shirtDiv.style.backgroundColor = '#2f4f4f';
    } else if (jsPuns3.selected === true) {
        shirtDiv.style.backgroundColor = '#FFD700';
    } else if (heart1.selected === true) {
        shirtDiv.style.backgroundColor = '#ff6347';
    } else if (heart2.selected === true) {
        shirtDiv.style.backgroundColor = '#4682b4';
    } else if (heart3.selected === true) {
        shirtDiv.style.backgroundColor = '#696969';
    } else {
        shirtDiv.style.backgroundColor = '';
    }
});

//Add "Other Job" box when "other" is selected, and remove it when something else is chosen
const otherTitle = document.querySelector('#title option[value="other"]');
const title = document.getElementById('title');
title.addEventListener('change', () => {
    if(otherTitle.selected === true) {
        otherJob.style.display = '';
    } else {
        otherJob.style.display = 'none';
    }
})

//Registering for Activities section
var totalCost = 0;
const activities = document.querySelector('.activities');
const costSum = document.createElement('element');
activities.appendChild(costSum);
activities.addEventListener('change', (e) => {
    const clicked = event.target;
    const dataCost = clicked.getAttribute('data-cost');
    const cost = parseInt(dataCost);
    if (clicked.checked) {
        totalCost += cost;
    } else {
        totalCost -= cost;
    }
    activitiesVal();
    costSum.innerHTML = "Total Cost : $" + totalCost;
    const dayAndTime = clicked.getAttribute('data-day-and-time');
    const allCheckBoxes = document.querySelectorAll('.activities input');
    for (let i=0; i < allCheckBoxes.length; i += 1) {
        const currentTime = allCheckBoxes[i].getAttribute('data-day-and-time');
        if (currentTime === dayAndTime && clicked !== allCheckBoxes[i]) {
            if(clicked.checked) {
                allCheckBoxes[i].disabled = true;
            } else {
                allCheckBoxes[i].disabled = false;
            }
        }
    }
});

//Choosing a payment option

const payment = document.querySelector('#payment');
const paymentmsg = document.querySelector('#payment option[value="select method"]');
paymentmsg.hidden = true;

const creditCard = document.querySelector('#credit-card');
const chooseCreditCard = document.querySelector('#payment option[value="credit card"]');
const creditCardValue = chooseCreditCard.getAttribute('value');
chooseCreditCard.selected = true;

const paypal = document.querySelector('#paypal');
const choosePaypal = document.querySelector('#payment option[value="paypal"]');

const bitcoin = document.querySelector('#bitcoin');
const chooseBitcoin = document.querySelector('#payment option[value="bitcoin"]');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

payment.addEventListener('change', () => {
    if (choosePaypal.selected) {
        creditCard.style.display = 'none';
        paypal.style.display = '';
        bitcoin.style.display = 'none';
    } else if (chooseBitcoin.selected) {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = '';
    } else if (chooseCreditCard.selected) {
        creditCard.style.display = '';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else {
        ccDiv.style.display = 'none';
    }
});


//Validation section

//Setting up error messages
let nameLabel = document.querySelector('label[for="name"]');
const nameEDiv = document.createElement('div');
nameLabel.appendChild(nameEDiv);
nameEDiv.textContent = 'Please Enter Your Name';
nameEDiv.style.color = 'red';

let emailLabel = document.querySelector('label[for="mail"]');
const emailEDiv = document.createElement('div');
emailLabel.appendChild(emailEDiv);
emailEDiv.textContent = 'Please Enter A Valid Email';
emailEDiv.style.color = 'red';

let activitiesLegend = document.querySelector('.activities legend');
const activitiesEDiv = document.createElement('div');
activitiesLegend.appendChild(activitiesEDiv);
activitiesEDiv.textContent = 'Please Choose At Least One Activity';
activitiesEDiv.style.color = 'red';

let ccDiv = document.getElementById('credit-card');
const ccEDiv = document.createElement('div');
ccDiv.appendChild(ccEDiv);
ccEDiv.textContent = '****Please Enter A Valid Credit Card Number';
ccEDiv.style.color = 'red';

const zipEDiv = document.createElement('div');
ccDiv.appendChild(zipEDiv);
zipEDiv.textContent = '****Please Enter Your 5-digit Zip Code';
zipEDiv.style.color = 'red';

const cvvEDiv = document.createElement('div');
ccDiv.appendChild(cvvEDiv);
cvvEDiv.textContent = '****Please Enter Your 3-digit CVV';
cvvEDiv.style.color = 'red';


//Validation Functions

//Name validation.
//If the entered name passes, get rid of the error message.
//Otherwise, leave the error.  Also, adds the error message back in if you delete your name.
//I kept this separate from the real-time, because I want to call it again on submission.
function nameVal() {
    const nameValue = name.value;
    if( /^\D+$/.test(nameValue) ){
        nameEDiv.style.display = 'none';
        return true;
    } else {
        nameEDiv.style.display = '';
        return false;
    }
}
//Real-time name validation.
name.addEventListener('keyup', () => {
    nameVal();
});


//Email validation.
//Same comments as name validation
let email = document.getElementById('mail');
function emailVal() {
    const emailValue = email.value;
    if(/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue) && emailValue.length > 0){
        emailEDiv.style.display = 'none';
        return true;
    } else if (emailValue.length > 0 && !/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue)) {
        emailEDiv.textContent = 'Email must be formatted as "email@abc.com"';
        emailEDiv.style.display = '';
    }else {
        emailEDiv.textContent = 'Please Enter A Valid Email';
        emailEDiv.style.display = '';
        return false;
    }
}
//Real-time email validation
email.addEventListener('keyup', () => {
    emailVal();
});


//Activities validation
//I called it in the activities event listener up around line 122, so this is real-time as well.
function activitiesVal() {
    if(totalCost !== 0){
        activitiesEDiv.style.display = 'none';
        return true;
    } else {
        activitiesEDiv.style.display = '';
        return false;
    }
}


//Credit Card Number validation
const ccNumber = document.querySelector('#cc-num');
function ccnumVal() {
    const ccNumValue = ccNumber.value;
    if (chooseCreditCard.selected) {
        if (/^\d{13,16}$/.test(ccNumValue)) {
            ccEDiv.style.display = 'none';
            return true;
        } else {
            ccEDiv.style.display = '';
            return false;
        }
    } else {
        return true;
    }
};

//Real-time credit validation
ccNumber.addEventListener('keyup', () => {
    ccnumVal();
});


//Zip Code validation
const zipNumber = document.querySelector('#zip');
function zipVal() {
    const zipNumValue = zipNumber.value;
    if (chooseCreditCard.selected) {
        if (/^\d{5}$/.test(zipNumValue)) {
            zipEDiv.style.display = 'none';
            return true;
        } else {
            zipEDiv.style.display = '';
            return false;
        }
    } else {
        return true;
    }
};

//Real-time zip code validation
zipNumber.addEventListener('keyup', () => {
    zipVal();
});


//CVV validation
const cvvNumber = document.querySelector('#cvv');
function cvvVal() {
    const cvvNumValue = cvvNumber.value;
    if (chooseCreditCard.selected) {
        if (/^\d{3}$/.test(cvvNumValue)) {
            cvvEDiv.style.display = 'none';
            return true;
        } else {
            cvvEDiv.style.display = '';
            return false;
        }
    } else {
        return true;
    }
};

//Real-time cvv validation
cvvNumber.addEventListener('keyup', () => {
    cvvVal();
});



//Final Validation
//Submit button checks final validation

submit.addEventListener('click', (e) => {
    if (nameVal()
        && emailVal() 
        && activitiesVal()
        && ccnumVal() 
        && zipVal() 
        && cvvVal()) {
    } else {
        e.preventDefault();
    }
});