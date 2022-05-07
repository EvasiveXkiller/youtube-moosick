import test from 'tape';
import { YoutubeMoosick } from '../../YoutubeMoosick.js';
import { SearchSuggestions } from '../../resources/resultTypes/searchSuggestions.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';
test('searchSuggestions', async (t) => {
    const api = await YoutubeMoosick.new();
    const result = await api.getSearchSuggestions('something');
    t.true(result instanceof Array, 'is array');
    const expected = Array(result.length).fill(SearchSuggestions.from({
        title: '',
        artist: '',
    }));
    t.true(WalkUtility
        .walkAndCompare(result, expected, (v1, v2) => typeof v1 === typeof v2), 'has expected shape');
    t.end();
});
//# sourceMappingURL=searchSuggestions.js.map