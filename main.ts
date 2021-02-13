namespace SpriteKind {
    export const C = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    music.playTone(262, music.beat(BeatFraction.Half))
})
let wolfie = corgio.create(SpriteKind.Player)
wolfie.updateSprite()
wolfie.verticalMovement()
wolfie.horizontalMovement()
wolfie.follow()
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
let noteC = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 f f f 1 1 1 1 1 1 . 
    . 1 1 1 1 1 f f f 1 1 1 1 1 1 . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 f f f 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    `, SpriteKind.C)
