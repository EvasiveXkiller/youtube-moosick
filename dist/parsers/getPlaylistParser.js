import objectScan from 'object-scan';
import { ParsersExtended } from './parsersExtended.js';
import { PlaylistHeader, PlaylistURL } from '../resources/resultTypes/playlistURL.js';
/**
 * Used for getPlaylistURL function ONLY
 */
export class GetPlaylistParser {
    static parsePlaylistURL(context) {
        // Gets the entire flexColumn, and filter those with empty members
        const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context)
            .filter((item) => item.text?.runs != null);
        const unprocessedHeader = objectScan(['**.musicDetailHeaderRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context);
        const allThumbnailRenderers = (objectScan(['**.musicThumbnailRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context));
        const continuation = (objectScan(['**.nextContinuationData'], {
            rtn: 'value',
            reverse: false,
        })(context));
        const playlistContents = [];
        // FIXME: the for loop here is producing inconsistent results, im returning to the old one and see is there a better solution or not
        for (let i = 0; i < flexColumn.length; i += 2) {
            const flexColumnFirstRow = flexColumn[i];
            playlistContents.push({
                trackTitle: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumnFirstRow),
                trackId: objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumnFirstRow),
                // FIXME: probably the type here is wrong, returning inconsistent results
                artist: ParsersExtended.artistParser(flexColumn[i + 1].text.runs),
                thumbnail: allThumbnailRenderers[Math.floor(i / 2)].thumbnail.thumbnails,
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
            songCount: parseInt(header[0].secondSubtitle.runs[0].text, 10),
            approxRunTime: header[0].secondSubtitle.runs[2].text,
        });
    }
}
//# sourceMappingURL=getPlaylistParser.js.map