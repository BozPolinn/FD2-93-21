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

getForm(formDef2);
getForm(formDef1);


function getForm(input) {
    // create form
    let elem = document.createElement('form');
    elem.setAttribute('method', 'POST');
    elem.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    elem.style.display = 'flex';
    elem.style.width = '100%';
    elem.style.flexDirection = 'column';
    elem.style.alignItems = 'flex-start';
    elem.style.margin = '30px 0px 30px 15px';
    elem.style.padding = '0px';

    // cyclic element creation
    for (let i = 0; i < input.length; i++) {
        let unit = input[i];
        elem.appendChild(getElemOfArray(unit));
    }

    function getElemOfArray(input) {
        let block = document.createElement('div');
        block.style.display = 'flex';
        block.style.width = '100%';
        block.style.flexDirection = 'row';

        let col1 = document.createElement('div');
        col1.style.display = 'flex';
        col1.style.width = '200px';
        block.appendChild(col1);

        let col2 = document.createElement('div');
        col2.style.display = 'flex';
        block.appendChild(col2);
        col2.style.width = '100%';


        let label = document.createElement('label');
        label.style.display = 'flex';
        label.style.width = '200px';
        col1.appendChild(label);

        let labelText = document.createTextNode(input.label);
        label.appendChild(labelText);

        let newArr = selectBehaviour(input);

        for (let i=0; i<newArr.length; i++) {
            col2.appendChild(newArr[i]);
        }

        //select element manipulations
        function selectBehaviour(unit) {
            switch (unit.kind) {
                case 'longtext': return getInputTypeText(unit);
                case 'shorttext': return getLittleText(unit);
                case 'number': return getInputNumber(unit);
                case 'combo': return getSelectElem(unit);
                case 'radio': return getRadioElem(unit);
                case 'check': return getCheckBox(unit);
                case 'memo': return getTextArea(unit);
                case 'submit': return getInputTypeSubmit(unit);
                default: return [];
            }
        }

        //what to do with elem
        function getInputTypeText(input) {
            let text = document.createElement('input');
            text.setAttribute('type', 'text');
            text.setAttribute('name', input.name);
            text.style.display = 'flex';
            text.style.width = '100%';
            return [text];
        }

        function getLittleText(input) {
            let shortText = document.createElement('input');
            shortText.setAttribute('type', 'text');
            shortText.setAttribute('name', input.name);
            shortText.style.display = 'flex';
            shortText.style.padding = '0px';
            shortText.style.width = '196px';
            return [shortText];
        }

        function getInputNumber(input) {
            let numText = document.createElement('input');
            numText.setAttribute('type', 'number');
            numText.setAttribute('min', '0');
            numText.setAttribute('name', input.name);
            numText.style.padding = '0px';
            numText.style.display = 'flex';
            numText.style.width = '196px';
            return [numText];
        }

        function getSelectElem(input) {
            let combo = document.createElement('select');
            combo.setAttribute('size', '3');
            combo.setAttribute('name', input.name);
            combo.style.width = '200px';

            let optionVar = input.variants;
            for (let v = 0; v < optionVar.length; v++) {
                let option = document.createElement('option');
                option.setAttribute('value', optionVar[v].value);
                let optionText = document.createTextNode(optionVar[v].text)
                option.appendChild(optionText);
                combo.appendChild(option);
            }
            return [combo];
        }

        function getRadioElem(input) {
            let num = input.variants;
            let radioArr = [];
            for (let i = 0; i < num.length; i++) {
                let radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.setAttribute('name', input.name);
                radio.setAttribute('value', num[i].value);
                radio.setAttribute('id', ('rad' + i + input.name));
                radio.style.marginRight = '30px';
                radio.style.position = 'relative';
                radio.style.top = '3px';

                let labelForRadio = document.createElement('label');
                let labelForRadioText = document.createTextNode(num[i].text);
                labelForRadio.appendChild(labelForRadioText);
                labelForRadio.appendChild(radio);
                radioArr.push(labelForRadio);
            }
            return radioArr;
        }

        function getCheckBox(input) {
            let check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('id', input.kind);
            check.setAttribute('name', input.name);
            let labelForCheckBox = document.createElement('label');
            labelForCheckBox.appendChild(check);
            return [labelForCheckBox];
        }

        function getTextArea(input) {
            let memo = document.createElement('textarea');
            memo.setAttribute('name', input.name);
            memo.style.width = '196px';
            memo.style.height = '50px';
            return [memo];
        }

        function getInputTypeSubmit(input) {
            let send = document.createElement('input');
            send.setAttribute('name', 'submit');
            send.setAttribute('type', 'submit');
            send.setAttribute('value', 'отправить');
            return [send];
        }

        return block;
    }

    document.body.appendChild(elem);
}


