import test from 'tape';
import rawGetPlaylistURL from '../../dummy/rawGetPlaylistURL.json';
import { GetPlaylistParser } from '../../../parsers/getPlaylistParser.js';
import { WalkUtility, EitherShape } from '../../../resources/utilities/index.js';
import { PlaylistContent, PlaylistHeader, PlaylistURL } from '../../../resources/resultTypes/index.js';
import { Artist, Thumbnails } from '../../../resources/generalTypes/index.js';
import type { PlaylistURLFullResult } from '../../../resources/etc/rawResultTypes/rawGetPlaylistURL.js';

test('unit_getPlaylistURLParser', (t) => {
	const result = GetPlaylistParser.parsePlaylistURL(rawGetPlaylistURL as unknown as PlaylistURLFullResult);

	const expected = [
		PlaylistURL.from({
			continuation: {
				continuation: String(), clickTrackingParams: String(),
			},
			headers: PlaylistHeader.from({
				playlistName: String(),
				approxRunTime: String(),
				thumbnail: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				songCount: Number(),
				owner: String(),
				createdYear: Number(),
			}),
			playlistContents: [
				PlaylistContent.from({
					artist: [
						Artist.from({
							name: String(),
							url: String(),
							browseId: String(),
						}),
					],
					thumbnail: [
						Thumbnails.from({
							height: Number(),
							url: String(),
							width: Number(),
						}),
					],
					trackId: new EitherShape([String(), undefined]) as unknown as string,
					trackTitle: String(),
					duration: Number(),
				}),
			],
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected[0],
			),
		'unit_getPlaylistURLParser result has expected shape',
	);

	t.equals(result.headers?.owner, 'Jakub Gabryš', 'owner match');
	t.equals(result.playlistContents.length, 34, 'track count match');
	t.equals(result.headers?.thumbnail[1].url, 'https://yt3.ggpht.com/V1rNjDHlr0HGGw1wLTeSMwdttlkz9987hVAWhQoZrU3a8Rqb1T7vjt6HffU6M9HCwe_Y2c1riA=s576', 'thumbnails match');
	t.equals(result.playlistContents[30].trackId, 'njTHReUm3fw', 'random videoId check pass');

	t.end();
});
