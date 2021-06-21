const radius = 150.5;
const numberRadius = 20;
const degrees = 360;
const angleBetweenHours = degrees / 12;
const angleBetweenSeconds = degrees / 60;

function createClock() {
    const frame = document.getElementById('base');
    const context = frame.getContext('2d');
    context.fillStyle = '#a8dadc';
    context.strokeStyle = '#457b9d';
    context.beginPath();
    context.arc((radius+1), (radius+1), radius, 0, Math.PI*2, true);
    context.fill();
    context.stroke();

    function createClockNumbers() {
        for (let i = 1; i <= 12; i++) {
            context.beginPath();
            const angle = (-90 + i * 30) * Math.PI / 180;
            const x = 120 * Math.cos(angle) + 150;
            const y = 120 * Math.sin(angle) + 150;

            context.fillStyle = '#f1faee';
            context.strokeStyle = '#e63946';

            context.arc(x, y, numberRadius, 0, Math.PI*2, false);
            context.fill();
            context.stroke();

            context.fillStyle = '#e63946';
            context.font = 'bold 18px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(i.toString(), x, y);
        }
    }
    createClockNumbers();

}

function createHandsTime(date) {
    const frame = document.getElementById('base');
    const context = frame.getContext('2d');
    const seconds = date.getSeconds();
    let dS = seconds * angleBetweenSeconds / 60;
    const minutes = date.getMinutes();
    let dM = minutes * angleBetweenHours / 60;
    const hours = date.getHours();

    function createSecondHand(seconds) {
        const calcAngle = (seconds * angleBetweenSeconds) *  Math.PI / 180 + Math.PI;
        const y = radius - 60;
        context.beginPath();
        context.translate(radius + 1, radius + 1);
        context.rotate(calcAngle);
        context.strokeStyle = '#1d3557';
        context.moveTo(0, 0);
        context.lineTo(0, y);
        context.stroke();
        context.rotate(-calcAngle);
        context.translate(-(radius + 1), -(radius + 1));

    }
    createSecondHand(seconds);

    function createMinuteHand(minutes, dS) {
        const minAngle = (minutes * angleBetweenSeconds + dS) *  Math.PI / 180 + Math.PI;
        const y = radius - 68;
        context.beginPath();
        context.translate(radius + 1, radius + 1);
        context.rotate(minAngle);
        context.lineWidth = 3;
        context.strokeStyle = '#1d3557';
        context.moveTo(0, 0);
        context.lineTo(0, y);
        context.stroke();
        context.rotate(-minAngle);
        context.translate(-(radius + 1), -(radius + 1));
    }
    createMinuteHand(minutes, dS);

    function createHourHand(hours, dM) {
        const hourAngle = ((hours - 12) * angleBetweenHours + dM) *  Math.PI / 180 + Math.PI;
        const y = radius - 85;
        context.beginPath();
        context.translate(radius + 1, radius + 1);
        context.rotate(hourAngle);
        context.lineWidth = 5;
        context.strokeStyle = '#1d3557';
        context.moveTo(0, 0);
        context.lineTo(0, y);
        context.stroke();
        context.rotate(-hourAngle);
        context.translate(-(radius + 1), -(radius + 1));
    }
    createHourHand(hours, dM);
}

function createTimeContainer(date) {
    const frame = document.getElementById('base');
    const context = frame.getContext('2d');

    context.lineWidth = 1;
    context.strokeStyle = '#457b9d';
    context.fillStyle = '#f1faee';
    context.strokeRect(102.5, 182.5, 100, 30);

    context.fillStyle = '#e63946';
    context.font = 'bold 18px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(formatDateTime(date), 152.5, 197.5);
}

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
function updateTime(date) {
    createClock();
    createHandsTime(date);
    createTimeContainer(date);
}

function callUpdate() {
    const date = new Date();
    const ms = date.getMilliseconds()
    updateTime(date);
    setTimeout(callUpdate, 1000 - ms);
}
callUpdate();