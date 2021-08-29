import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchPlaylist from '../dummy/general/generalSearchPlaylist.json';
import { Category } from '../../enums.js';
test('GeneralParserPlaylist', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchPlaylist, Category.PLAYLIST);
    // console.log(results);
    t.end();
});
//# sourceMappingURL=generalSearchPlaylistParser.js.map