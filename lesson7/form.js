let form = document.forms['devForm'];

// or find them by ID
let developer = form.elements['developers'];
let siteName = form.elements['siteName'];
let siteURL = form.elements['siteURL'];
let startDate = form.elements['startDate'];
let siteVisit = form.elements['visitors'];
let siteMail = form.elements['siteEmail'];
let siteCatalog = form.elements['siteCatalog'];
let siteVote = form.elements['vote'];
let siteReview = form.elements['review'];
let siteDescr = form.elements['siteDescr'];
let submitElem = form.elements['submitElem'];

let ohNo = document.createElement('div');
let ohNoSymb = document.createTextNode('❌');
document.body.appendChild(ohNo);
ohNo.appendChild(ohNoSymb);
ohNo.style.position = 'absolute';
ohNo.style.width = '25px';
ohNo.style.height = '25px';
ohNo.style.display = 'none';

let ohYeah = document.createElement('div');
let ohYeahSymb = document.createTextNode('✔️');
document.body.appendChild(ohYeah);
ohYeah.appendChild(ohYeahSymb);
ohYeah.style.position = 'absolute';
ohYeah.style.width = '25px';
ohYeah.style.height = '25px';

function isEmpty(elem) {
    // show user if input is ok
    function inputIsOk() {
        ohNo.style.display = 'none';
        ohYeah.style.display = 'block';
        if (typeElem !== 'radio') {
            ohYeah.style.left = (left - 25) + 'px';
        } else {
            
        }
        ohYeah.style.top = (top - 2) + 'px';
        return true;
    }

    function inputIsFailed() {
        ohNo.style.display = 'block';
        ohYeah.style.display = 'none';
        ohNo.style.left = (left - 25) + 'px';
        ohNo.style.top = (top - 2) + 'px';
        return false;
    }

    function getCoordinates(elem) {
        // determine elem coordinates (top, left)
        let coords = elem.getBoundingClientRect();
        let left = coords.left;
        let top = coords.top;
        console.log(left, top);
    }
    console.log(elem);
    // // determine elem behaviour 1) get type 2) determine behaviour for each type
    let typeElem = elem instanceof RadioNodeList ? 'radio' : elem.getAttribute('type');

    // for <input> type = text || number || date or <textarea>
    function evaluateTextTypes(elem) {
        getCoordinates(elem);
        // get elem content
        let content = elem.value;
        console.log(content);
        // show an indicator
        if (content.trim() === '') {
            inputIsFailed();
            return false;
        } else if (content.trim() !== '') {
            inputIsOk();
            return true;
        }
    }

    // <input> type = checkbox
    function ifCheckboxNotChecked(elem) {
        getCoordinates(elem);
        if (elem.checked) {
            inputIsOk();
            return true;
        } else {
            inputIsFailed();
            return false;
        }
    }

    function ifRadioNotChecked(elem) {
        //get elements arr with all radio with curr name
        let radioArr = document.getElementsByName('vote');
        console.log(radioArr);
        let counter = 0;
        for (let i = 0; i < radioArr.length; i++) {
            if (radioArr[i].checked) {
                counter += 1;
            }
        }

        getCoordinates(radioArr[0]);
        if (counter === 0) {
            inputIsFailed();
            return false;
        } else if (counter === 1) {
            inputIsOk();
            return true;
        }
    }

    if (typeElem === 'text' || typeElem === 'number' || typeElem === 'date' || elem === siteDescr) {
        evaluateTextTypes(elem);
    } else if (typeElem === 'checkbox') {
        ifCheckboxNotChecked(elem);
    } else if (typeElem === 'radio') {
        ifRadioNotChecked(elem);
    }

}

// inadequate work textarea, select, radio
console.log(isEmpty(siteVote));
// console.log(isEmpty(siteReview));
// console.log(isEmpty(siteDescr));

// text & num & date & textarea
// console.log(isEmpty(developer));
// console.log(isEmpty(siteName));
// console.log(isEmpty(siteURL));
// console.log(isEmpty(startDate));
// console.log(isEmpty(siteVisit));
// console.log(isEmpty(siteMail));
// console.log(isEmpty(siteDescr));
