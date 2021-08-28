import test from 'tape';
import { MooSick } from '../../index.js';
import { WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Category } from '../../enums.js';
import { Song } from '../../resources/generalTypes/song.js';
import type { Results } from '../../resources/resultTypes/results.js';
import { Artist } from '../../resources/generalTypes/artist.js';
import { Thumbnails } from '../../resources/generalTypes/thumbnails.js';
import { Album } from '../../resources/generalTypes/album.js';

test('searchSong', async (t) => {
	const api = await MooSick.new();
	const { result } = await api.search('do what we like', Category.SONG) as Results;

	t.true(result instanceof Array, 'is array');

	const expected = [
		Song.from({
			name: '',
			artist: [
				Artist.from({
					browseId: '',
					name: '',
					url: '',
				}),
			],
			playlistId: '',
			thumbnails: [
				Thumbnails.from({
					height: 0,
					url: '',
					width: 0,
				}),
				Thumbnails.from({
					height: 0,
					url: '',
					width: 0,
				}),
			],
			videoId: '',
			url: '',
			duration: 0,
			album: [
				Album.from({
					browseId: '',
					name: '',
					url: '',
				}),
			],
			params: '',
			type: Category.SONG,
		}),
	];

	t.true(
		WalkUtility
			.walkAndCompareShape(
				result!,
				expected,
			),
		'Search result has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndCompareShape(
				(result![0]! as Song).artist,
				expected[0].artist,
			),
		'Search result\'s artist has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndCompareShape(
				(result![0]! as Song).thumbnails,
				expected[0].thumbnails,
			),
		'Search result\'s thumbnails has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndCompareShape(
				(result![0]! as Song).album,
				expected[0].album,
			),
		'Search result\'s album has expected shape',
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
