import test from 'tape';
import rawGetArtistURL from '../dummy/rawGetArtistURL.json';
import { GetArtistParser } from '../../parsers/getArtistParser.js';
import type { ArtistURLFullResult } from '../../resources/etc/rawResultTypes/rawGetArtistURL.js';

test('getArtistURLParser', (t) => {
	const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL as ArtistURLFullResult);

	// console.log(result);

	t.end();
});
