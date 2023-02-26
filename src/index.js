import { displayEventType } from "./dom";

// event container
const eventsContainer = document.querySelector(".events");

// family elements
const familyEvents = { name: "family" };
familyEvents.image = document.querySelector(".family-images");
familyEvents.text = document.querySelector(".family-text");

// special elements
const specialEvents = { name: "special" };
specialEvents.image = document.querySelector(".special-images");
specialEvents.text = document.querySelector(".special-text");

//social elements
const socialEvents = { name: "social" };
socialEvents.image = document.querySelector(".social-images");
socialEvents.text = document.querySelector(".social-text");

// click event to toggle event type (using hidden class) 
eventsContainer.addEventListener("click", (e) => {
    // display family gatherings
    if (e.target.matches(".family-select")) {
        displayEventType(familyEvents, specialEvents, socialEvents);
    }
    // display special events
    if (e.target.matches(".special-select")) {
        displayEventType(specialEvents, familyEvents, socialEvents)
    }
    // display social events
    if (e.target.matches(".social-select")) {
        displayEventType(socialEvents, familyEvents, specialEvents)
    }
});
