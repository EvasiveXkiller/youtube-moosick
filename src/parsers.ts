import { utils } from './utils';
import { categoryType, constantLinks, flexColumnDefinition, playlistOffset, videoOffset } from './enums';
import type { MusicResponsiveListItemFlexColumnRenderer } from './songresultRaw';
import objectScan from 'object-scan';
import type { Run, Thumbnail } from './resources/resultTypes/sectionList';
import { IllegalTypeError } from './resources/errors/illegalType.error';
import type { SongSearchResult } from './resources/resultTypes/songSearchResult';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult';
import { PlaylistContent, PlaylistHeader, PlaylistURL } from './resources/resultTypes/playlistURL';
import type { Thumbnails } from './resources/generalTypes/thumbnails';

export class parsers {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	static parseSearchResult(context: any, searchType?: categoryType): any {
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
			const type = searchType ?? flexColumn[1].musicResponsiveListItemRenderer.text.runs[1].text as categoryType;
			// Is there a way to put this in map?, most likely will be more readable and u can separate into files
			switch (type) {
				case categoryType.SONG: {
					parsers.parseSongSearchResult(sectionContext);
					break;
				}

				case categoryType.VIDEO: {
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
		if (flexColumn[flexColumnDefinition.SUPPLEMENT].text as categoryType !== categoryType.SONG) {
			throw new IllegalTypeError(`Type ${String(flexColumn[flexColumnDefinition.SUPPLEMENT].text)} cannot be applied to ${categoryType.SONG} function`);
		}

		// eslint-disable-next-line no-warning-comments
		/*
	    FIXME objectScan has no ts typings so error everywhere
	    FIXME shove the stuff into a song object
	     */
		const type = categoryType.SONG;
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
		if (flexColumn[flexColumnDefinition.SUPPLEMENT].text as categoryType !== categoryType.VIDEO) {
			throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text as string} cannot be applied to ${categoryType.VIDEO} function`);
		}

		const videoId = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]);
		return VideoSearchResult.from({
			type: categoryType.VIDEO,
			name: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]),
			videoId,
			url: constantLinks.CHANNELLINK + videoId,
			author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
			views: flexColumn[videoOffset.VIEWS].text as string,
			duration: utils.hms2ms(flexColumn[videoOffset.DURATION].text as string),
		});
	}

	private static parsePlaylistSearchResult(sectionContext: MusicResponsiveListItemFlexColumnRenderer[]): PlaylistSearchResult {
		const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'parent',
			reverse: false,
		})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];
		if (flexColumn[flexColumnDefinition.SUPPLEMENT].text as categoryType !== categoryType.PLAYLISTS) {
			throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text as string} cannot be applied to ${categoryType.PLAYLISTS} function`);
		}

		return PlaylistSearchResult.from({
			type: categoryType.PLAYLISTS,
			playlistId: sectionContext.navigationEndpoint.browseEndpoint.browseId as string,
			title: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext),
			url: constantLinks.CHANNELLINK + sectionContext.navigationEndpoint.browseEndpoint.browseId,
			author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
			count: utils.playlistCountExtractor(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
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
		const allThumbnails = (objectScan(['**.musicThumbnailRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context));
		// The for loop increments by 2 so external counter to make it lag behind
		let externalCounter = 0;
		let indiContent: PlaylistContent;
		let playlistContent: PlaylistContent;
		for (let i = 0; i < flexColumn.length; i += 2) {
			playlistContent = {
				trackTitle: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[i]),
				trackId: objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[i]),
				artist: utils.artistParser(flexColumn[i]),
				thumbnail: allThumbnails[externalCounter].thumbnail.thumbnails[0] as Thumbnails[],
			};
			externalCounter++;
		}

		return PlaylistURL.from({
			headers: parsers.playlistURLHeaderParser(unprocessedHeader),
			playlistContent,
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
