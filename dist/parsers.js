import { utils } from './utils.js';
import { Category, ConstantURLs, SongFlexColumnOffset, VideoOffset } from './enums.js';
import lib from './node_modules/object-scan/lib/index.js';
import { IllegalCategoryError } from './resources/errors/illegalCategory.error.js';
import { VideoSearchResult } from './resources/resultTypes/videoSearchResult.js';
import { PlaylistSearchResult } from './resources/resultTypes/playlistSearchResult.js';
import { $ } from './resources/utilities/objectScan.utility.js';

// TODO: i'm making a lot of assumptions for text being at [0], probably stop
// TODO: objectScan's syntax is verbose as hell, write abstraction functions
class parsers {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        const flexColumn = $('.musicResponsiveListItemRenderer .musicResponsiveListItemFlexColumnRenderer')(context);
        // probably insert a type here
        const type = searchType ?? flexColumn[1].text.runs[1].text;
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
        }
    }
    /**
     * Build the song item
     * @private
     * @param sectionContext
     */
    // Probably the type of sectionContext is wrong have to check on it more
    static parseSongSearchResult(flexColumn) {
        const category = flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text;
        if (category !== Category.SONG) {
            throw new IllegalCategoryError(`Type ${category} cannot be applied to ${Category.SONG} function`);
        }
        // FIXME: shove the stuff into a song object
        Category.SONG;
        lib(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
        lib(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]);
        // const playlistId (have no idea do we need it or not, seems like the auto suggestion feature on normal browsers)
        utils.artistParser(runs);
        utils.albumParser(runs);
        utils.hms2ms(flexColumn[flexColumn.length - 1].text.runs[0].text);
        utils.thumbnailParser(sectionContext);
        // What is this supposed to do?
        // const params = ??
    }
    static parseVideoSearchResult(flexColumn) {
        if (flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text !== Category.VIDEO) {
            throw new IllegalCategoryError(`Type ${flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs[0].text} cannot be applied to ${Category.VIDEO} function`);
        }
        const videoId = lib(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[SongFlexColumnOffset.GENERAL]);
        return VideoSearchResult.from({
            type: Category.VIDEO,
            name: lib(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[SongFlexColumnOffset.GENERAL]),
            videoId,
            url: ConstantURLs.CHANNEL_URL + videoId,
            author: utils.artistParser(flexColumn[SongFlexColumnOffset.SUPPLEMENT].text.runs),
            views: flexColumn[VideoOffset.VIEWS].text.runs[0].text,
            duration: utils.hms2ms(flexColumn[VideoOffset.DURATION].text.runs[0].text),
        });
    }
    static parsePlaylistSearchResult(flexColumn) {
        const { runs } = flexColumn[SongFlexColumnOffset.SUPPLEMENT].text;
        const { text, navigationEndpoint } = runs[0];
        if (text !== Category.PLAYLISTS) {
            throw new IllegalCategoryError(`Category ${text} cannot be applied to ${Category.PLAYLISTS} function`);
        }
        return PlaylistSearchResult.from({
            type: Category.PLAYLISTS,
            playlistId: navigationEndpoint.browseEndpoint.browseId,
            title: lib(['**.text'], { rtn: 'value', reverse: false, abort: true })(sectionContext),
            url: ConstantURLs.CHANNEL_URL + navigationEndpoint.browseEndpoint.browseId,
            author: utils.artistParser(runs),
            count: utils.playlistCountExtractor(runs),
        });
    }
}

export { parsers };
//# sourceMappingURL=parsers.js.map
