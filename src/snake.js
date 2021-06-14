import {getInput} from './manageInput.js'

export const snakeSpeed = 2
const snakeList = [
    {x:10, y:11},
    {x:11, y:11},
    {x:12, y:11}
]

export function refresh() {
    const direction = getInput()
    for (let i = snakeList.length - 2; i >= 0; i--)
        snakeList[i + 1] = { ...snakeList[i]}
    snakeList[0].x += direction.x
    snakeList[0].y += direction.y
}

export function display(game) {
    snakeList.forEach(segment => {
        const snakeElem = document.createElement('div')
        snakeElem.style.gridRowStart = segment.y
        snakeElem.style.gridColumnStart = segment.x
        snakeElem.classList.add('snake')
        game.appendChild(snakeElem)
    })
}
