const container = document.querySelector('#container');
const { x, y, width, height } = container.getBoundingClientRect();

function getElementPos(elem) {
    const bbox = elem.getBoundingClientRect();
    return {
        left: bbox.left + window.pageXOffset,
        top: bbox.top + window.pageYOffset
    }
}

window.addEventListener('load', ifPageIsReady, false);
function ifPageIsReady(e) {
    let catArr = document.getElementsByClassName('cat');
    for (let i = (catArr.length - 1); i < catArr.length; i--) {
        const unit = catArr[i]
        let left = getElementPos(unit).left;
        let top = getElementPos(unit).top;

        unit.style.left = left + 'px';
        unit.style.top = top + 'px';
        unit.style.position = 'absolute';
        if (i === 0) {
            return;
        }
    }
}

function dragAndDrop() {
    // mousedown
    document.addEventListener('mousedown', onMouseDown, false)
    function onMouseDown(e) {
        const pX = e.pageX;
        const pY = e.pageY;
        let cat = e.target;

        if (cat.hasAttribute('drag')) {
            cat.ondragstart = function() {
                return false;
            };

            let {x : catX, y : catY} = cat.getBoundingClientRect();
            document.addEventListener('mousemove', onMouseMove, false);

            let parent = cat.parentElement;
            parent.appendChild(cat);
            // mouse move
            function onMouseMove(e) {
                let dX = e.pageX - pX;
                let dY = e.pageY - pY;

                cat.style.left = (catX + dX) + 'px';
                cat.style.top = (catY + dY) + 'px';
            }
            // mouse up
            document.addEventListener('mouseup', onMouseUp, false);
            function onMouseUp(e) {
                document.removeEventListener('mousemove', onMouseMove, false);
                document.removeEventListener('mouseup', onMouseUp, false);
            }

        }
    }
}

dragAndDrop();

