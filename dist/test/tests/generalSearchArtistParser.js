import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchArtist from '../dummy/general/generalSearchArtist.json';
import { Category } from '../../enums.js';
import { ArtistExtended } from '../../resources/generalTypes/artist.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Thumbnails } from '../../resources/generalTypes/thumbnails.js';
test('GeneralParserArtist', async (t) => {
    const { result } = GeneralParser.parseSearchResult(generalSearchArtist, Category.ARTIST);
    const expected = [
        ArtistExtended.from({
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
            subs: new EitherShape([String(), undefined]),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    t.end();
});
//# sourceMappingURL=generalSearchArtistParser.js.map