// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`280008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000302020202020202020202020202020202020202020202020202020202020202020202020202020405010101010101010101010101010101010101010101010101010101010101010101010101010106`, img`
........................................
........................................
........................................
........................................
........................................
........................................
2222222222222222222222222222222222222222
2222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
