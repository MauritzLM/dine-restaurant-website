// function to display one event and hide the others
export function displayEventType(eventToDisplay, hideEvent1, hideEvent2) {
    eventToDisplay.image.className = `${eventToDisplay.name}-images`;
    eventToDisplay.text.className = `${eventToDisplay.name}-text`;

    hideEvent1.image.className = `${hideEvent1.name}-images hidden`;
    hideEvent1.text.className = `${hideEvent1.name}-text hidden`;

    hideEvent2.image.className = `${hideEvent2.name}-images hidden`;
    hideEvent2.text.className = `${hideEvent2.name}-text hidden`;
};
