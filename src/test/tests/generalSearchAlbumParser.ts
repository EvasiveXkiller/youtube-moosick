import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchAlbum from '../dummy/general/generalSearchAlbum.json';
import { Category } from '../../enums.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';

test('GeneralParserAlbum', async (t) => {
	const results = GeneralParser.parseSearchResult(generalSearchAlbum as any, Category.ALBUM);

	console.log(results);
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
