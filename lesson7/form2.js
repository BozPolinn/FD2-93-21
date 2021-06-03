let form = document.forms['devForm'];
// find elements by ID
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

// // determine elem behaviour 1) get type 2) determine behaviour for each type
function elementBehaviourDetermine(elem) {
    // gets label for current input to indicate problems
    function getElementLabel(elem) {
        let elemID = elem.id;
        let elementsArray = document.getElementsByTagName('label');
        for (let i = 0; i < elementsArray.length; i++) {
            let unit = elementsArray[i].htmlFor;
            if (unit === elemID) {
                let labelID = elementsArray[i];
                return labelID;
            }
        }
    }
    // show user input is ok. need to be minimized
    function inputIsOk(elem) {
        let label;
        if (typeElem !== 'radio') {
            label = getElementLabel(elem);
        } else {
            let parent = elem.parentNode;
            console.log(parent);
            label = getElementLabel(parent);
        }
        label.style.color = 'green';
        label.style.fontWeight = '700';
    }
    // show user input is failed
    function inputIsFailed(elem) {
        let label;
        if (typeElem !== 'radio') {
            label = getElementLabel(elem);
            // console.log(label);
        } else {
            let parent = elem.parentNode;
            // console.log(parent);
            label = getElementLabel(parent);
        }
        label.style.color = 'red';
        label.style.fontWeight = '700';
    }
    // returns initial element state
    function getInitState(elem) {
        let label;
        if (typeElem !== 'radio') {
            label = getElementLabel(elem);
            // console.log(label);
        } else {
            let parent = elem.parentNode;
            // console.log(parent);
            label = getElementLabel(parent);
        }
        label.style.color = 'black';
        label.style.fontWeight = '400';
    }


    // <input> type = text || number || date or <textarea>
    function evaluateTextTypes(elem) {
        // get elem content
        let content = elem.value;
        // show an indicator
        if (content.trim() === '') {
            inputIsFailed(elem);
            return false;
        } else if (content.trim() !== '') {
            inputIsOk(elem);
            return true;
        }
    }
    // <input> type = checkbox
    function ifCheckboxNotChecked(elem) {
        if (elem.checked) {
            inputIsOk(elem);
            return true;
        } else {
            inputIsFailed(elem);
            return false;
        }
    }
    // <input> type = radio
    function ifRadioNotChecked(elem) {
        //get elements arr with all radio with curr name
        let radioArr = document.getElementsByName('vote');
        let counter = 0;
        for (let i = 0; i < radioArr.length; i++) {
            if (radioArr[i].checked) {
                counter += 1;
            }
        }
        if (counter === 0) {
            inputIsFailed(radioArr[0]);
            return false;
        } else if (counter === 1) {
            inputIsOk(radioArr[0]);
            return true;
        }
    }
    // <input> type = select
    function isSelectedValueValid(elem) {
        let selectedValue = elem.value;
        if (selectedValue === '0') {
            inputIsFailed(elem);
            return false;
        } else {
            inputIsOk(elem);
            return true;
        }
    }

    let typeElem;
    if (elem instanceof RadioNodeList) {
        typeElem = 'radio';
    }
    else if (elem.options instanceof HTMLOptionsCollection) {
        typeElem = 'select';
    }
    else {
        typeElem = elem.getAttribute('type');
    }

    switch (typeElem) {
        case 'checkbox':
            ifCheckboxNotChecked(elem);
            break;
        case 'radio':
            ifRadioNotChecked(elem);
            break;
        case 'select':
            isSelectedValueValid(elem);
            break;
        default:
            evaluateTextTypes(elem);
            break;
    }
}


    elementBehaviourDetermine(elem);
    workWithDifferentInputs(elem)

function blurElement() {
    form.addEventListener('blur', blurResearch, true);
    function blurResearch(e) {
        let elem = e.target;
        isCorrect(elem);
        console.log(elem);
    }
    form.addEventListener('focus', blurResearch, true);

//    getInitState(elem) needs to be called to return initial element state when element is in focus again
}

blurElement();
// console.log(isCorrect(developer));
// console.log(isCorrect(siteName));
// console.log(isCorrect(siteURL));
// console.log(isCorrect(startDate));
// console.log(isCorrect(siteVisit));
// console.log(isCorrect(siteMail));
// console.log(isCorrect(siteCatalog));
// console.log(isCorrect(siteDescr));
// console.log(isCorrect(siteReview));
// console.log(isCorrect(siteVote));

// function getOffEmptyErrorLabel(element) {
//     element.addEventListener('focus', deleteLabel, true);
//     function deleteLabel(e) {
//         let element = e.target;
//         let parent = element.parentElement;
//         for (let i = 0; i < parent.childNodes.length; i++) {
//             let part = parent.childNodes[i];
//             if (part.className === 'error') {
//                 parent.removeChild(part);
//                 parent.style.paddingBottom = '15' + 'px';
//             }
//         }
//     }
// }
