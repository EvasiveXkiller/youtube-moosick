import { utils } from './utils';
import { CategoryType as Category, ConstantURLs, flexColumnDefinition, PlaylistOffset, VideoOffset } from './enums';
import type { EndpointlessRun, MusicResponsiveListItemFlexColumnRenderer, MusicThumbnailRenderer, NavigationEndpoint, Run, Thumbnail } from './songresultRaw';
import objectScan from 'object-scan';
import { IllegalTypeError as IllegalCategoryError } from './resources/errors/illegalCategory.error';
import type { SongSearchResult } from './resources/resultTypes/songSearchResult';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult';
import { PlaylistContent, PlaylistHeader, PlaylistURL } from './resources/resultTypes/playlistURL';
import type { Thumbnails } from './resources/generalTypes/thumbnails';

export class parsers {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	static parseSearchResult(context: any, searchType?: Category): any {
		// Go to the part which i have no idea
		/**
         * Section list is an array of musiclistrenderer
         */
		let sectionList = utils.fv(context, 'musicResponsiveListItemRenderer');

		if (!Array.isArray(sectionList)) {
			sectionList = [sectionList];
		}

		sectionList.forEach((sectionContext: MusicListRenderer) => {
			const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
				rtn: 'parent',
				reverse: false,
			})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];
			// probably insert a type here
			const type = searchType ?? flexColumn[1].musicResponsiveListItemRenderer.text.runs[1].text as Category;
			// Is there a way to put this in map?, most likely will be more readable and u can separate into files
			switch (type) {
				case Category.SONG: {
					parsers.parseSongSearchResult(sectionContext);
					break;
				}

				case Category.VIDEO: {
					parsers.parseVideoSearchResult(sectionContext);
					break;
				}
			}
		});
	}

	/**
	 * Build the song item
	 * @private
	 * @param sectionContext
	 */
	// Probably the type of sectionContext is wrong have to check on it more
	private static parseSongSearchResult(sectionContext: MusicResponsiveListItemFlexColumnRenderer[]): SongSearchResult {
		const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'parent',
			reverse: false,
		})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];
		if (flexColumn[flexColumnDefinition.SUPPLEMENT].text as Category !== Category.SONG) {
			throw new IllegalCategoryError(`Type ${String(flexColumn[flexColumnDefinition.SUPPLEMENT].text)} cannot be applied to ${Category.SONG} function`);
		}

		// eslint-disable-next-line no-warning-comments
		/*
	    FIXME objectScan has no ts typings so error everywhere
	    FIXME shove the stuff into a song object
	     */
		const type = Category.SONG;
		const name = objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
		const id = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
		const url = `https://www.youtube.com/watch?v=${id}`;
		// const playlistId (have no idea do we need it or not, seems like the auto suggestion feature on normal browsers)
		const artist = utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]);
		const album = utils.albumParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]);
		const duration = utils.hms2ms((flexColumn[flexColumn.length - 1].text) as string);
		const thumbnail = utils.thumbnailParser(sectionContext);
		// What is this supposed to do?
		// const params = ??
	}

	private static parseVideoSearchResult(sectionContext: MusicResponsiveListItemFlexColumnRenderer[]): VideoSearchResult {
		const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'parent',
			reverse: false,
		})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];
		if (flexColumn[flexColumnDefinition.SUPPLEMENT].text as Category !== Category.VIDEO) {
			throw new IllegalCategoryError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text as string} cannot be applied to ${Category.VIDEO} function`);
		}

		const videoId = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]);
		return VideoSearchResult.from({
			type: Category.VIDEO,
			name: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]),
			videoId,
			url: ConstantURLs.CHANNEL_URL + videoId,
			author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
			views: flexColumn[VideoOffset.VIEWS].text as string,
			duration: utils.hms2ms(flexColumn[VideoOffset.DURATION].text as string),
		});
	}

	private static parsePlaylistSearchResult(sectionContext: MusicResponsiveListItemFlexColumnRenderer[]): PlaylistSearchResult {
		const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'parent',
			reverse: false,
		})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];

		const text: Category = objectScan(['**.text'], { rtn: 'value' })(flexColumn[flexColumnDefinition.SUPPLEMENT].text.runs);

		if (text !== Category.PLAYLISTS) {
			throw new IllegalCategoryError(
				`Category ${
					text
				} cannot be applied to ${
					Category.PLAYLISTS
				} function`);
		}

		const navigationEndpoint = objectScan(['**.navigationEndpoint'], { rtn: 'value' })(sectionContext) as NavigationEndpoint;

		return PlaylistSearchResult.from({
			type: Category.PLAYLISTS,
			playlistId: navigationEndpoint.browseEndpoint.browseId,
			title: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext),
			url: ConstantURLs.CHANNEL_URL + navigationEndpoint.browseEndpoint.browseId,
			author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT].text.runs),
			count: utils.playlistCountExtractor(flexColumn[flexColumnDefinition.SUPPLEMENT].text.runs),
		});
	}

	public static parsePlaylistURL(context: any): PlaylistURL {
		// Gets the entire flexColumn, and filter those with empty members
		const flexColumn = (objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicResponsiveListItemFlexColumnRenderer[])
			.filter((item) => item.text?.runs != null);
		const unprocessedHeader = (objectScan(['**.musicDetailHeaderRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context));
		const allThumbnailRenderers = (objectScan(['**.musicThumbnailRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context)) as MusicThumbnailRenderer[];

		const playlistContents: PlaylistContent[] = [];

		for (let i = 0; i < Math.floor(flexColumn.length / 2); ++i) {
			const flexColumnPart = flexColumn[i * 2];

			playlistContents.push({
				trackTitle: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumnPart),
				trackId: objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumnPart),
				artist: utils.artistParser(flexColumnPart.text.runs),
				thumbnail: allThumbnailRenderers[i].thumbnail.thumbnails,
			});
		}

		return PlaylistURL.from({
			headers: parsers.playlistURLHeaderParser(unprocessedHeader),
			playlistContents,
		});
	}

	private static playlistURLHeaderParser(header: any[]): PlaylistHeader {
		return PlaylistHeader.from({
			playlistName: header[0].title.runs[0].text as string,
			owner: header[0].subtitle.runs[2].text as string,
			createdYear: parseInt(header[0].subtitle.runs[4].text, 10)!,
			thumbnail: header[0].thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnail as Thumbnail[],
			songCount: header[0].secondSubtitle.runs[0].text as number,
			approxRunTime: header[0].secondSubtitle.runs[2].text as string,
		});
	}
}
