// form validation
const form = document.querySelector(".booking-form");
// form inputs
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");

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
    dateInput.validity.valueMissing ? dateError.textContent = 'This field is incomplete' : dateError.textContent = '';

    // time missing
    timeInput.validity.valueMissing ? timeError.textContent = 'This field is incomplete' : timeError.textContent = '';

    e.preventDefault();
});
