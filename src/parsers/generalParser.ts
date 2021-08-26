import objectScan from 'object-scan';
import { Category, ConstantURLs } from '../enums.js';
import { Song } from '../resources/generalTypes/song.js';
import { Video } from '../resources/generalTypes/video.js';
import { Playlist } from '../resources/generalTypes/playlist.js';
import { ArtistExtended } from '../resources/generalTypes/artist.js';
import { ParsersExtended } from './parsersExtended.js';
import { Results } from '../resources/resultTypes/results.js';
import { $$ } from '../resources/utilities/objectScan.utility.js';
import type {
	MusicResponsiveListItemFlexColumnRenderer,
	NextContinuationData,
} from '../resources/rawResultTypes/common.js';
import type { AlbumExtended } from '../resources/generalTypes/album.js';
import type {
	GeneralFull,
	MusicResponsiveListItemRenderer,
	MusicShelfRenderer,
} from '../resources/rawResultTypes/general/generalFull.js';

export class GeneralParser {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	// eslint-disable-next-line complexity
	static parseSearchResult(context: GeneralFull, searchType?: Category): Results {
		// prep all the parts
		const albums: AlbumExtended[] = [];
		const videos: Video[] = [];
		const playlists: Playlist[] = [];
		const artist: ArtistExtended[] = [];
		const songs: Song[] = [];
		const continuation = searchType ? (objectScan(['**.nextContinuationData'], {
			rtn: 'value',
			reverse: false,
		})(context) as NextContinuationData[])[0] : undefined;

		const musicShelf = objectScan(['**.musicShelfRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicShelfRenderer[];
		for (const shelfItem of musicShelf) {
			const shelfContent = objectScan(['**.musicResponsiveListItemRenderer'], {
				rtn: 'value',
				reverse: false,
			})(shelfItem) as MusicResponsiveListItemRenderer[];
			for (const item of shelfContent) {
				const flexColumnRenderer = $$('.musicResponsiveListItemFlexColumnRenderer')(item) as MusicResponsiveListItemFlexColumnRenderer[];
				const category = searchType ?? (flexColumnRenderer[1].text.runs[0].text).toUpperCase();
				switch (category) {
					// FIXME: probably there is a better way to reconstruct the thing
					case 'SONG': {
						const display = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
							rtn: 'value',
							reverse: false,
						})(item) as MusicResponsiveListItemFlexColumnRenderer;
						songs.push(Song.from({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.SONG, Boolean(searchType)),
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							thumbnails: ParsersExtended.thumbnailParser(item),
							playlistId: objectScan(['**.playlistId'], { rtn: 'value', reverse: false, abort: true })(display) as string,
							params: 'what should be do here',
						}));
						break;
					}

					case 'VIDEO': {
						videos.push(Video.from({
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.VIDEO, Boolean(searchType)),
							thumbnails: ParsersExtended.thumbnailParser(item),
						}));
						break;
					}

					case 'PLAYLIST': {
						playlists.push(Playlist.from({
							name: objectScan(['**.text'], {
								rtn: 'value',
								reverse: false,
								abort: true,
							})(flexColumnRenderer) as string,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.PLAYLIST, Boolean(searchType)),
						}));
						break;
					}

					case 'ARTIST': {
						artist.push(ArtistExtended.from({
							name: flexColumnRenderer[0].text.runs[0].text,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							thumbnails: ParsersExtended.thumbnailParser(item),
							url: `${ConstantURLs.CHANNEL_URL}${item.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
						}));
						break;
					}

					case 'ALBUM':
					case 'SINGLE':
					case 'EP': {
						albums.push({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
							name: flexColumnRenderer[0].text.runs[0].text,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							url: `${ConstantURLs.CHANNEL_URL}${item.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
							thumbnails: ParsersExtended.thumbnailParser(item),
						});
						break;
					}

					default: {
						break;
					}
				}
			}
		}

		switch (searchType) {
			case undefined: {
				const unsorted = {
					albums,
					videos,
					playlists,
					artist, songs,
				};

				return Results.from({
					result: unsorted,
				});
			}

			case Category.SONG: {
				return Results.from({
					result: songs,
					continuation: continuation!,
				});
			}

			case Category.VIDEO: {
				return Results.from({
					result: videos,
					continuation: continuation!,
				});
			}

			case Category.ALBUM: {
				return Results.from({
					result: albums,
					continuation: continuation!,
				});
			}

			case Category.ARTIST: {
				return Results.from({
					result: artist,
					continuation: continuation!,
				});
			}

			case Category.PLAYLIST: {
				return Results.from({
					result: playlists,
					continuation: continuation!,
				});
			}

			default: {
				const unsorted = {
					albums,
					videos,
					playlists,
					artist, songs,
				};

				return Results.from({
					result: unsorted,
				});
			}
		}
	}

	/**
	 * Only works for video and song
	 * @param musicResponsiveListItemRenderer
	 */
	static musicResponsiveListItemRendererParser(musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer) {
		const display = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'value',
			reverse: false,
		})(musicResponsiveListItemRenderer) as MusicResponsiveListItemFlexColumnRenderer;
		const name = objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(display) as string;
		const id = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(display) as string;
		const url = `https://www.youtube.com/watch?v=${id}`;
		return { name, url, videoId: id };
	}
}
