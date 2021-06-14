import {refresh as refreshSnake, display as displaySnake, snakeSpeed} from './snake.js'
import {refresh as refreshApple, display as displayApple} from './apple.js'


let prevRenderTime = 0
const game = document.getElementById('game')

function main(currTime) {
    window.requestAnimationFrame(main)
    var secSincePrevRender = (currTime - prevRenderTime) / 1000
    if (secSincePrevRender < 1 / snakeSpeed)
        return
    console.log("render")
    prevRenderTime = currTime
    refresh()
    display()
}

window.requestAnimationFrame(main)

function refresh() {
    refreshSnake()
    refreshApple()
}

function display() {
    game.innerHTML = ""
    displaySnake(game)
    displayApple(game)
}