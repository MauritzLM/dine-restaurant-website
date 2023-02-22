// event images
const familyImage = document.querySelector(".family-images");
const specialImage = document.querySelector(".special-images");
const socialImage = document.querySelector(".social-images");

// event text
const familyText = document.querySelector(".family-text");
const specialText = document.querySelector(".special-text");
const socialText = document.querySelector(".social-text");

// event container
const events = document.querySelector(".events");

// event to toggle event type (using hidden class) 
events.addEventListener("click", (e) => {
    // display family gatherings
    if (e.target.matches(".family-select")) {
        familyImage.className = ".family-images";
        familyText.className = ".family-text";

        specialImage.className = "special-images hidden";
        specialText.className = "special-text hidden";

        socialImage.className = "social-images hidden";
        socialText.className = "social-text hidden";
    }

    // display special events
    if (e.target.matches(".special-select")) {
        familyImage.className = ".family-images hidden";
        familyText.className = ".family-text hidden";

        specialImage.className = "special-images";
        specialText.className = "special-text";

        socialImage.className = "social-images hidden";
        socialText.className = "social-text hidden";
    }

    // display social events
    if (e.target.matches(".social-select")) {
        familyImage.className = ".family-images hidden";
        familyText.className = ".family-text hidden";

        specialImage.className = "special-images hidden";
        specialText.className = "special-text hidden";

        socialImage.className = "social-images";
        socialText.className = "social-text";
    }
});

