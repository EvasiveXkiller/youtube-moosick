import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchPlaylist from '../dummy/general/generalSearchPlaylist.json';
import { Category } from '../../enums.js';
import { Playlist } from '../../resources/generalTypes/playlist.js';
import { Artist } from '../../resources/generalTypes/artist.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';
test('GeneralParserPlaylist', async (t) => {
    const { result } = GeneralParser.parseSearchResult(generalSearchPlaylist, Category.PLAYLIST);
    const expected = [
        Playlist.from({
            author: [
                Artist.from({
                    browseId: String(),
                    name: String(),
                    url: String(),
                }),
            ],
            browseId: String(),
            name: String(),
            trackCount: Number(),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    t.end();
});
//# sourceMappingURL=generalSearchPlaylistParser.js.map