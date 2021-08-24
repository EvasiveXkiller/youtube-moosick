import { PlaylistURL, PlaylistHeader } from '../resources/resultTypes/playlistURL.js';
import lib from '../node_modules/object-scan/lib/index.js';
import { ParsersExtended } from './parsersExtended.js';

/**
 * Used for getPlaylistURL function ONLY
 */
class GetPlaylistParser {
    static parsePlaylistURL(context) {
        // Gets the entire flexColumn, and filter those with empty members
        const flexColumn = lib(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context)
            .filter((item) => item.text?.runs != null);
        const unprocessedHeader = lib(['**.musicDetailHeaderRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context);
        const allThumbnailRenderers = (lib(['**.musicThumbnailRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context));
        const continuation = (lib(['**.nextContinuationData'], {
            rtn: 'value',
            reverse: false,
        })(context));
        const playlistContents = [];
        for (let i = 0; i < Math.floor(flexColumn.length / 2); ++i) {
            const flexColumnPart = flexColumn[i * 2];
            playlistContents.push({
                trackTitle: lib(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumnPart),
                trackId: lib(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumnPart),
                // FIXME: probably the type here is wrong
                artist: ParsersExtended.artistParser(flexColumnPart.text.runs),
                thumbnail: allThumbnailRenderers[i].thumbnail.thumbnails,
            });
        }
        return PlaylistURL.from({
            headers: GetPlaylistParser.playlistURLHeaderParser(unprocessedHeader),
            playlistContents,
            continuation,
        });
    }
    static playlistURLHeaderParser(header) {
        return PlaylistHeader.from({
            playlistName: header[0].title.runs[0].text,
            owner: header[0].subtitle.runs[2].text,
            createdYear: parseInt(header[0].subtitle.runs[4].text, 10),
            thumbnail: header[0].thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails,
            songCount: Number(header[0].secondSubtitle.runs[0].text),
            approxRunTime: header[0].secondSubtitle.runs[2].text,
        });
    }
}

export { GetPlaylistParser };
//# sourceMappingURL=getPlaylistParser.js.map
