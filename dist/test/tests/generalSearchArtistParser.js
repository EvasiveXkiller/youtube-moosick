import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchArtist from '../dummy/general/generalSearchArtist.json';
import { Category } from '../../enums.js';
test('GeneralParserArtist', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchArtist, Category.ARTIST);
    // console.log(results);
    t.end();
});
//# sourceMappingURL=generalSearchArtistParser.js.map