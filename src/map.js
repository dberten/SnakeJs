export function randGridPos()
{
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}

export function outOfMap(pos) {
    return (pos.x < 1 || pos.x > 21 || pos.y < 1 || pos.y > 21)
}