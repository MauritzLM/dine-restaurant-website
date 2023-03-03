// form validation
const form = document.querySelector(".booking-form");
// form inputs
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

// date inputs
const dateInputMonth = document.querySelector("#month");
const dateInputDay = document.querySelector("#day");
const dateInputYear = document.querySelector("#year");

// time inputs
const timeInputHour = document.querySelector("#hour");
const timeInputMinute = document.querySelector("#minute");
const timeInputAmOrPM = document.querySelector("#morning-afternoon");

// error message elements
const emailError = document.querySelector(".email-error");
const nameError = document.querySelector(".name-error");
const dateError = document.querySelector(".date-error");
const timeError = document.querySelector(".time-error");

form.addEventListener('submit', (e) => {
    // name missing
    nameInput.validity.valueMissing ? nameError.textContent = 'This field is required' : nameError.textContent = '';

    // email missing
    emailInput.validity.valueMissing ? emailError.textContent = 'This field is required' : emailError.textContent = '';

    // invalid email address
    emailInput.validity.typeMismatch ? emailError.textContent = 'Please use a valid email address' : '';

    // date missing
    if (dateInputMonth.validity.valueMissing || dateInputDay.validity.valueMissing || dateInputYear.validity.valueMissing) {
        dateError.textContent = 'This field is incomplete';
    }

    // time missing
    if (timeInputHour.validity.valueMissing || timeInputMinute.validity.valueMissing) {
        timeError.textContent = 'This field is incomplete';
    }

    // no date or time error
    // dateError.textContent = '';
    e.preventDefault();
});
