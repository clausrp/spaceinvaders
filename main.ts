input.onButtonPressed(Button.A, function () {
    skib.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(skib.get(LedSpriteProperty.X), skib.get(LedSpriteProperty.Y))
    shot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (shot.isTouching(fjende)) {
            game.addScore(1)
            shot.delete()
            fjende.delete()
        }
    }
    if (shot.get(LedSpriteProperty.Y) <= 0) {
        shot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    skib.move(1)
})
let fjende: game.LedSprite = null
let shot: game.LedSprite = null
let skib: game.LedSprite = null
skib = game.createSprite(2, 4)
basic.forever(function () {
    fjende = game.createSprite(randint(0, 4), 2)
    fjende.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    fjende.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        fjende.move(1)
        basic.pause(500)
        if (fjende.isTouching(skib)) {
            game.gameOver()
        }
    }
    if (fjende.isTouchingEdge()) {
        fjende.delete()
    }
})
