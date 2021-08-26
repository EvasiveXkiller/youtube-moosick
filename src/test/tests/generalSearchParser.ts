import test from 'tape';
import { GeneralParser } from '../../parsers/generalParser.js';
import generalSearchFull from '../dummy/general/generalSearchFull.json';

test('GeneralParser', async (t) => {
	const results = GeneralParser.parseSearchResult(generalSearchFull as any);

	console.log(results);

	t.end();
});
