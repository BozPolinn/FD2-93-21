// Реализовать на JavaScript перетаскивание мышью по веб-странице нескольких любых
// (но не мелких) изображений.
//
// Обрабатывать как минимум события mousedown, mousemove, mouseup.
//
// Изображения должны «таскаться» мышью за любую точку (т.е. и при «взятии» и при «отпускании» изображение
// смещаться не должно, оно должно смещаться только при смещении мыши при нажатой левой кнопке, ровно настолько,
// насколько смещена мышь).

// Код не должен зависеть от количества картинок (т.е. код должен сам найти все картинки, находящиеся
// в указанном div-контейнере).

// Картинки изначально НЕ должны быть спозиционированы (стилевое свойство position не должно быть задано).

// Когда начинается перетаскивание какой-либо картинки, остальные картинки не должны сдвигаться.
// Картинка, перетаскивание которой началось, должна оказываться выше (ближе к глазам), чем остальные.
// На время перетаскивания менять форму курсора на подходящую.

function getCatCoordinates() {
    const container = document.getElementById('container');
    const { x, y, width, height } = container.getBoundingClientRect();

    let cats = document.getElementsByClassName('cat');
    for (let i = 0; i < cats.length; i++) {
        let cat = cats[i];
        const {x : catX, y : catY, width : catWidth, height : catHeight } = cat.getBoundingClientRect();
        const catXCoord = catX - x;
        const catYCoord = catY - y;
        const maxMoveLeft = -catXCoord;
        const maxMoveRight = width - catWidth - catXCoord;
        const maxMoveTop = -catYCoord;
        const maxMoveBottom = height - catHeight - catYCoord;
        console.log(maxMoveLeft, maxMoveRight, maxMoveTop, maxMoveBottom);
    }
}
getCatCoordinates()

function dragndrop() {
    const container = document.getElementById('container');
    container.addEventListener('mousedown', onMouseDown);

    function onMouseDown(e) {
        const cat = e.target;
        if (cat.draggable) {
            const { x, y, width, height } = container.getBoundingClientRect();
            console.log(cat)

            const {x : catX, y : catY, width : catWidth, height : catHeight } = cat.getBoundingClientRect();
            const catXCoord = catX - x;
            const catYCoord = catY - y;
            const maxMoveLeft = -catXCoord;
            const maxMoveRight = width - catWidth - catXCoord;
            const maxMoveTop = -catYCoord;
            const maxMoveBottom = height - catHeight - catYCoord;
            console.log(maxMoveLeft, maxMoveRight, maxMoveTop, maxMoveBottom);
        }
    }





}
dragndrop()