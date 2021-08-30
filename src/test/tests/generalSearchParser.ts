import test from 'tape';
import { Category } from '../../enums.js';
import { GeneralParser } from '../../parsers/generalParser.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';
import generalSearchFull from '../dummy/general/generalSearchFull.json';

test('GeneralParser', async (t) => {
	// const result = GeneralParser.parseSearchResult(generalSearchFull as any);
	// const expected: typeof result = [
	// 	Album.from({
	// 		browseId: String(),
	// 		name: String(),
	// 		url: String(),
	// 	}),
	// ];

	// t.true(
	// 	WalkUtility
	// 		.walkAndAssertShape(
	// 			result,
	// 			expected,
	// 		),
	// 	'result has expected shape',
	// );

	t.end();
});
