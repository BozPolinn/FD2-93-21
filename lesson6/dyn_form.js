// Создать проект DYN_FORM. Разработать функцию, которая в переданном ей теге <form> динамически строит
// элементы формы по переданному ей массиву.
// Вызвать эту функцию дважды с указанными ниже массивами, чтобы она построила на веб-странице
// две формы по указанным ниже образцам. Точном соответствия внешнего вида форм образцам добиваться не обязательно.
// В качестве скрипта, обрабатывающего данные форм (атрибут action тега form), можно указывать
// https://fe.it-academy.by/TestForm.php

let formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];

let formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'},
    ];

function getFormElem(input) {
    // create form
    let elem = document.createElement('form');
    elem.setAttribute('method', 'POST');
    elem.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    elem.style.display = 'flex';
    elem.style.flexDirection = 'column';
    elem.style.alignItems = 'flex-start';
    elem.style.margin = '0px 0px 0px 15px';
    elem.style.padding = '0px';

    // cyclic element creation
    for (let i = 0; i < input.length; i++) {
        let unit = input[i];
        elem.appendChild(createInput(unit));
    }

    // add elemets to form
    // document.body.elem.appendChild(block);

    // connect form with DOM
    document.body.appendChild(elem);
}

getFormElem(formDef1);

function createInput(unit) {
    let block = document.createElement('div');
    block.style.display = 'flex';
    block.style.flexDirection = 'row';

    let label = document.createElement('label');
    label.style.display = 'flex';
    label.style.width = '200px';
    block.appendChild(label);

    let labelText = document.createTextNode(unit.label);
    label.appendChild(labelText);

    switch (unit.kind) {
        // longtext
        case ('longtext'):
            let text = document.createElement('input');
            text.setAttribute('type', 'text');
            text.style.display = 'flex';
            text.style.width = '100%';
            block.appendChild(text);
            break;
        // shorttext
        case ('shorttext'):
            let shortText = document.createElement('input');
            shortText.setAttribute('type', 'text');
            shortText.style.display = 'flex';
            shortText.style.width = '200px';
            block.appendChild(shortText);
            break;
        // number
        case ('number'):
            let numText = document.createElement('input');
            numText.setAttribute('type', 'number');
            numText.setAttribute('min', '0');
            numText.style.display = 'flex';
            numText.style.width = '200px';
            block.appendChild(numText);
            break;
        // combo + variants
        case ('combo'):
            let combo = document.createElement('select');
            combo.setAttribute('size', '3');

            let optionVar = unit.variants;
            for (let v = 0; v < optionVar.length; v++) {
                let option = document.createElement('option');
                option.setAttribute('value', optionVar[v].value);
                let optionText = document.createTextNode(optionVar[v].text)
                option.appendChild(optionText);
                combo.appendChild(option);
            }
            block.appendChild(combo);
            break;
        // radio + variants
        case ('radio'):
            let num = unit.variants;
            for (let n = 0; n < num.length; n++) {
                let radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.setAttribute('name', 'publication');
                radio.setAttribute('value', (n+1));
                radio.setAttribute('id', ('rad' + n));

                let labelForRadio = document.createElement('label');
                labelForRadio.htmlFor = 'rad' + n;

                let labelForRadioText = document.createTextNode(num[n].text);
                labelForRadio.appendChild(labelForRadioText);

                block.appendChild(labelForRadio);
                block.appendChild(radio);
            }
            break;

        // check
        case ('check'):
            let check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('id', unit.kind);
            check.setAttribute('name', unit.name);
            let labelForCheckBox = document.createElement('label');
            labelForCheckBox.htmlFor = unit.kind;
            block.appendChild(labelForCheckBox);
            block.appendChild(check);
            break;
        // memo
        case ('memo'):
            let memo = document.createElement('textarea');
            memo.style.width = '100%';
            memo.style.height = '100px';
            block.appendChild(memo);
            break;
        // submit
        case ('submit'):
            let send = document.createElement('input');
            send.setAttribute('type', 'submit');
            block.appendChild(send);
            label.style.display = 'none';
            break;
        return block;
    }
}


