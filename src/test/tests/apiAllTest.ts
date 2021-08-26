import test from 'tape';
import { MooSick } from '../../index.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Category } from '../../enums.js';
import { Song } from '../../resources/generalTypes/song.js';
import type { Results } from '../../resources/resultTypes/results.js';

test('searchSong', async (t) => {
	const api = await MooSick.new();
	const result = await api.search('do what we like', Category.SONG) as Results;

	t.true(result.result instanceof Array, 'is array');

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const expected = Array(result.result.length).fill(Song.from({
		name: '',
		artist: [],
		playlistId: '',
		thumbnails: [],
		videoId: '',
		url: '',
		duration: 0,
		album: [],
		params: '',
		type: Category.SONG,
	}));

	t.true(
		WalkUtility
			.walkAndCompare(
				result,
				expected,
				(v1, v2) => typeof v1 === typeof v2,
			),
		'has expected shape',
	);

	t.end();
});

test('searchGeneral', async (t) => {
	const api = await MooSick.new();
	const result = await api.search('do what we like') as Results;

	t.true(result.result instanceof Array, 'is array');

	// t.true(
	// 	WalkUtility
	// 		.walkAndCompare(
	// 			result,
	// 			expected,
	// 			(v1, v2) => typeof v1 === typeof v2,
	// 		),
	// 	'has expected shape',
	// );

	t.end();
});
