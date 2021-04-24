controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        info.changeScoreBy(-1)
        tiles.replaceAllTiles(assets.tile`myTile0`, sprites.castle.tileGrass2)
    } else if (cursor.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        info.changeScoreBy(-1)
        tiles.replaceAllTiles(assets.tile`myTile2`, assets.tile`myTile`)
    } else if (cursor.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        info.changeScoreBy(-1)
        tiles.replaceAllTiles(assets.tile`myTile3`, assets.tile`myTile1`)
    } else if (cursor.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
        info.changeScoreBy(-1)
        tiles.replaceAllTiles(assets.tile`myTile5`, sprites.castle.tileDarkGrass1)
    } else if (cursor.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
        info.changeScoreBy(-1)
        tiles.replaceAllTiles(assets.tile`myTile4`, sprites.castle.tileGrass3)
    } else {
        info.changeLifeBy(-1)
    }
    if (info.score() == 0) {
        pause(500)
        game.over(true)
    }
})
info.onCountdownEnd(function () {
    info.setScore(5)
    tiles.loadMap(tiles.createMap(tilemap`level3`))
    cursor = sprites.create(img`
        f f . . . . . . 
        f 1 f . . . . . 
        . f 1 f . . f f 
        . . f 1 f f 1 f 
        . . . f 1 1 1 f 
        . . . f 1 1 1 f 
        . . f 1 1 1 1 f 
        . . f f f f f f 
        `, SpriteKind.Player)
    controller.moveSprite(cursor)
    info.setLife(5)
})
let cursor: Sprite = null
tiles.setTilemap(tilemap`level1212`)
info.startCountdown(5)
