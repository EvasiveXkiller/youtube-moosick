import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchAlbum from '../dummy/general/generalSearchAlbum.json';
import { Category } from '../../enums.js';
import '../../resources/utilities/walk.utility.js';
test('GeneralParserAlbum', async (t) => {
    const results = GeneralParser.parseSearchResult(generalSearchAlbum, Category.ALBUM);
    // console.log(results);
    // t.true(
    // 	WalkUtility
    // 		.walkAndCompare(
    // 			results,
    // 			expected,
    // 			(v1, v2) => typeof v1 === typeof v2,
    // 		),
    // 	'has expected shape',
    // );
    t.end();
});
//# sourceMappingURL=generalSearchAlbumParser.js.map