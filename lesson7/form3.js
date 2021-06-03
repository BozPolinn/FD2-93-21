let form = document.forms['devForm'];
// gets label for current input to indicate input to be correct
function getElementLabel(elem) {
    let elemID = elem.id;
    let elementsArray = document.getElementsByTagName('label');
    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].htmlFor === elemID) {
            return elementsArray[i];
        }
    }
}
// returns label for current input
function getElementTypeLabel(elem, typeElem) {
    let label;
    if (typeElem === 'submit') {
        return;
    } else if (typeElem === 'radio') {
        let parent = elem.parentNode;
        label = getElementLabel(parent);
    } else {
        label = getElementLabel(elem);
    }
    return label;
}
// shows user input is ok. need to be minimized
function inputIsOk(elem, typeElem) {
    let label = getElementTypeLabel(elem, typeElem);
    elem.style.color = '#6b705c';
    elem.style.fontWeight = '700';
}
// shows user input is failed
function inputIsFailed(elem, typeElem) {
    let label = getElementTypeLabel(elem, typeElem);
    label.style.color = 'red';
    label.style.fontWeight = '700';
}
// returns initial element state
function getInitState(elem, typeElem) {
    let label = getElementTypeLabel(elem, typeElem);
    label.style.color = 'black';
    label.style.fontWeight = '400';
}
// returns initial element type
function getElemType(elem) {
    let type;
    if (elem instanceof RadioNodeList) {
        type = 'radio';
    } else if (elem.options instanceof HTMLOptionsCollection) {
        type = 'select';
    } else {
        type = elem.getAttribute('type');
    }
    return type;
}
// define if element is empty
function defineElement(elem) {
    // <input> type = text || number || date or <textarea>
    function evaluateTextTypes(elem) {
        // get elem content
        let content = elem.value;
        // show an indicator
        if (content.trim() === '') {
            inputIsFailed(elem, typeElem);
            return false;
        } else {
            inputIsOk(elem, typeElem);
            return true;
        }
    }
    // <input> type = checkbox
    function ifCheckboxNotChecked(elem) {
        if (elem.checked) {
            inputIsOk(elem, typeElem);
            return true;
        } else {
            inputIsFailed(elem, typeElem);
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
        if (counter === 1) {
            inputIsOk(radioArr[0], typeElem);
            return true;
        } else {
            inputIsFailed(radioArr[0], typeElem);
            return false;
        }
    }
    // <input> type = select
    function isSelectedValueValid(elem) {
        let selectedValue = elem.value;
        if (selectedValue === '0') {
            inputIsFailed(elem, typeElem);
            return false;
        } else {
            inputIsOk(elem, typeElem);
            return true;
        }
    }

    let text = 'null';
    let typeElem = getElemType(elem);
    switch (typeElem) {
        case 'checkbox':
            if (!ifCheckboxNotChecked(elem)) {
                text = 'required';
                return text;
            }
            break;
        case 'radio':
            if (!ifRadioNotChecked(elem)) {
                text = 'required';
                return text;
            }
            break;
        case 'select':
            if (!isSelectedValueValid(elem)) {
                text = 'required';
                return text;
            }
            break;
        default:
            if (!evaluateTextTypes(elem)) {
                text = 'required';
                return text;
            }
            break;
    }
    return text;
}
// define if input value is correct
function validateFields(field) {
    let text = 'ok';
    let classField = field.className;
    if (classField === 'developers') {
        let result = validDevelopers(field);
        if (!result) {
            text = 'expected: "-", "_", ".", ",", " ", 0-9, A-z, А-я';
        }
        return text;
    }
    else if (classField === 'siteName') {
        let result = validSiteName(field);
        if (!result) {
            text = 'expected: "-", "_", ".", " ", 0-9, A-z, А-я';
        }
        return text;
    }
    else if (classField === 'siteURL') {
        let result = validSiteURL(field);
        if (!result) {
            text = 'invalid URL';
        }
        return text;
    }
    else if (classField === 'siteEmail') {
        let result = validSiteEmail(field);
        if (!result) {
            text = 'invalid email';
        }
        return text;
    }
    else {
        return text;
    }

    function validDevelopers(elem) {
        let regName = /[а-яa-z0-9 \.\-_,]+/i;
        return regName.test(elem.value);
    }
    function validSiteName(elem) {
        let regName = /[-a-zа-я0-9\._ ]+/i;
        return regName.test(elem.value);
    }
    function validSiteURL(elem) {
        let regURL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=+$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=+$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[+~%\/\.\w\-_]*)?\??(?:[\-+=&;%@\.\w_]*)#?(?:[\.!\/\\\w]*))?)/;
        return regURL.test(elem.value);
    }
    function validSiteEmail(elem) {
        let regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
        return regMail.test(elem.value);
    }
}

function validUnitElement() {
    form.addEventListener('blur', focusChange, true);
    function focusChange(e) {
        let elem = e.target;
        validUnit(elem);
    }

    function validUnit(unit) {
        function workWithParent(unit) {
            let parent = unit.parentElement;
            for (let i = 0; i < parent.childNodes.length; i++) {
                let deletedLabel = parent.childNodes[i];
                if (deletedLabel.className === 'error') {
                    parent.removeChild(deletedLabel);
                    parent.style.paddingBottom = '15' + 'px';
                }
            }
        }
        let type = getElemType(unit);
        if (type !== 'submit') {
            let textEmp = defineElement(unit);
            if (textEmp === 'null') {
                let textVal = validateFields(unit);
                if (textVal !== 'ok') {
                    workWithParent(unit);
                    getEmptyErrorLabel(unit, textVal);
                } else {
                    workWithParent(unit);
                    getInitState(unit, type);
                }
            } else {
                getEmptyErrorLabel(unit, textEmp);
            }
        } else {
            return;
        }
    }
}
validUnitElement();

function trySubmit() {
    form.addEventListener('submit', ifAllElemsCorrect, true);
    function ifAllElemsCorrect(e) {
        let arr = [];
        // let arrVal = [];
        for (let i = 0; i < form.length; i++) {
            let elemForm = form[i];
            let type = getElemType(elemForm);
            if (type !== 'submit') {
                let textEmp = defineElement(elemForm);
                if (textEmp === 'null') {
                    let textVal = validateFields(elemForm);
                    if (textVal !== 'ok') {
                        getEmptyErrorLabel(elemForm, textVal);
                        // arrVal.push(elemForm.name);
                        arr.push(elemForm.name);
                    }
                } else if (textEmp !== 'null') {
                    getEmptyErrorLabel(elemForm, textEmp);
                    arr.push(elemForm.name);
                }
            }
        }
        if (arr[0] !== undefined) {
            let name = arr[0];
            setFocus(name);
            e.preventDefault();
        }
        function setFocus(name){
            let focusedElem = document.getElementsByName(name)[0];
            focusedElem.focus();
            focusedElem.scrollIntoView();
        }
    }
}
trySubmit();

function getEmptyErrorLabel(element, text) {
    let infoBlock = document.createElement('div');
    infoBlock.classList.add('error');
    infoBlock.style.color = 'red';
    infoBlock.style.fontSize = '0.7' + 'rem';
    let info = document.createTextNode(text);
    infoBlock.appendChild(info);

    let parent = element.parentElement;
    for (let i = 0; i < parent.childNodes.length; i++) {
        let part = parent.childNodes[i];
        if (part.className === 'error') {
            return;
        }
    }
    parent.style.paddingBottom = '0' + 'px';
    parent.appendChild(infoBlock);
}
