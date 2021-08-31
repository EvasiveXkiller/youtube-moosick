import test from 'tape';
import rawGetAlbumURL from '../../dummy/rawGetAlbumURL.json';
import type { AlbumURLFullResult } from '../../../resources/etc/rawResultTypes/rawGetAlbumURL.js';
import { GetAlbumParser } from '../../../parsers/getAlbumParser.js';
import { AlbumURL, ReleaseDate, Track } from '../../../resources/resultTypes/index.js';
import { ArtistExtended, Thumbnails } from '../../../resources/generalTypes/index.js';
import { EitherShape, WalkUtility } from '../../../resources/utilities/index.js';

test('getAlbumURLParser', (t) => {
	const result = GetAlbumParser.parseAlbumURLPage(rawGetAlbumURL as AlbumURLFullResult);

	const expected = [
		AlbumURL.from({
			title: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			artist: [ArtistExtended.from({
				name: String(),
				url: String(),
				browseId: String(),
				subs: new EitherShape([String(), undefined]) as unknown as string,
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
			})],
			duration: Number(),
			tracks: [
				Track.from({
					title: String(),
					videoId: String(),
					lengthMs: Number(),
					index: Number(),
				}),
			],
			date: ReleaseDate.from({
				day: Number(),
				year: Number(),
				month: Number(),
			}),
			trackCount: Number(),
			description: String(),
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected[0],
			),
		'result has expected shape',
	);

	t.equals(result.title, 'Eyes wide open', 'title match');
	t.equals(result.tracks.length, 13, 'track count match');
	t.equals(result.thumbnails[0].url, 'https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj', 'thumbnails match');
	t.equals(result.tracks[9].videoId, 'nNTZw8yvMn8', 'random videoId check pass');

	t.end();
});
