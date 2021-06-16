import {getInput} from './manageInput.js'

export let score = 0
export const snakeSpeed = 5
const snakeList = [{x:11, y:11}]
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

export function isSnakeGrow(pos, {ignoreFirst = false} = {}) {
    return snakeList.some((part, i) => {
        if (ignoreFirst &&  i === 0)
            return false
        return equalPos(part, pos)
    })
}

export function getPosSnake() {
    return snakeList[0]
}

export function snakeQueue() {
    return (isSnakeGrow(snakeList[0], {ignoreFirst:true}))
}

function equalPos(pos1, pos2) {
    if (pos1.x === pos2.x && pos1.y === pos2.y) {
        score += 1
        return true
    }
    return false
}

function addPart() {
    for (let i = 0; i < newPart; i++) {
        snakeList.push({...snakeList[snakeList.length - 1]})
    }
    newPart = 0
}