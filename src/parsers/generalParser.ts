import { Category, CategoryURIBase64 } from '../enums';
import objectScan from 'object-scan';
import { Song } from '../resources/generalTypes/song';
import type {
	GeneralFull,
	MusicResponsiveListItemFlexColumnRenderer,
	MusicResponsiveListItemRenderer,
	MusicShelfRenderer,
} from '../resources/rawResultTypes/general/generalFull';
import type { AlbumExtended } from '../resources/generalTypes/album';
import { Video } from '../resources/generalTypes/video';
import { Playlist } from '../resources/generalTypes/playlist';
import { ArtistExtended } from '../resources/generalTypes/artist';
import { ParsersExtended } from './parsersExtended';
import { Results } from '../resources/resultTypes/results';
import { $$ } from '../resources/utilities/objectScan.utility';
import type { NextContinuationData } from '../resources/rawResultTypes/common';

export class GeneralParser {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	static parseSearchResult(context: GeneralFull, searchType?: CategoryURIBase64): Results {
		// prep all the parts
		const albums: AlbumExtended[] = [];
		const videos: Video[] = [];
		const playlists: Playlist[] = [];
		const artist: ArtistExtended[] = [];
		const songs: Song[] = [];
		// FIXME : tf
		const continuation = searchType ? (objectScan(['**.nextContinuationData'], { rtn: 'value', reverse: false })(context) as NextContinuationData[])[0] : undefined;

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
				const category = flexColumnRenderer[0].text.runs[0].text as Category;
				switch (category) {
					// FIXME: probably there is a better way to reconstruct the thing
					case Category.SONG:
						songs.push(Song.from({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.SONG, Boolean(searchType)),
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							thumbnails: ParsersExtended.thumbnailParser(item),
						}));
						break;
					case Category.VIDEO:
						videos.push(Video.from({
							...GeneralParser.musicResponsiveListItemRendererParser(item),
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.VIDEO, Boolean(searchType)),
							thumbnails: ParsersExtended.thumbnailParser(item),
						}));
						break;
					case Category.PLAYLISTS:
						playlists.push(Playlist.from({
							name: objectScan(['**.text'], {
								rtn: 'value',
								reverse: false,
								abort: true,
							})(flexColumnRenderer) as string,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.PLAYLISTS, Boolean(searchType)),
						}));
						break;
					case Category.ARTIST:
						artist.push(ArtistExtended.from({
							name: flexColumnRenderer[0].text.runs[0].text,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
							thumbnails: ParsersExtended.thumbnailParser(item),
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
						}));
					// eslint is drunk here
					// eslint-disable-next-line
					case Category.ALBUM:
					case Category.SINGLE:
					case Category.EP:
						albums.push({
							...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
							name: flexColumnRenderer[0].text.runs[0].text,
							browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
						});
						break;
					default:
				}
			}
		}

		switch (searchType) {
			case undefined: { throw new Error('Not implemented yet: undefined case'); }
			case CategoryURIBase64.SONG: {
				return Results.from({
					result: songs,
					continuation: continuation!,
				});
			}

			case CategoryURIBase64.VIDEO: {
				return Results.from({
					result: videos,
					continuation: continuation!,
				});
			}

			case CategoryURIBase64.ALBUM: {
				return Results.from({
					result: albums,
					continuation: continuation!,
				});
			}

			case CategoryURIBase64.ARTIST: {
				return Results.from({
					result: artist,
					continuation: continuation!,
				});
			}

			case CategoryURIBase64.PLAYLISTS: {
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
				});}
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
