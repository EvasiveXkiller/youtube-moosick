import { Category } from '../enums.js';
import lib from '../node_modules/object-scan/lib/index.js';
import { Video } from '../resources/generalTypes/video.js';
import { Playlist } from '../resources/generalTypes/playlist.js';
import { ArtistExtended } from '../resources/generalTypes/artist.js';
import { ParsersExtended } from './parsersExtended.js';
import { Results } from '../resources/resultTypes/results.js';

// TODO: i'm making a lot of assumptions for text being at [0], probably stop
// TODO: objectScan's syntax is verbose as hell, write abstraction functions
class GeneralParser {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        // prep all the parts
        let albums;
        let videos;
        let playlists;
        let artist;
        let songs;
        const musicShelf = lib(['**.musicShelfRenderer'], {
            rtn: 'value',
            reverse: false,
        })(context);
        for (const shelfItem of musicShelf) {
            const shelfContent = lib(['**.musicResponsiveListItemRenderer'], {
                rtn: 'value',
                reverse: false,
            })(shelfItem);
            for (const item of shelfContent) {
                const flexColumnRenderer = lib(['**.musicResponsiveListItemFlexColumnRenderer'], {
                    rtn: 'parent',
                    reverse: false,
                })(item);
                const category = flexColumnRenderer[0].text.runs[0].text;
                switch (category) {
                    case Category.SONG:
                        songs.push(Song.from({
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.SONG, Boolean(searchType)),
                            ...GeneralParser.musicResponsiveListItemRendererParser(item),
                            thumbnails: ParsersExtended.thumbnailParser(item),
                        }));
                        break;
                    case Category.VIDEO:
                        videos.push(Video.from({
                            ...GeneralParser.musicResponsiveListItemRendererParser(item),
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.VIDEO, Boolean(searchType)),
                            thumbnails: ParsersExtended.thumbnailParser(item),
                        }));
                        GeneralParser.parseVideoSearchResult(item);
                        break;
                    case Category.PLAYLISTS:
                        playlists.push(Playlist.from({
                            name: lib(['**.text'], {
                                rtn: 'value',
                                reverse: false,
                                abort: true,
                            })(flexColumnRenderer),
                            browseId: flexColumnRenderer.navigationEndpoint.browseEndpoint.browseId,
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.PLAYLISTS, Boolean(searchType)),
                        }));
                        break;
                    case Category.ARTIST:
                        artist.push(ArtistExtended.from({
                            name: lib(['**.text'], {
                                rtn: 'value',
                                reverse: false,
                                abort: true,
                            })(flexColumnRenderer),
                            browseId: item.navigationEndpoint.browseEndpoint.browseId,
                            thumbnails: ParsersExtended.thumbnailParser(item),
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
                        }));
                    // eslint is drunk here
                    // eslint-disable-next-line no-fallthrough
                    case Category.ALBUM:
                    case Category.SINGLE:
                    case Category.EP:
                        albums.push({
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
                            name: lib(['**.text'], {
                                rtn: 'value',
                                reverse: false,
                                abort: true,
                            })(flexColumnRenderer),
                            browseId: item.navigationEndpoint.browseEndpoint.browseId,
                        });
                        break;
                }
            }
        }
        const unsorted = {
            albums,
            videos,
            playlists,
            artist, songs,
        };
        return Results.from({
            results: unsorted,
            continuation: undefined,
        });
    }
    /**
     * Only works for video and song
     * @param musicResponsiveListItemRenderer
     */
    static musicResponsiveListItemRendererParser(musicResponsiveListItemRenderer) {
        const display = lib(['**.musicResponsiveListItemFlexColumnRenderer'], {
            rtn: 'value',
            reverse: false,
        })(musicResponsiveListItemRenderer);
        const name = lib(['**.text'], { rtn: 'value', reverse: false, abort: true })(display);
        const id = lib(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(display);
        const url = `https://www.youtube.com/watch?v=${id}`;
        return { name, url, videoId: id };
    }
}

export { GeneralParser };
//# sourceMappingURL=generalParser.js.map
