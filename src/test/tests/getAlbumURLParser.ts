import test from 'tape';
import rawGetAlbumURL from '../dummy/rawGetAlbumURL.json';
import type { AlbumURLFullResult } from '../../resources/etc/rawResultTypes/rawGetAlbumURL.js';
import { GetAlbumParser } from '../../parsers/getAlbumParser.js';

test('getAlbumURLParser', (t) => {
	const result = GetAlbumParser.parseAlbumURLPage(rawGetAlbumURL as AlbumURLFullResult);

	t.equals(result.title, 'Eyes wide open', 'title match');
	t.equals(result.tracks.length, 13, 'track count match');
	t.equals(result.thumbnails[0].url, 'https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj', 'thumbnails match');
	t.equals(result.tracks[9].videoId, 'nNTZw8yvMn8', 'random videoId check pass');

	t.end();
});
