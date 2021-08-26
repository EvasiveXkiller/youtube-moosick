import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchAlbum from '../dummy/general/generalSearchAlbum.json';
import { Category } from '../../enums.js';
test('GeneralParserAlbum', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchAlbum, Category.ALBUM);
    console.log(results);
    t.end();
});
//# sourceMappingURL=generalSearchAlbumParser.js.map