import test from 'tape';
import { MooSick } from '../../index.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Category } from '../../enums.js';
import { Album, Thumbnails, Artist, Song } from '../../resources/generalTypes/index.js';
import type { Results } from '../../resources/resultTypes/results.js';

test('searchSong', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('do what we like', Category.SONG) as Results;

	t.true(result instanceof Array, 'result is array');

	const expected = [
		Song.from({
			name: String(),
			artist: [
				Artist.from({
					browseId: String(),
					name: String(),
					url: String(),
				}),
			],
			playlistId: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			videoId: String(),
			url: String(),
			duration: Number(),
			album: [
				Album.from({
					browseId: String(),
					name: String(),
					url: String(),
				}),
			],
			params: String(),
			type: Category.SONG,
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result!,
				expected,
			),
		'result has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).artist,
				expected[0].artist,
			),
		'result.artist has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).thumbnails,
				expected[0].thumbnails,
			),
		'result.thumbnails has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).album,
				expected[0].album,
			),
		'result.album has expected shape',
	);

	t.end();
});

// test('searchGeneral', async (t) => {
// 	const api = await MooSick.new();
// 	const result = await api.search('do what we like') as Results;
//
// 	t.true(result.result instanceof Array, 'is array');
//
// 	// t.true(
// 	// 	WalkUtility
// 	// 		.walkAndCompare(
// 	// 			result,
// 	// 			expected,
// 	// 			(v1, v2) => typeof v1 === typeof v2,
// 	// 		),
// 	// 	'has expected shape',
// 	// );
//
// 	t.end();
// });
