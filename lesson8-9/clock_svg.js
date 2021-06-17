// constants
const degrees = 360;
const angleBetweenHours = degrees / 12;
const angleBetweenSeconds = degrees / 60;
const clockCenterX = 151;
const clockCenterY = 151;

let container = document.createElement('div');
container.id = 'cont';
document.body.appendChild(container);

function createSVGElement() {
    const allPic = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    allPic.setAttribute('width', (clockCenterX*2).toString());
    allPic.setAttribute('height', (clockCenterY*2).toString());

    const clockBase = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    clockBase.setAttribute('fill', '#fca311');
    clockBase.setAttribute('r', (clockCenterX-1).toString());
    clockBase.setAttribute('cx', clockCenterX.toString());
    clockBase.setAttribute('cy', clockCenterY.toString());
    clockBase.setAttribute('stroke', '#000000');
    allPic.appendChild(clockBase);

    for (let i = 1; i <= 12; i++) {
        const angle = (-90 + i * 30) * Math.PI / 180;
        const radius = 120;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const number = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        number.setAttribute('fill', '#e5e5e5');
        number.setAttribute('stroke', '#14213d');
        number.setAttribute('r', '20');
        number.setAttribute('cx', (x + 151).toString());
        number.setAttribute('cy', (y + 151).toString());

        const textContainer = document.createElementNS('http://www.w3.org/2000/svg', "text");
        const numberText = document.createTextNode(i.toString());
        textContainer.setAttribute('x', (x + 151).toString());
        textContainer.setAttribute('y', (y + 151).toString());
        textContainer.setAttribute('color', '#14213d');
        textContainer.setAttribute('text-anchor', 'middle');
        textContainer.setAttribute('dominant-baseline', 'middle');

        allPic.appendChild(number);
        textContainer.appendChild(numberText);
        allPic.appendChild(textContainer);
    }

    return allPic;
}

function createHours(x1, y1, x2, y2, width) {
    const hand = document.createElementNS('http://www.w3.org/2000/svg', "line");
    hand.setAttribute('x1', x1.toString());
    hand.setAttribute('y1', y1.toString());
    hand.setAttribute('x2', x2.toString());
    hand.setAttribute('y2', y2.toString());
    hand.setAttribute('stroke-width', width.toString());
    hand.setAttribute('stroke-linecap', 'round');
    hand.setAttribute('stroke', '#14213d');
    return hand;
}

function createDateContainer() {
    const dateCont = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    dateCont.setAttribute('x', '101');
    dateCont.setAttribute('y', '181');
    dateCont.setAttribute('width', '100');
    dateCont.setAttribute('height', '30');
    dateCont.setAttribute('rx', '5');
    dateCont.setAttribute('ry', '5');
    dateCont.setAttribute('stroke', '#000000');
    dateCont.setAttribute('fill', '#e5e5e5');
    return dateCont;
}

function createDateTextNode() {
    const dateContText = document.createElementNS('http://www.w3.org/2000/svg', "text");
    dateContText.setAttribute('x', '151');
    dateContText.setAttribute('y', '201');
    dateContText.setAttribute('text-anchor', 'middle');
    dateContText.id = 'timeText';
    return dateContText;
}

// create elements
const clock = createSVGElement();
container.appendChild(clock);

const dateContainer = createDateContainer();
clock.appendChild(dateContainer);

const hourHand = createHours(clockCenterX, clockCenterY, clockCenterX, clockCenterY - 60, 10);
clock.appendChild(hourHand);
hourHand.style.transformOrigin = 'center';

const minuteHand = createHours(clockCenterX, clockCenterY, clockCenterX, clockCenterY - 90, 5);
clock.appendChild(minuteHand);
minuteHand.style.transformOrigin = 'center';

const secondHand = createHours(clockCenterX, clockCenterY, clockCenterX, clockCenterY - 120, 3);
clock.appendChild(secondHand);
secondHand.style.transformOrigin = 'center';

const dateText = createDateTextNode();
clock.appendChild(dateText);

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
    document.getElementById('timeText').innerHTML = dateFormat;

    let seconds = date.getSeconds();
    let dS = seconds * angleBetweenSeconds / 60;
    let minutes = date.getMinutes();
    let dM = minutes * angleBetweenHours / 60;
    let hours = date.getHours();

    secondHand.style.transform = 'rotate(' + (angleBetweenSeconds * seconds) + 'deg)';
    minuteHand.style.transform = 'rotate(' + (angleBetweenSeconds * minutes + dS) + 'deg)';
    hourHand.style.transform = 'rotate(' + (angleBetweenHours * (hours - 12) + dM) + 'deg)';
}

function callUpdate() {
    const date = new Date();
    const ms = date.getMilliseconds()
    updateTime();
    setTimeout(callUpdate, 1000 - ms);
}
callUpdate();