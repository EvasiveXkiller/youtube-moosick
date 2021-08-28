import { $, $$ } from '../resources/utilities/objectScan.utility.js';
import { ParsersExtended } from './parsersExtended.js';
import { Continuation, PlaylistContent, PlaylistHeader, PlaylistURL } from '../resources/resultTypes/playlistURL.js';
import type { MusicResponsiveListItemFlexColumnRenderer, MusicThumbnailRenderer, Thumbnail } from '../resources/rawResultTypes/rawGetSongURL.js';
import type { MusicDetailHeaderRenderer } from '../resources/rawResultTypes/rawGetPlaylistURL.js';
import type { Run } from '../resources/rawResultTypes/common.js';
import { FlexColumnOffset } from '../enums.js';

/**
 * Used for getPlaylistURL function ONLY
 */
export class GetPlaylistParser {
	public static parsePlaylistURL(context: any): PlaylistURL {
		// Gets the entire flexColumn, and filter those with empty members
		const flexColumn = ($$('.musicResponsiveListItemFlexColumnRenderer')(context) as MusicResponsiveListItemFlexColumnRenderer[])
			.filter((item) => item.text?.runs != null);
		const unprocessedHeader = ($$('.musicDetailHeaderRenderer')(context) as MusicDetailHeaderRenderer[]);
		const allThumbnailRenderers = ($$('.musicThumbnailRenderer')(context)) as MusicThumbnailRenderer[];
		const continuation = ($('.nextContinuationData')(context)) as Continuation;

		const playlistContents: PlaylistContent[] = [];
		for (let i = 0; i < flexColumn.length; i += 2) {
			const flexColumnFirstRow = flexColumn[i];
			playlistContents.push({
				trackTitle: $('.text')(flexColumnFirstRow) as string,
				trackId: $('.videoId')(flexColumnFirstRow) as string,
				artist: ParsersExtended.artistParser(flexColumn[i + 1].text.runs as Run[]),
				thumbnail: allThumbnailRenderers[Math.floor(i / 2)].thumbnail.thumbnails,
			});
		}

		return PlaylistURL.from({
			headers: GetPlaylistParser.playlistURLHeaderParser(unprocessedHeader),
			playlistContents,
			continuation,
		});
	}

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

