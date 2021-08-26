import test from 'tape';
import rawGetArtistURL from '../dummy/rawGetArtistURL.json';
import { GetArtistParser } from '../../parsers/getArtistParser.js';
import type { ArtistURLFullResult } from '../../resources/rawResultTypes/rawGetArtistURL.js';

test('getArtistPlaylistParser', (t) => {
	const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL as ArtistURLFullResult);

	// console.log(result);

	t.end();
});
