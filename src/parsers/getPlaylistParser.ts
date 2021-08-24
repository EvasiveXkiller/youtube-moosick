import { Continuation, PlaylistContent, PlaylistHeader, PlaylistURL } from '../resources/resultTypes/playlistURL';
import objectScan from 'object-scan';
import type { MusicResponsiveListItemFlexColumnRenderer, MusicThumbnailRenderer, Thumbnail } from '../resources/rawResultTypes/rawGetSongURL';
import { utils } from '../utils';
import type { MusicDetailHeaderRenderer } from '../resources/rawResultTypes/rawGetPlaylistURL';

/**
 * Used for getPlaylistURL function ONLY
 */
export class GetPlaylistParser {
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
		})(context) as MusicDetailHeaderRenderer[]);
		const allThumbnailRenderers = (objectScan(['**.musicThumbnailRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context)) as MusicThumbnailRenderer[];
		const continuation = (objectScan(['**.nextContinuationData'], {
			rtn: 'value',
			reverse: false,
		})(context)) as Continuation;

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
			headers: GetPlaylistParser.playlistURLHeaderParser(unprocessedHeader),
			playlistContents,
			continuation,
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

