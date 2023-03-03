import { displayEventType } from "./dom";

// event container
const eventsContainer = document.querySelector(".events");

// family elements
const familyEvents = { name: "family" };
familyEvents.image = document.querySelector(".family-images");
familyEvents.text = document.querySelector(".family-text");
familyEvents.select = document.querySelector(".family-select");

// special elements
const specialEvents = { name: "special" };
specialEvents.image = document.querySelector(".special-images");
specialEvents.text = document.querySelector(".special-text");
specialEvents.select = document.querySelector(".special-select");

// social elements
const socialEvents = { name: "social" };
socialEvents.image = document.querySelector(".social-images");
socialEvents.text = document.querySelector(".social-text");
socialEvents.select = document.querySelector(".social-select");

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
