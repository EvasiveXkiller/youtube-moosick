import { utils } from './utils';
import {
	Category,
	ConstantURLs,
	SongFlexColumnOffset,
	VideoOffset,
} from './enums';
import type {
	MusicResponsiveListItemFlexColumnRenderer,
	MusicResponsiveListItemRenderer,
	MusicShelfRendererContent,
} from './resources/rawResultTypes/songresultRaw';
import objectScan from 'object-scan';
import { IllegalCategoryError } from './resources/errors';
import type { SongSearchResult } from './resources/resultTypes/songSearchResult';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult';
import { $ } from './resources/utilities/objectScan.utility';

// TODO: i'm making a lot of assumptions for text being at [0], probably stop
// TODO: objectScan's syntax is verbose as hell, write abstraction functions

export class parsers {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	static parseSearchResult(context: MusicShelfRendererContent, searchType?: Category): any {
		const flexColumn = $(
			'.musicResponsiveListItemRenderer .musicResponsiveListItemFlexColumnRenderer',
		)(context) as MusicResponsiveListItemFlexColumnRenderer[];
		// probably insert a type here
		const type = searchType ?? flexColumn[1].text.runs[1].text as Category;
		// Is there a way to put this in map?, most likely will be more readable and u can separate into files
		// hello, you could do something like Handlers[Category.SONG](sectionContext),
		// or typescript signature overloading, where you can have 1 function that takes in many types
		// (however that's just a syntactic wrapper for the switch case below, since you can't
		// have different impl's for a function)
		switch (type) {
			case Category.SONG:
				parsers.parseSongSearchResult(flexColumn);
				break;

			case Category.VIDEO:
				parsers.parseVideoSearchResult(flexColumn);
				break;

			default:
		}
	}

	/**
	 * Build the song item
	 * @private
	 * @param sectionContext
	 */
	// Probably the type of sectionContext is wrong have to check on it more
	private static parseSongSearchResult(flexColumn: MusicResponsiveListItemFlexColumnRenderer[]): SongSearchResult {
		const category = flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text;

		if (category as Category !== Category.SONG) {
			throw new IllegalCategoryError(`Type ${category} cannot be applied to ${Category.SONG} function`);
		}

		// FIXME: shove the stuff into a song object
		const type = Category.SONG;
		const name = objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
		const id = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
		const url = `https://www.youtube.com/watch?v=${id}`;
		// const playlistId (have no idea do we need it or not, seems like the auto suggestion feature on normal browsers)
		const artist = utils.artistParser(runs);
		const album = utils.albumParser(runs);
		const duration = utils.hms2ms(flexColumn[flexColumn.length - 1].text.runs[0].text);
		const thumbnail = utils.thumbnailParser(sectionContext);
		// What is this supposed to do?
		// const params = ??
	}

	private static parseVideoSearchResult(flexColumn: MusicResponsiveListItemFlexColumnRenderer[]): VideoSearchResult {
		if (flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text !== Category.VIDEO) {
			throw new IllegalCategoryError(
				`Type ${
					flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text
				} cannot be applied to ${
					Category.VIDEO
				} function`);
		}

		const videoId = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[SongFlexColumnOffset.GENERAL]) as string;
		return VideoSearchResult.from({
			type: Category.VIDEO,
			name: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[SongFlexColumnOffset.GENERAL]) as string,
			videoId,
			url: ConstantURLs.CHANNEL_URL + videoId,
			author: utils.artistParser(flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs),
			views: flexColumn[VideoOffset.VIEWS].text.runs[0].text,
			duration: utils.hms2ms(flexColumn[VideoOffset.DURATION].text.runs[0].text),
		});
	}

	private static parsePlaylistSearchResult(flexColumn: MusicResponsiveListItemFlexColumnRenderer[]): PlaylistSearchResult {
		const { runs } = flexColumn[SongFlexColumnOffset.SUPPLEMENT].text;
		const { text, navigationEndpoint } = runs[0];

		if (text !== Category.PLAYLISTS) {
			throw new IllegalCategoryError(
				`Category ${
					text
				} cannot be applied to ${
					Category.PLAYLISTS
				} function`);
		}

		return PlaylistSearchResult.from({
			type: Category.PLAYLISTS,
			playlistId: navigationEndpoint.browseEndpoint.browseId,
			title: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext) as string,
			url: ConstantURLs.CHANNEL_URL + navigationEndpoint.browseEndpoint.browseId,
			author: utils.artistParser(runs),
			count: utils.playlistCountExtractor(runs),
		});
	}
}
