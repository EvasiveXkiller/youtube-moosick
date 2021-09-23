import test from 'tape';
import { Category, YoutubeMoosick } from '../../index.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import {
	Album,
	AlbumExtended,
	Artist,
	ArtistExtended,
	Playlist,
	Song,
	Thumbnails,
	Video,
} from '../../resources/generalTypes/index.js';
import {
	Albums,
	AlbumURL,
	AlbumURLHeader,
	ArtistContent,
	ArtistHeader,
	ArtistURL,
	ContinuablePlaylistURL,
	PlaylistContent,
	PlaylistHeader,
	Single,
	Track,
	Videos,
} from '../../resources/resultTypes/index.js';

test('searchUnsorted', async (t) => {
	const api = await YoutubeMoosick.new();
	const result = await api.search('Stay');
	const resultButLink = await api.search('https://www.youtube.com/watch?v=ix1nKNZfr0s');

	t.true(result instanceof Array, 'is array');

	const expected = [
		new EitherShape([
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
			Song.from({
				name: String(),
				artist: [
					Artist.from({
						browseId: String(),
						name: String(),
						url: String(),
					}),
				],
				playlistId: new EitherShape([String(), undefined]) as unknown as string,
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
				artist: [
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
				year: new EitherShape([Number(), undefined]) as unknown as number,
			}),
			Playlist.from({
				name: String(),
				browseId: String(),
				author: [
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
				trackCount: Number(),
			}),
			ArtistExtended.from({
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
				subs: new EitherShape([String(), undefined]) as unknown as string,
			}),
		]),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected as any,
			),
		'result has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				resultButLink,
				expected as any,
			),
		'resultButLink has expected shape',
	);

	t.end();
});

test('searchSong', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.search<Category.SONG>('do what we like', Category.SONG);

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
			playlistId: new EitherShape([String(), undefined]) as unknown as string,
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
				result as Song[],
				expected,
			),
		'result has expected shape',
	);

	const initialLength = result.length;
	const loaded = await result.loadUntil(111);

	t.true(
		loaded.result.length + initialLength >= 111,
		'result loaded correct amount of continuations',
	);

	t.end();
});

test('searchAlbum', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.search('All We Know', Category.ALBUM);

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
				result as Album[],
				expected,
			),
		'result has expected shape',
	);

	t.end();
});

test('searchArtist', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.search('All We Know', Category.ARTIST);

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
				result as ArtistExtended[],
				expected,
			),
		'result has expected shape',
	);

	t.end();
});

test('searchPlaylist', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.search('All We Know', Category.PLAYLIST);

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
				result as Playlist[],
				expected,
			),
		'result has expected shape',
	);

	t.end();
});

test('searchVideo', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.search('All We Know', Category.VIDEO);

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
				result as Video[],
				expected,
			),
		'searchVideo has expected shape',
	);

	t.end();
});

test('api_getAlbumURLParser', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.getAlbum('MPREb_REsMMqBZjZB');

	const expected = [
		AlbumURL.from({
			AlbumURLHeader: AlbumURLHeader.from({
				artist: [Artist.from({
					name: String(),
					url: String(),
					browseId: String(),
				})],
				description: String(),
				title: String(),
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				trackCount: Number(),
				totalRuntime: String(),
				date: String(),
			}),
			tracks: [
				Track.from({
					title: String(),
					videoId: String(),
					playlistId: String(),
					lengthMs: Number(),
					url: String(),
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

test('api_getPlaylistParser', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const resultSmall = await ytms.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');
	const resultLarge = await ytms.getPlaylist('PLVxe6MjYOfpwM3Yf7_GcR03ieesDBn0h7', 200);
	const quad_flexColumn = await ytms.getPlaylist('PLhsz9CILh357zA1yMT-K5T9ZTNEU6Fl6n', 400);

	const expected = [
		ContinuablePlaylistURL.from({
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
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
			] as any,
		}),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				resultSmall,
				expected[0],
			),
		'api_getPlaylistURLParser (small playlist) result has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				resultLarge,
				expected[0],
			),
		'api_getPlaylistURLParser (large playlist) result has expected shape',
	);

	t.true(
		WalkUtility
			.walkAndAssertShape(
				quad_flexColumn,
				expected[0],
			),
		'api_getPlaylistURLParser (quad_flexColumn playlist) result has expected shape',
	);

	t.end();
});

test('api_getArtistURLParser', async (t) => {
	const ytms = await YoutubeMoosick.new();
	const result = await ytms.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

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
		'unit_getArtistURLParser result has expected shape',
	);

	t.end();
});
