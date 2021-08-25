import test from 'tape';
import rawGetPlaylistURL from '../dummy/rawGetPlaylistURL.json';
import { GetPlaylistParser } from '../../parsers/getPlaylistParser.js';
import type { PlaylistURLFullResult } from '../../resources/rawResultTypes/rawGetPlaylistURL.js';

test('getAlbumURLParser', (t) => {
	const result = GetPlaylistParser.parsePlaylistURL(rawGetPlaylistURL as unknown as PlaylistURLFullResult);

	console.log(result);

	t.end();
});
