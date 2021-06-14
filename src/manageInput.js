let tupleDirect = {x: 0, y: 0}
let tmp = {x: 0, y: 0}

window.addEventListener('keydown', e=> {
    switch(e.key) {
        case 'ArrowRight':
            if (tmp.x !== 0)
                break
            tupleDirect = {x: 1, y: 0}
            break
        case 'ArrowUp':
            if (tmp.y !== 0)
                break
            tupleDirect = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if (tmp.y !== 0)
                break
            tupleDirect = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (tmp.x !== 0)
                break
            tupleDirect = {x: -1, y: 0}
            break
    } 
})

export function getInput()
{
    tmp = tupleDirect
    return tupleDirect
}