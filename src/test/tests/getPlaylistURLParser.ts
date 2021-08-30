import test from 'tape';
import rawGetPlaylistURL from '../dummy/rawGetPlaylistURL.json';
import { GetPlaylistParser } from '../../parsers/getPlaylistParser.js';
import type { PlaylistURLFullResult } from '../../resources/etc/rawResultTypes/rawGetPlaylistURL.js';

test('getPlaylistURLParser', (t) => {
	const result = GetPlaylistParser.parsePlaylistURL(rawGetPlaylistURL as unknown as PlaylistURLFullResult);

	// console.log(result);

	t.end();
});
