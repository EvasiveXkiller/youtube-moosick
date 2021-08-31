import test from 'tape';
import { GeneralParser } from '../../../parsers/generalParser.js';
import generalSearchArtist from '../../dummy/general/generalSearchArtist.json';
import { Category } from '../../../enums.js';
import { ArtistExtended } from '../../../resources/generalTypes/artist.js';
import { EitherShape, WalkUtility } from '../../../resources/utilities/walk.utility.js';
import { Thumbnails } from '../../../resources/generalTypes/thumbnails.js';

test('GeneralParserArtist', async (t) => {
	const { result } = GeneralParser.parseSearchResult(generalSearchArtist as any, Category.ARTIST);

	const expected: typeof result = [
		ArtistExtended.from({
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
			subs: new EitherShape([String(), undefined]) as unknown as string,
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected,
			),
		'GeneralParserArtist result has expected shape',
	);

	t.equals(result[0].name, 'TWICE', 'title match');
	t.equals(result[1].browseId, 'UCqJnSdHjKtfsrHi9aI-9d3g', 'browseid count match');

	t.end();
});
