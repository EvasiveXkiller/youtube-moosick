import { Category, ConstantURLs, flexColumnType } from '../enums.js';
import { Song } from '../resources/generalTypes/song.js';
import { Video } from '../resources/generalTypes/video.js';
import { Playlist } from '../resources/generalTypes/playlist.js';
import { ArtistExtended } from '../resources/generalTypes/artist.js';
import { ParsersExtended } from './parsersExtended.js';
import { Results } from '../resources/resultTypes/results.js';
import { $$, $ } from '../resources/utilities/objectScan.utility.js';
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
import { WatchEndpointParams } from '../resources/rawResultTypes/common.js';

export class GeneralParser {
	// eslint-disable-next-line complexity
	static parseSearchResult(context: GeneralFull, searchType?: Category): Results {
		// prep all the parts
		const albums: AlbumExtended[] = [];
		const videos: Video[] = [];
		const playlists: Playlist[] = [];
		const artist: ArtistExtended[] = [];
		const songs: Song[] = [];
		const continuation = searchType ? ($$('.nextContinuationData')(context) as NextContinuationData[])[0] : undefined;
		const musicShelf = $$('.musicShelfRenderer')(context) as MusicShelfRenderer[];
		for (const shelfItem of musicShelf) {
			const shelfContent = $$('.musicResponsiveListItemRenderer')(shelfItem) as MusicResponsiveListItemRenderer[];
			for (const item of shelfContent) {
				const flexColumnRenderer = $$('.musicResponsiveListItemFlexColumnRenderer')(item) as MusicResponsiveListItemFlexColumnRenderer[];
				const category = searchType ?? (flexColumnRenderer[flexColumnType.ALT].text.runs[0].text).toUpperCase();
				switch (category) {
					// FIXME: probably there is a better way to reconstruct the thing
					case 'SONG': {
						// FIXME: is this behaviour intended? There is another instance below where this occurs
						const display = $$('.musicResponsiveListItemFlexColumnRenderer')(item) as MusicResponsiveListItemFlexColumnRenderer;
						songs.push(Song.from({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[flexColumnType.ALT].text.runs, Category.SONG, Boolean(searchType)),
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							thumbnails: ParsersExtended.thumbnailParser(item),
							playlistId: $('**.playlistId')(display) as string,
							params: WatchEndpointParams.WAEB,
						}));
						break;
					}

					case 'VIDEO': {
						videos.push(Video.from({
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[flexColumnType.ALT].text.runs, Category.VIDEO, Boolean(searchType)),
							thumbnails: ParsersExtended.thumbnailParser(item),
						}));
						break;
					}

					case 'PLAYLIST': {
						playlists.push(Playlist.from({
							name: $('**.text')(flexColumnRenderer) as string,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[flexColumnType.ALT].text.runs, Category.PLAYLIST, Boolean(searchType)),
						}));
						break;
					}

					case 'ARTIST': {
						artist.push(ArtistExtended.from({
							name: flexColumnRenderer[flexColumnType.MAIN].text.runs[flexColumnType.ONLYRUN].text,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							thumbnails: ParsersExtended.thumbnailParser(item),
							url: `${ConstantURLs.CHANNEL_URL}${item.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[flexColumnType.ALT].text.runs, Category.ARTIST, Boolean(searchType)),
						}));
						break;
					}

					case 'ALBUM':
					case 'SINGLE':
					case 'EP': {
						albums.push({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[flexColumnType.ALT].text.runs, Category.ARTIST, Boolean(searchType)),
							name: flexColumnRenderer[flexColumnType.MAIN].text.runs[flexColumnType.ONLYRUN].text,
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
		const display = $$('.musicResponsiveListItemFlexColumnRenderer')(musicResponsiveListItemRenderer) as MusicResponsiveListItemFlexColumnRenderer;
		const name = $('**.text')(display) as string;
		const id = $('**.videoId')(display) as string;
		const url = `https://www.youtube.com/watch?v=${id}`;
		return { name, url, videoId: id };
	}
}
