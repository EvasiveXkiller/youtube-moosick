import test from 'tape';
import { MooSick } from '../../index.js';
import { EitherShape, WalkUtility } from '../../resources/utilities/walk.utility.js';
import { Category } from '../../enums.js';
import { Album, Thumbnails, Artist, Song, Playlist, AlbumExtended, ArtistExtended, Video, } from '../../resources/generalTypes/index.js';
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
    const result = await ytms.search('do what we like', Category.SONG);
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
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    const loaded = await result.loadUntil();
    console.log(loaded);
    t.end();
});
test('searchAlbum', async (t) => {
    const ytms = await MooSick.new();
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
            artist: [
                Artist.from({
                    name: String(),
                    url: String(),
                    browseId: String(),
                }),
            ],
            year: new EitherShape([Number(), undefined]),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    const loaded = await result.loadUntil();
    console.log(loaded);
    t.end();
});
test('searchArtist', async (t) => {
    const ytms = await MooSick.new();
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
            subs: new EitherShape([String(), undefined]),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    const loaded = await result.loadUntil();
    console.log(loaded);
    t.end();
});
test('searchPlaylist', async (t) => {
    const ytms = await MooSick.new();
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
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'result has expected shape');
    const loaded = await result.loadUntil();
    console.log(loaded);
    t.end();
});
test('searchVideo', async (t) => {
    const ytms = await MooSick.new();
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
    t.true(WalkUtility
        .walkAndAssertShape(result, expected), 'searchVideo has expected shape');
    const loaded = await result.loadUntil();
    console.log(loaded);
    t.end();
});
//# sourceMappingURL=apiAllTest.js.map