import { $, $$ } from '../resources/utilities/objectScan.utility.js';
import { ParsersExtended } from './parsersExtended.js';
import { Continuation, PlaylistContent, PlaylistHeader, PlaylistURL } from '../resources/resultTypes/playlistURL.js';
import type { Thumbnail } from '../resources/etc/rawResultTypes/rawGetSongURL.js';
import type {
	MusicDetailHeaderRenderer,
	MusicResponsiveListItemFixedColumnRenderer,
	MusicResponsiveListItemRenderer,
	MusicThumbnailRenderer,
} from '../resources/etc/rawResultTypes/rawGetPlaylistURL.js';
import type { MusicResponsiveListItemFlexColumnRenderer } from '../resources/etc/rawResultTypes/common.js';
import { FlexColumnOffset } from '../enums.js';
import { utils } from '../utils.js';

/**
 * Parser to deal with the output generated by the Moosick#getPlaylist
 *
 * @remarks
 * Do not use this class directly, unless for tests purposes
 * @internal
 */
export class GetPlaylistParser {
	public static parsePlaylistURL(context: any): PlaylistURL {
		// Gets all the ListItemRenderers and pushes the first 2 out only
		const flexColumns: MusicResponsiveListItemFlexColumnRenderer[] = [];
		const fixedColumns: MusicResponsiveListItemFixedColumnRenderer[] = [];
		const allResponsiveRenderers = $$('.musicResponsiveListItemRenderer')(context) as MusicResponsiveListItemRenderer[];
		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let i = 0; i < allResponsiveRenderers.length; i++) {
			flexColumns.push(allResponsiveRenderers[i].flexColumns[0].musicResponsiveListItemFlexColumnRenderer);
			flexColumns.push(allResponsiveRenderers[i].flexColumns[1].musicResponsiveListItemFlexColumnRenderer);

			fixedColumns.push(allResponsiveRenderers[i].fixedColumns[0].musicResponsiveListItemFixedColumnRenderer);
		}

		const unprocessedHeader = ($$('.musicDetailHeaderRenderer')(context) as MusicDetailHeaderRenderer[]);
		const allThumbnailRenderers = ($$('.musicThumbnailRenderer')(context)) as MusicThumbnailRenderer[];
		const continuation = ($('.nextContinuationData')(context)) as Continuation;

		const playlistContents: PlaylistContent[] = [];
		for (let i = 0; i < flexColumns.length; i += 2) {
			const flexColumnFirstRow = flexColumns[i];
			playlistContents.push({
				trackTitle: $('.text')(flexColumnFirstRow) as string,
				trackId: $('.videoId')(flexColumnFirstRow) as string,
				artist: ParsersExtended.artistParser(flexColumns[i + 1].text.runs),
				thumbnail: allThumbnailRenderers[Math.floor(i / 2)]?.thumbnail?.thumbnails ?? [],
				duration: utils.hms2ms(fixedColumns[Math.floor(i / 2)].text.runs[0].text),
			});
		}

		return PlaylistURL.from({
			headers: unprocessedHeader.length > 0
				? GetPlaylistParser.playlistURLHeaderParser(unprocessedHeader)
				: undefined,
			playlistContents,
			continuation,
		});
	}

	/**
	 * Parses playlist header data and related information
	 * @param header - The header object from the returned axios request
	 * @internal
	 */
	private static playlistURLHeaderParser(header: MusicDetailHeaderRenderer[]): PlaylistHeader {
		return PlaylistHeader.from({
			playlistName: header[0].title.runs[FlexColumnOffset.ONLYRUN].text,
			owner: header[0].subtitle.runs[2].text,
			createdYear: parseInt(header[0].subtitle.runs[4].text, 10)!,
			thumbnail: header[0].thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails as Thumbnail[],
			songCount: parseInt(header[0].secondSubtitle.runs[FlexColumnOffset.ONLYRUN].text, 10),
			approxRunTime: header[0].secondSubtitle.runs[2].text,
		});
	}
}

