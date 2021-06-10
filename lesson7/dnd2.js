//     Создайте слайдер:
//     Захватите мышкой синий бегунок и двигайте его.//
//     Важные детали:
//     Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы.
//     При этом бегунок должен останавливаться чётко в нужном конце полосы.
//     При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть все равно работает
//     (это удобно для пользователя).

function getElementPos(elem) {
    const bbox = elem.getBoundingClientRect();
    return {
        left: bbox.left + window.pageXOffset,
        top: bbox.top + window.pageYOffset
    }
}

document.addEventListener('mousedown', onMouseDown, false);
function onMouseDown(e) {
    let dragEl = e.target;
    dragEl.ondragstart = function() {
        return false;
    }

    if (dragEl.draggable) {
        // get element left top border
        let parent = dragEl.parentElement;
        let initStateLeft = getElementPos(parent).left;
        let initStateTop = getElementPos(parent).top;
        console.log(initStateLeft, initStateTop);
        //   get element width height
        let initParWidth = parent.offsetWidth;
        let initWidth = dragEl.offsetWidth;

        document.addEventListener('mousemove', onMouseMove, false);
        function onMouseMove(e) {
            let pX = e.pageX;
            let newLeft = pX - initStateLeft;
            if (newLeft < 0) {
                newLeft = 0;
            }
            let sliderWidth = initParWidth - initWidth;
            if (sliderWidth < newLeft) {
                newLeft = sliderWidth;
            }
            dragEl.style.left = newLeft + 'px';
        }

        document.addEventListener('mouseup', onMouseUp, false);
        function onMouseUp(e) {
            console.log('up');
            document.removeEventListener('mousemove', onMouseMove, false);
            document.removeEventListener('mouseup', onMouseUp, false);
        }

    }
}

