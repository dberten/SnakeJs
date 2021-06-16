import {refresh as refreshSnake, display as displaySnake, snakeSpeed, getPosSnake, snakeQueue, score} from './snake.js'
import {refresh as refreshApple, display as displayApple} from './apple.js'
import {outOfMap} from './map.js'

let prevRenderTime = 0
const game = document.getElementById('game')
const scoreBox = document.getElementById('score')
let lose = false

function main(currTime) {
    if (lose) {
        if (confirm('Game over. Press ok to play again.'))
            window.location = '/'
    }
    window.requestAnimationFrame(main)
    var secSincePrevRender = (currTime - prevRenderTime) / 1000
    if (secSincePrevRender < 1 / snakeSpeed)
        return
    console.log(score)
    prevRenderTime = currTime
    refresh()
    display()
}

window.requestAnimationFrame(main)

function refresh() {
    refreshSnake()
    refreshApple()
    checkLose()
}

function display() {
    game.innerHTML = ""
    scoreBox.innerHTML = ""
    scoreBox.innerHTML += "<p>SCORE: " + score + "</p>"
    displaySnake(game)
    displayApple(game)
}

function checkLose(){
    lose = outOfMap(getPosSnake()) || snakeQueue()
}