import test from 'tape';
import rawGetAlbumURL from '../dummy/rawGetAlbumURL.json';
import type { AlbumURLFullResult } from '../../resources/rawResultTypes/rawGetAlbumURL.js';
import { GetAlbumParser } from '../../parsers/getAlbumParser.js';

test('getAlbumURLParser', (t) => {
	const result = GetAlbumParser.parseAlbumURLPage(rawGetAlbumURL as AlbumURLFullResult);

	console.log(result);

	t.end();
});
