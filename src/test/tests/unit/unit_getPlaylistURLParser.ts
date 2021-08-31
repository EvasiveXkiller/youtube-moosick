import test from 'tape';
import rawGetPlaylistURL from '../../dummy/rawGetPlaylistURL.json';
import { GetPlaylistParser } from '../../../parsers/getPlaylistParser.js';
import { WalkUtility } from '../../../resources/utilities/index.js';
import { PlaylistContent, PlaylistHeader, PlaylistURL } from '../../../resources/resultTypes/index.js';
import { Artist, Thumbnails } from '../../../resources/generalTypes/index.js';
import type { PlaylistURLFullResult } from '../../../resources/etc/rawResultTypes/rawGetPlaylistURL.js';

test('getPlaylistURLParser', (t) => {
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
					trackId: String(),
					trackTitle: String(),
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
		'result has expected shape',
	);

	t.end();
});
