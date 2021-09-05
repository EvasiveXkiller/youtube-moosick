import { $$, $ } from '../resources/utilities/objectScan.utility.js';
import { Category, ConstantURLs, FlexColumnOffset } from '../enums.js';
import { Song, Video, Playlist, ArtistExtended, AlbumExtended, UnsortedFactory } from '../resources/generalTypes/index.js';
import { ParsersExtended } from './parsersExtended.js';
import { WatchEndpointParams } from '../resources/etc/rawResultTypes/common.js';
/**
 * Parser to deal with the output generated by the Moosick#search
 *
 * @remarks
 * Do not use this class directly, unless for tests purposes
 * @beta
 */
export class GeneralParser {
    // eslint-disable-next-line complexity
    static parseSearchResult(context, searchType) {
        const isUnsorted = searchType == null;
        // prep all the parts
        const albums = [];
        const videos = [];
        const playlists = [];
        const artist = [];
        const songs = [];
        const unsorted = [];
        const continuationMode = $$('.musicShelfContinuation')(context);
        const continuation = searchType || continuationMode ? $$('.nextContinuationData')(context)[0] : undefined;
        const musicShelf = $$('.musicShelfRenderer')(context).length === 0
            ? continuationMode
            : $$('.musicShelfRenderer')(context);
        for (const shelfItem of musicShelf) {
            const shelfContent = $$('.musicResponsiveListItemRenderer')(shelfItem);
            for (const item of shelfContent) {
                const flexColumnRenderer = $$('.musicResponsiveListItemFlexColumnRenderer')(item);
                const category = searchType ?? (flexColumnRenderer[FlexColumnOffset.ALT].text.runs[0].text).toUpperCase();
                switch (category) {
                    case 'SONG': {
                        const display = $('.musicResponsiveListItemFlexColumnRenderer')(item);
                        songs.push(Song.from({
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[FlexColumnOffset.ALT].text.runs, Category.SONG, Boolean(searchType)),
                            ...GeneralParser.musicResponsiveListItemRendererParser(item),
                            thumbnails: ParsersExtended.thumbnailParser(item),
                            playlistId: $('.playlistId')(display),
                            params: WatchEndpointParams.WAEB,
                        }));
                        if (isUnsorted) {
                            unsorted.push(songs[songs.length - 1]);
                        }
                        break;
                    }
                    case 'VIDEO': {
                        videos.push(Video.from({
                            ...GeneralParser.musicResponsiveListItemRendererParser(item),
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[FlexColumnOffset.ALT].text.runs, Category.VIDEO, Boolean(searchType)),
                            thumbnails: ParsersExtended.thumbnailParser(item),
                        }));
                        if (isUnsorted) {
                            unsorted.push(videos[videos.length - 1]);
                        }
                        break;
                    }
                    case 'PLAYLIST': {
                        playlists.push(Playlist.from({
                            name: $('.text')(flexColumnRenderer),
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[FlexColumnOffset.ALT].text.runs, Category.PLAYLIST, Boolean(searchType)),
                        }));
                        if (isUnsorted) {
                            unsorted.push(playlists[playlists.length - 1]);
                        }
                        break;
                    }
                    case 'ARTIST': {
                        artist.push(ArtistExtended.from({
                            name: flexColumnRenderer[FlexColumnOffset.MAIN].text.runs[FlexColumnOffset.ONLYRUN].text,
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
                            thumbnails: ParsersExtended.thumbnailParser(item),
                            url: `${ConstantURLs.CHANNEL_URL}${item.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[FlexColumnOffset.ALT].text.runs, Category.ARTIST, Boolean(searchType)),
                        }));
                        if (isUnsorted) {
                            unsorted.push(artist[artist.length - 1]);
                        }
                        break;
                    }
                    case 'ALBUM':
                    case 'SINGLE':
                    case 'EP': {
                        albums.push(AlbumExtended.from({
                            ...ParsersExtended.flexSecondRowComplexParser(flexColumnRenderer[FlexColumnOffset.ALT].text.runs, Category.ALBUM, Boolean(searchType)),
                            name: flexColumnRenderer[FlexColumnOffset.MAIN].text.runs[FlexColumnOffset.ONLYRUN].text,
                            browseId: item.navigationEndpoint?.browseEndpoint?.browseId ?? '',
                            url: `${ConstantURLs.CHANNEL_URL}${item.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
                            thumbnails: ParsersExtended.thumbnailParser(item),
                        }));
                        if (isUnsorted) {
                            unsorted.push(albums[albums.length - 1]);
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
        switch (searchType) {
            case Category.SONG: {
                return {
                    result: songs,
                    continuation,
                };
            }
            case Category.VIDEO: {
                return {
                    result: videos,
                    continuation,
                };
            }
            case Category.ALBUM: {
                return {
                    result: albums,
                    continuation,
                };
            }
            case Category.ARTIST: {
                return {
                    result: artist,
                    continuation,
                };
            }
            case Category.PLAYLIST: {
                return {
                    result: playlists,
                    continuation,
                };
            }
            case undefined:
            default: {
                const result = new UnsortedFactory().create({
                    albums,
                    videos,
                    playlists,
                    artist,
                    songs,
                });
                result.push(...unsorted);
                return {
                    result,
                    continuation,
                };
            }
        }
    }
    /**
     * Only works for video and song
     */
    static musicResponsiveListItemRendererParser(musicResponsiveListItemRenderer) {
        const display = $('.musicResponsiveListItemFlexColumnRenderer')(musicResponsiveListItemRenderer);
        const name = $('.text')(display);
        const id = $('.videoId')(display);
        const url = `https://www.youtube.com/watch?v=${id}`;
        return { name, url, videoId: id };
    }
}
//# sourceMappingURL=generalParser.js.map