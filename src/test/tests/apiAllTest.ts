import test from 'tape';
import { MooSick } from '../../index.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Category } from '../../enums.js';
import {
	Album,
	Thumbnails,
	Artist,
	Song,
	Playlist,
	AlbumExtended,
	ArtistExtended, Video,
} from '../../resources/generalTypes/index.js';
import type { Results } from '../../resources/resultTypes/results.js';

// FIXME: What is the best way to do this, i have no idea how to write like tests for this
// test('searchGeneral', async (t) => {
// 	const api = await MooSick.new();
// 	const { result } = await api.search('All We Know') as Results;
//
// 	t.true(result instanceof Array, 'is array');
//
// 	const expected = [
// 		Song.from({
// 			name: String(),
// 			artist: [
// 				Artist.from({
// 					browseId: String(),
// 					name: String(),
// 					url: String(),
// 				}),
// 			],
// 			playlistId: String(),
// 			thumbnails: [
// 				Thumbnails.from({
// 					height: Number(),
// 					url: String(),
// 					width: Number(),
// 				}),
// 			],
// 			videoId: String(),
// 			url: String(),
// 			duration: Number(),
// 			album: [
// 				Album.from({
// 					browseId: String(),
// 					name: String(),
// 					url: String(),
// 				}),
// 			],
// 			params: String(),
// 			type: Category.SONG,
// 		}),
// 		AlbumExtended.from({
// 			name: String(),
// 			url: String(),
// 			browseId: String(),
// 			thumbnails: [
// 				Thumbnails.from({
// 					height: Number(),
// 					url: String(),
// 					width: Number(),
// 				}),
// 			],
// 			artist: [
// 				Artist.from({
// 					name: String(),
// 					url: String(),
// 					browseId: String(),
// 				}),
// 			],
// 			year: new EitherShape([Number(), undefined]) as unknown as number,
// 		}),
// 		Playlist.from({
// 			name: String(),
// 			browseId: String(),
// 			author: [
// 				Artist.from({
// 					name: String(),
// 					url: String(),
// 					browseId: String(),
// 				}),
// 			],
// 			trackCount: Number(),
// 		}),
// 		ArtistExtended.from({
// 			name: String(),
// 			url: String(),
// 			browseId: String(),
// 			thumbnails: [
// 				Thumbnails.from({
// 					height: Number(),
// 					url: String(),
// 					width: Number(),
// 				}),
// 			],
// 			subs: new EitherShape([String(), undefined]) as unknown as string,
// 		}),
// 	];
//
// 	t.true(
// 		WalkUtility
// 			.walkAndAssertShape(
// 				result as Unsorted[],
// 				expected,
// 			),
// 		'result has expected shape',
// 	);
//
// 	t.end();
// });

test('searchSong', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('do what we like', Category.SONG) as Results;

	t.true(result instanceof Array, 'search Song result is array');

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
		'SongSearchresult has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).artist,
				expected[0].artist,
			),
		'SongSearchresult artist has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).thumbnails,
				expected[0].thumbnails,
			),
		'SongSearchresult thumbnails has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Song).album,
				expected[0].album,
			),
		'SongSearchresult album has expected shape',
	);

	t.end();
});

test('searchAlbum', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('All We Know', Category.ALBUM) as Results;

	t.true(result instanceof Array, 'searchAlbumResult is array');

	const expected = [
		AlbumExtended.from({
			name: String(),
			url: String(),
			browseId: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			artist:
				[
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
			year: new EitherShape([Number(), undefined]) as unknown as number,
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result!,
				expected,
			),
		'SearchAlbumResult has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as AlbumExtended).thumbnails,
				expected[0].thumbnails,
			),
		'SearchAlbumResult thumbnails has expected shape',
	);

	// FIXME: I HAVE NO IDEA WHAT TO DO HERE
	// t.true(
	// 	WalkUtility
	// 		.walkAndAssertShape(
	// 			(result![0]! as AlbumExtended).artist,
	// 			expected[0].artist,
	// 		),
	// 	'result.artist has expected shape',
	// );

	t.end();
});

test('searchArtist', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('All We Know', Category.ARTIST) as Results;

	t.true(result instanceof Array, 'result is array');

	const expected = [
		ArtistExtended.from({
			name: String(),
			url: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			browseId: String(),
			subs: new EitherShape([String(), undefined]) as unknown as string,
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
				(result![0]! as AlbumExtended).thumbnails,
				expected[0].thumbnails,
			),
		'result.thumbnails has expected shape',
	);

	t.end();
});

test('searchPlaylist', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('All We Know', Category.PLAYLIST) as Results;

	t.true(result instanceof Array, 'searchPlaylist is array');

	const expected = [
		Playlist.from({
			name: String(),
			trackCount: Number(),
			browseId: String(),
			author: [
				Artist.from({
					name: String(),
					url: String(),
					browseId: String(),
				}),
			],
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result!,
				expected,
			),
		'searchPlaylist has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Playlist).author,
				expected[0].author,
			),
		'searchPlaylist result.author has expected shape',
	);

	t.end();
});

test('searchVideo', async (t) => {
	const ytms = await MooSick.new();
	const { result } = await ytms.search('All We Know', Category.VIDEO) as Results;

	t.true(result instanceof Array, 'searchVideo is array');

	const expected = [
		Video.from({
			name: String(),
			url: String(),
			thumbnails: [
				Thumbnails.from({
					height: Number(),
					url: String(),
					width: Number(),
				}),
			],
			videoId: String(),
			author: [
				Artist.from({
					name: String(),
					url: String(),
					browseId: String(),
				}),
			],
			views: Number(),
			length: Number(),
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result!,
				expected,
			),
		'searchVideo has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				(result![0]! as Video).author,
				expected[0].author,
			),
		'searchVideo result.author has expected shape',
	);

	// t.true(
	// 	WalkUtility
	// 		.walkAndAssertShape(
	// 			(result![0]! as Video).thumbnails,
	// 			expected[0].thumbnails,
	// 		),
	// 	'searchVideo result.thumbnails has expected shape',
	// );

	t.end();
});
