import test from 'tape';
import '../../../enums.js';
import '../../../parsers/generalParser.js';
import '../../../resources/utilities/walk.utility.js';
import '../../dummy/general/generalSearchFull.json';
test('GeneralParser', async (t) => {
    t.skip('RESULTS API MAY HAVE BEEN CHANED, SKIPPING FOR NOW');
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
//# sourceMappingURL=unit_generalSearchParser.js.map