import { $, $$ } from '../resources/utilities/objectScan.utility.js';
import { AlbumURL, AlbumURLHeader, Track } from '../resources/resultTypes/albumURL.js';
import { ConstantURLs, FlexColumnOffset } from '../enums.js';
import type { Thumbnails } from '../resources/generalTypes/thumbnails.js';
import type { Run, MusicResponsiveListItemFlexColumnRenderer } from '../resources/etc/rawResultTypes/common.js';
import type {
	AlbumURLFullResult,
	MusicDetailHeaderRenderer, MusicResponsiveListItemFixedColumnRenderer, MusicResponsiveListItemRenderer,
} from '../resources/etc/rawResultTypes/rawGetAlbumURL.js';
import { ParsersExtended } from './parsersExtended.js';
import { utils } from '../utils.js';

/**
 * Parser to deal with the output generated by the Moosick#getAlbum
 *
 * @remarks
 * Do not use this class directly, unless for tests purposes
 * @internal
 */
export class GetAlbumParser {
	/**
	 * Parses the object provided by Moosick#getAlbum
	 * @param context - The return results from axios
	 */
	public static parseAlbumURLPage(context: AlbumURLFullResult): AlbumURL {
		// Unprocessed Header
		const unprocessedHeader = ($$('.musicDetailHeaderRenderer')(context) as MusicDetailHeaderRenderer[]);

		// Gets the tracks
		const shelfContent = $$('.musicResponsiveListItemRenderer')(context) as MusicResponsiveListItemRenderer[];
		const tracks: Track[] = [];
		for (const trackUnprocessed of shelfContent) {
			const flexColumn = ($('.flexColumns')(trackUnprocessed) as MusicResponsiveListItemFlexColumnRenderer[]);
			const fixedColumn = $('.fixedColumns')(trackUnprocessed) as MusicResponsiveListItemFixedColumnRenderer[];
			tracks.push(Track.from({
				lengthMs: utils.hms2ms($('.text')(fixedColumn) as string),
				title: $('.text')(flexColumn) as string,
				videoId: $('.videoId')(flexColumn) as string,
				playlistId: $('.playlistId')(flexColumn) as string,
				url: `${ConstantURLs.VIDEOLINK}${$('.videoId')(flexColumn) as string}`,
			}));
		}

		return AlbumURL.from({
			AlbumURLHeader: this.playlistURLHeaderParser(unprocessedHeader),
			tracks,
		});
	}

	private static playlistURLHeaderParser(header: MusicDetailHeaderRenderer[]): AlbumURLHeader {
		const artist = ParsersExtended.artistParser(header[0].subtitle.runs as Run[]);
		return AlbumURLHeader.from({
			title: header[0].title.runs[FlexColumnOffset.ONLYRUN].text,
			description: header[0].description?.runs[FlexColumnOffset.ONLYRUN].text ?? '',
			date: header[0].subtitle.runs[header[0].subtitle.runs.length - 1].text,
			thumbnails: header[0].thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails as Thumbnails[],
			trackCount: parseInt(header[0].secondSubtitle.runs[FlexColumnOffset.ONLYRUN].text, 10),
			totalRuntime: header[0].secondSubtitle.runs[2].text,
			artist,
		});
	}
}
