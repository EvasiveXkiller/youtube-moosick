import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchVideo from '../dummy/general/generalSearchVideo.json';
import { Category } from '../../enums.js';
test('GeneralParserVideo', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchVideo, Category.VIDEO);
    console.log(results);
    t.end();
});
//# sourceMappingURL=generalSearchArtistVideo.js.map