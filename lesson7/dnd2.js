//     Создайте слайдер:
//
//     Захватите мышкой синий бегунок и двигайте его.
//
//     Важные детали:
//
//     Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы.
//     При этом бегунок должен останавливаться чётко в нужном конце полосы.
//     При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть все равно работает
//     (это удобно для пользователя).

document.addEventListener('mousedown', onMouseDown, false);
function onMouseDown(e) {
    let dragEl = e.target;
    if (dragEl.draggable) {

    }

    document.addEventListener('mousemove', onMouseMove, false);
    function onMouseMove(e) {

    }

    document.addEventListener('mouseup', onMouseUp, false);
    function onMouseUp(e) {
        document.removeEventListener('mousedown', onMouseDown, false);
        document.removeEventListener('mousemove', onMouseMove, false);
    }
}

