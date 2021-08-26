import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchSong from '../dummy/general/generalSearchSong.json';
import { Category } from '../../enums.js';
test('GeneralParserSong', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchSong, Category.SONG);
    console.log(results);
    t.end();
});
//# sourceMappingURL=generalSearchSongParser.js.map