let tupleDirect = {x: 0, y: 0}

window.addEventListener('keydown', e=> {
    switch(e.key) {
        case 'ArrowRight':
            tupleDirect = {x: 1, y: 0}
            break
        case 'ArrowUp':
            tupleDirect = {x: 0, y: -1}
            break
        case 'ArrowDown':
            tupleDirect = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            tupleDirect = {x: -1, y: 0}
            break
    } 
})

export function getInput()
{
    return tupleDirect
}