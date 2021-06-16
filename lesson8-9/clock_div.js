"use strict";

//create clock block
let clock = document.createElement('div');
clock.style.backgroundColor = '#fca311';
clock.style.borderRadius = 50 + '%';
clock.style.position = 'relative';

// clock parameters
const width = 300;
const height = 300;
clock.style.width = width + 'px';
clock.style.height = height + 'px';
const radius = width * 0.5;
document.body.appendChild(clock);

// element parameters
const unitSize = 40;
const timerWidth = 100;
const hourHeight = 6;
const hourWidth = 60;

// constants
const numbers = 12;
const oneStepAngle = 360 / numbers;
const correctAngle = 90;
const oneSecondMinuteAngle = 360 / 60;

for (let i = 1; i <= numbers; i++) {
    const unit = document.createElement('div');
    const text = document.createTextNode(i.toString());
    unit.appendChild(text);
    unit.style.width = unitSize + 'px';
    unit.style.height = unitSize - 10 + 'px';
    unit.style.paddingTop = 10 + 'px';
    unit.style.textAlign = 'center';
    unit.style.backgroundColor = '#14213d';
    unit.style.color = '#e5e5e5';
    unit.style.fontWeight = '700';
    unit.style.borderRadius = 50 + '%';

    const wrap = document.createElement('div');
    wrap.style.width = (radius * 2 - 20) + 'px';
    wrap.style.position = 'absolute';
    wrap.style.left = 10 + 'px';
    wrap.style.top = radius * 0.86 + 'px';

    wrap.style.transform = 'rotate(' + (90 + oneStepAngle * i) + 'deg)';
    unit.style.transform = 'rotate(' + -(90 + oneStepAngle * i) + 'deg)';
    wrap.style.transformOrigin = 'center';
    wrap.appendChild(unit);
    clock.appendChild(wrap);
}

const dateCont = document.createElement('div');
dateCont.style.backgroundColor = '#e5e5e5';
dateCont.style.width = timerWidth + 'px';
dateCont.style.position = 'relative';
dateCont.style.left = radius - timerWidth * 0.5 + 'px';
dateCont.style.top = radius * 0.6 + 'px';
dateCont.style.textAlign = 'center';
const dateText = document.createElement('span');
dateText.id = 'textField';
dateCont.appendChild(dateText);
clock.appendChild(dateCont);

function createHand(hourWidth, hourHeight) {
    const hand = document.createElement('div');
    hand.style.width = hourWidth + 'px';
    hand.style.height = hourHeight + 'px';
    hand.style.borderRadius = hourWidth * 0.5 + 'px';
    hand.style.backgroundColor = '#14213d';
    hand.style.position = 'absolute';
    hand.style.top = radius - hourHeight * 0.5 + 'px';
    hand.style.left = radius + 'px';
    hand.style.transformOrigin = 'left center';
    hand.style.transform = 'rotate(' + -90 + 'deg)';
    return hand;
}

const hourHand =  createHand(hourWidth, hourHeight);
clock.appendChild(hourHand);

const minuteHand = createHand(1.5 * hourWidth, 0.7 * hourHeight);
clock.appendChild(minuteHand);

const secondHand = createHand(2 * hourWidth, 0.5 * hourHeight);
clock.appendChild(secondHand);

// create date format
function formatDateTime(dt) {
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const seconds = dt.getSeconds();
    // adds 0 symbols
    function str0l(val, len) {
        const strVal = val.toString();
        return strVal.padStart(len, '0');
    }
    return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
}

// updates time and hour hands
function updateTime() {
    const date = new Date();

    const dateFormat = formatDateTime(date);
    const seconds = date.getSeconds();
    const dS = seconds * oneSecondMinuteAngle / 60;
    const minutes = date.getMinutes();
    const dM = minutes * oneStepAngle / 60;
    const hours = date.getHours();

    const secondPosition = seconds * 3 * 2 - correctAngle;
    const minutePosition = minutes * 3 * 2 + dS - correctAngle;
    const hourPosition = (360 / numbers) * (hours % numbers) + dM - correctAngle;

    document.getElementById('textField').innerHTML = dateFormat;
    secondHand.style.transform = 'rotate(' + secondPosition + 'deg)';
    minuteHand.style.transform = 'rotate(' + minutePosition + 'deg)';
    hourHand.style.transform = 'rotate(' + hourPosition + 'deg)';
}

function callUpdate() {
    updateTime();
    setTimeout(callUpdate, 1000);
}
callUpdate();
