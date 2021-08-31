import test from 'tape';
import rawGetArtistURL from '../../dummy/rawGetArtistURL.json';
import { GetArtistParser } from '../../../parsers/getArtistParser.js';
import { WalkUtility } from '../../../resources/utilities/index.js';
import { Albums, ArtistContent, ArtistHeader, ArtistURL, Single, Videos } from '../../../resources/resultTypes/index.js';
import { Artist, Thumbnails } from '../../../resources/generalTypes/index.js';
import type { ArtistURLFullResult } from '../../../resources/etc/rawResultTypes/rawGetArtistURL.js';

test('getArtistURLParser', (t) => {
	const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL as ArtistURLFullResult);

	const expected = [
		ArtistURL.from({
			artistContents: ArtistContent.from({
				albums: [
					Albums.from({
						browseId: String(),
						thumbnails: [
							Thumbnails.from({
								height: Number(),
								url: String(),
								width: Number(),
							}),
						],
						year: Number(),
						URL: String(),
						title: String(),
					}),
				],
				videos: [Videos.from({
					title: String(),
					URL: String(),
					thumbnails: [
						Thumbnails.from({
							height: Number(),
							url: String(),
							width: Number(),
						}),
					],
					author: [
						Artist.from({
							name: String(),
							url: String(),
							browseId: String(),
						}),
					],
					videoId: String(),
					playlistId: String(),
					views: Number(),
				})],
				single: [
					Single.from({
						browseId: String(),
						thumbnails: [
							Thumbnails.from({
								height: Number(),
								url: String(),
								width: Number(),
							}),
						],
						year: Number(),
						URL: String(),
						title: String(),
					}),
				],
			}),
			headers: ArtistHeader.from({
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				totalSubscribers: String(),
				description: String(),
				artistName: String(),
			}),
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
