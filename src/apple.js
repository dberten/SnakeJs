import {growSnake, isSnakeGrow} from './snake.js'
import {randGridPos} from './map.js'

let apple = getRandPosApple()
const growSnakeValue = 1

export function refresh() {
    if (isSnakeGrow(apple)) {
        growSnake(growSnakeValue)
        apple = getRandPosApple()
    }
}

export function display(game) {
    const appleElem = document.createElement('div')
    appleElem.style.gridRowStart = apple.y
    appleElem.style.gridColumnStart = apple.x
    appleElem.classList.add('apple')
    game.appendChild(appleElem)
}

function getRandPosApple()
{
    let ApplePos

    while (ApplePos == null || isSnakeGrow(ApplePos))
        ApplePos = randGridPos()
    return ApplePos
}
