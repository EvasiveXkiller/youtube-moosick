import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchAlbum from '../dummy/general/generalSearchAlbum.json';
import { Category } from '../../enums.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import { AlbumExtended } from '../../resources/generalTypes/album.js';
import { Thumbnails } from '../../resources/generalTypes/thumbnails.js';
import { Artist } from '../../resources/generalTypes/artist.js';
test('GeneralParserAlbum', async (t) => {
    const { result } = GeneralParser.parseSearchResult(generalSearchAlbum, Category.ALBUM);
    const expected = [
        AlbumExtended.from({
            browseId: String(),
            name: String(),
            url: String(),
            thumbnails: [
                Thumbnails.from({
                    height: Number(),
                    url: String(),
                    width: Number(),
                }),
            ],
            artist: new EitherShape([
                Artist.from({
                    browseId: String(),
                    name: String(),
                    url: String(),
                }),
                undefined,
            ]),
            year: new EitherShape([
                Number(),
                undefined,
            ]),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    t.end();
});
//# sourceMappingURL=generalSearchAlbumParser.js.map