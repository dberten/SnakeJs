import {getInput} from './manageInput.js'

export const snakeSpeed = 5
const snakeList = [{x:10, y:11}]
let newPart = 0

export function refresh() {
    addPart()
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

export function growSnake(nb) {
    newPart += nb
}

export function isSnakeGrow(pos) {
    return snakeList.some(part => {
        return equalPos(part, pos)
    })
}

function equalPos(pos1, pos2) {
    return (pos1.x === pos2.x && pos1.y === pos2.y)
}

function addPart() {
    for (let i = 0; i < newPart; i++) {
        snakeList.push({...snakeList[snakeList.length - 1]})
    }
    newPart = 0
}