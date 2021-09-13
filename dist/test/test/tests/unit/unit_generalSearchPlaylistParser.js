import test from 'tape';
import { GeneralParser } from '../../../parsers/generalParser.js';
import generalSearchPlaylist from '../../dummy/general/generalSearchPlaylist.json';
import { Category } from '../../../enums.js';
import { Playlist } from '../../../resources/generalTypes/playlist.js';
import { Artist } from '../../../resources/generalTypes/artist.js';
import { WalkUtility } from '../../../resources/utilities/walk.utility.js';
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
        .walkAndAssertShape(result, expected), 'GeneralParserPlaylist result has expected shape');
    t.equals(result[5].name, 'Covers I like to do', 'title match');
    t.equals(result[12].trackCount, 76, 'track count match');
    t.equals(result[18].author[0].url, 'https://music.youtube.com/channel/UCJ-pymBUbQ7hAZXaJTVO0cw', 'browseId match');
    t.end();
});
//# sourceMappingURL=unit_generalSearchPlaylistParser.js.map