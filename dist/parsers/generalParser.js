import { Category } from '../enums.js';
import lib from '../node_modules/object-scan/lib/index.js';
import { Song } from '../resources/generalTypes/song.js';
import { Video } from '../resources/generalTypes/video.js';
import { Playlist } from '../resources/generalTypes/playlist.js';
import { ArtistExtended } from '../resources/generalTypes/artist.js';
import { ParsersExtended } from './parsersExtended.js';
import { Results } from '../resources/resultTypes/results.js';
import { $$ } from '../resources/utilities/objectScan.utility.js';

class GeneralParser {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        // prep all the parts
        const albums = [];
        const videos = [];
        const playlists = [];
        const artist = [];
        const songs = [];
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
                const flexColumnRenderer = $$('.musicResponsiveListItemFlexColumnRenderer')(item);
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
                        break;
                    case Category.PLAYLISTS:
                        playlists.push(Playlist.from({
                            name: lib(['**.text'], {
                                rtn: 'value',
                                reverse: false,
                                abort: true,
                            })(flexColumnRenderer),
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.PLAYLISTS, Boolean(searchType)),
                        }));
                        break;
                    case Category.ARTIST:
                        artist.push(ArtistExtended.from({
                            name: flexColumnRenderer[0].text.runs[0].text,
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
                            thumbnails: ParsersExtended.thumbnailParser(item),
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
                        }));
                    // eslint is drunk here
                    // eslint-disable-next-line
                    case Category.ALBUM:
                    case Category.SINGLE:
                    case Category.EP:
                        albums.push({
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[1].text.runs, Category.ARTIST, Boolean(searchType)),
                            name: flexColumnRenderer[0].text.runs[0].text,
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
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
            result: unsorted,
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
