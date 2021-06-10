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
    const container = document.querySelector('.container');
    // container parameters
    const { width : contWidth, height : contHeight } = container.getBoundingClientRect();
    const contLeft = getElementPos(container).left;
    const contTop = getElementPos(container).top;

    // mousedown
    document.addEventListener('mousedown', onMouseDown, false)
    function onMouseDown(e) {
        const pX = e.pageX;
        const pY = e.pageY;
        let cat = e.target;
        let zInd = 1;

        if (cat.hasAttribute('drag')) {
            cat.ondragstart = function() {
                return false;
            };
            cat.style.position = 'absolute';
            cat.style.zIndex = (zInd + 5) + 'px';
            // cat parameters
            let catX= getElementPos(cat).left;
            let catY= getElementPos(cat).top;
            const catWidth = cat.offsetWidth;
            const catHeight = cat.offsetHeight;
            const maxMoveRight = contWidth - catWidth - (catX - contLeft);
            const maxMoveLeft = catX - contLeft;
            const maxMoveBottom = contHeight - catHeight - (catY - contTop);
            const maxMoveTop = catY - contTop;

            document.addEventListener('mousemove', onMouseMove, false);

            // mouse move
            function onMouseMove(e) {
                // difference between initial and new mouse state
                // move right (2 cases) and left (next 2 cases)
                let dX = e.pageX - pX;
                if (dX >= 0) {
                    if (dX > maxMoveRight) {
                        dX = maxMoveRight;
                    } else if (dX <= maxMoveRight) {
                        dX = e.pageX - pX;
                    }
                } else if (dX < 0) {
                    if (dX < -maxMoveLeft) {
                        dX = -maxMoveLeft;
                    } else if (dX>= -maxMoveLeft) {
                        dX = e.pageX - pX;
                    }
                }

                let dY = e.pageY - pY;
                if (dY >= 0) {
                    if (dY > maxMoveBottom) {
                        dY = maxMoveBottom;
                    } else if (dY <= maxMoveBottom) {
                        dY = e.pageY - pY;
                    }
                } else if (dY < 0) {
                    if (dY > -maxMoveTop) {
                        dY = e.pageY - pY;
                    } else if (dY <= -maxMoveTop) {
                        dY = -maxMoveTop;
                    }
                }
                console.log(maxMoveLeft)
                console.log(dX)


                cat.style.left = (catX + dX) + 'px';
                cat.style.top = (catY + dY) + 'px';

                let parent = cat.parentElement;
                parent.appendChild(cat);
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

