input.onButtonPressed(Button.A, function () {
    skib.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(skib.get(LedSpriteProperty.X), skib.get(LedSpriteProperty.Y))
    shot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (shot.get(LedSpriteProperty.Y) <= 0) {
        shot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    skib.move(1)
})
let shot: game.LedSprite = null
let skib: game.LedSprite = null
skib = game.createSprite(2, 4)
basic.forever(function () {
	
})
