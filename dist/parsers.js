import { utils } from './utils.js';
import { categoryType, constantLinks, flexColumnDefinition, videoOffset } from './enums.js';
import objectScan from 'object-scan';
import { IllegalTypeError } from './resources/errors/illegalType.error.js';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult.js';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult.js';
import { PlaylistURL, PlaylistHeader } from './resources/resultTypes/playlistURL.js';

class parsers {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        // Go to the part which i have no idea
        /**
         * Section list is an array of musiclistrenderer
         */
        let sectionList = utils.fv(context, 'musicResponsiveListItemRenderer');
        if (!Array.isArray(sectionList)) {
            sectionList = [sectionList];
        }
        sectionList.forEach((sectionContext) => {
            const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
                rtn: 'parent',
                reverse: false,
            })(sectionContext);
            // probably insert a type here
            const type = searchType ?? flexColumn[1].musicResponsiveListItemRenderer.text.runs[1].text;
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
    static parseSongSearchResult(sectionContext) {
        const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'parent',
            reverse: false,
        })(sectionContext);
        if (flexColumn[flexColumnDefinition.SUPPLEMENT].text !== categoryType.SONG) {
            throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text} cannot be applied to ${categoryType.SONG} function`);
        }
        // eslint-disable-next-line no-warning-comments
        /*
        FIXME objectScan has no ts typings so error everywhere
        FIXME shove the stuff into a song object
         */
        categoryType.SONG;
        objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
        objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
        // const playlistId (have no idea do we need it or not, seems like the auto suggestion feature on normal browsers)
        utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT]);
        utils.albumParser(flexColumn[flexColumnDefinition.SUPPLEMENT]);
        utils.hms2ms((flexColumn[flexColumn.length - 1].text));
        utils.thumbnailParser(sectionContext);
        // What is this supposed to do?
        // const params = ??
    }
    static parseVideoSearchResult(sectionContext) {
        const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'parent',
            reverse: false,
        })(sectionContext);
        if (flexColumn[flexColumnDefinition.SUPPLEMENT].text !== categoryType.VIDEO) {
            throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text} cannot be applied to ${categoryType.VIDEO} function`);
        }
        const videoId = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]);
        return VideoSearchResult.from({
            type: categoryType.VIDEO,
            name: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[flexColumnDefinition.GENERAL]),
            videoId,
            url: constantLinks.CHANNELLINK + videoId,
            author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT]),
            views: flexColumn[videoOffset.VIEWS].text,
            duration: utils.hms2ms(flexColumn[videoOffset.DURATION].text),
        });
    }
    static parsePlaylistSearchResult(sectionContext) {
        const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'parent',
            reverse: false,
        })(sectionContext);
        if (flexColumn[flexColumnDefinition.SUPPLEMENT].text !== categoryType.PLAYLISTS) {
            throw new IllegalTypeError(`Type ${flexColumn[flexColumnDefinition.SUPPLEMENT].text} cannot be applied to ${categoryType.PLAYLISTS} function`);
        }
        return PlaylistSearchResult.from({
            type: categoryType.PLAYLISTS,
            playlistId: sectionContext.navigationEndpoint.browseEndpoint.browseId,
            title: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext),
            url: constantLinks.CHANNELLINK + sectionContext.navigationEndpoint.browseEndpoint.browseId,
            author: utils.artistParser(flexColumn[flexColumnDefinition.SUPPLEMENT]),
            count: utils.playlistCountExtractor(flexColumn[flexColumnDefinition.SUPPLEMENT]),
        });
    }
    static parsePlaylistURL(context) {
        // Gets the entire flexColumn, and filter those with empty members
        const flexColumn = (objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context)).filter((item) => item.text.runs !== undefined);
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
        let playlistContent;
        for (let i = 0; i < flexColumn.length; i += 2) {
            playlistContent = {
                trackTitle: objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[i]),
                trackId: objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[i]),
                artist: utils.artistParser(flexColumn[i]),
                thumbnail: allThumbnails[externalCounter].thumbnail.thumbnails[0],
            };
            externalCounter++;
        }
        return PlaylistURL.from({
            headers: parsers.playlistURLHeaderParser(unprocessedHeader),
            playlistContent,
        });
    }
    static playlistURLHeaderParser(header) {
        return PlaylistHeader.from({
            playlistName: header[0].title.runs[0].text,
            owner: header[0].subtitle.runs[2].text,
            createdYear: parseInt(header[0].subtitle.runs[4].text, 10),
            thumbnail: header[0].thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnail,
            songCount: header[0].secondSubtitle.runs[0].text,
            approxRunTime: header[0].secondSubtitle.runs[2].text,
        });
    }
}

export { parsers };
//# sourceMappingURL=parsers.js.map
