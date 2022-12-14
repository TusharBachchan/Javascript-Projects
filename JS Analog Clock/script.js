// We want to call a fuction every second so we use setInterval function
setInterval(setClock, 1000); // 1000 milliseconds i.e 1 sec
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setClock() {
    const currentDate = new Date();
    // these ratios are fraction of movements done by the hands or how far are they rotated
    const secondsRatio = currentDate.getSeconds() / 60;
    // now the minute hand and hur hand cant directly jump to the numbers on the clock
    // we need to gradually move the hands
    // eg. hour hand can lie between 2 and 3, it dosent have to be only on 2 and then directly jump to 3
    // there will be times when the hour hand and minute hands will be between 2 numbers on the clock
    // these intermediate positions in case of minute hand will also include secondsRatio as a complete minute has not passed
    // same logic for hour hand but here the intermediatory position depends on minutesRatio
    // 2:35, here hour hand cant be pointing directly on 2 since some minutes has passed and it will move forward
    // but it wont reach 3, that extra movement between 2 and 3 is decided by minutesRatio
    // same logic for minute hand
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}
// calling setClock as soon as the page loads: this will not make the clock appear at initial position at first glance and then change to correct time -> doubt
setClock();