import test from 'tape';
import { GeneralParser } from '../../../parsers/generalParser.js';
import generalSearchAlbum from '../../dummy/general/generalSearchAlbum.json' assert {type: 'json'};
import { Category } from '../../../enums.js';
import { EitherShape, WalkUtility } from '../../../resources/utilities/walk.utility.js';
import { AlbumExtended } from '../../../resources/generalTypes/album.js';
import { Thumbnails } from '../../../resources/generalTypes/thumbnails.js';
import { Artist } from '../../../resources/generalTypes/artist.js';

test('GeneralParserAlbum', async (t) => {
	const { result } = GeneralParser.parseSearchResult(generalSearchAlbum as any, Category.ALBUM);

	const expected: typeof result = [
		AlbumExtended.from({
			browseId: String(),
			name: String(),
			url: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			artist: new EitherShape([
				[
					Artist.from({
						browseId: String(),
						name: String(),
						url: String(),
					}),
				],
				undefined,
			]) as unknown as Artist[],
			year: new EitherShape([
				Number(),
				undefined,
			]) as unknown as number,
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected,
			),
		'GeneralParserAlbum result has expected shape',
	);

	t.equals(result[1].year, 2020, 'year match');
	t.equals(result[13].url, 'https://music.youtube.com/channel/MPREb_xvWYs98yEcU', 'url match');

	t.end();
});
