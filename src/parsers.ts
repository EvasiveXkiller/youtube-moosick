import { utils } from './utils';
import { categoryType, constantLinks, flexColumnDefinition, videoOffset } from './enums';
import type { MusicResponsiveListItemFlexColumnRenderer } from './songresultRaw';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import objectScan from 'object-scan';
import type { Run } from './resources/resultTypes/sectionList';
import { IllegalTypeError } from './resources/errors/illegalType.error';
import type { SongSearchResult } from './resources/resultTypes/songSearchResult';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult';

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
			throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text as string} cannot be applied to ${categoryType.SONG} function`);
		}

		// eslint-disable-next-line no-warning-comments
		/*
	    FIXME objectScan has no ts typings so error everywhere
	    FIXME shove the stuff into a song object
	     */
		const type = categoryType.SONG;
		const name = objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]) as string;
		const id = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]) as string;
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

		const videoId = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]) as string;
		return VideoSearchResult.from({
			type: categoryType.VIDEO,
			name: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]) as string,
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
			title: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext) as string,
			url: constantLinks.CHANNELLINK + sectionContext.navigationEndpoint.browseEndpoint.browseId!,
			author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
			count: utils.playlistCountExtractor(flexColumn[flexColumnDefinition.SUPPLEMENT] as Run[]),
		});
	}
}
