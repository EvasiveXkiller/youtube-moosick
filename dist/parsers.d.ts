import { CategoryType as Category } from './enums';
import type { MusicShelfRendererContent } from './songresultRaw';
import { PlaylistURL } from './resources/resultTypes/playlistURL';
export declare class parsers {
    static parseSearchResult(context: MusicShelfRendererContent, searchType?: Category): any;
    /**
     * Build the song item
     * @private
     * @param sectionContext
     */
    private static parseSongSearchResult;
    private static parseVideoSearchResult;
    private static parsePlaylistSearchResult;
    static parsePlaylistURL(context: any): PlaylistURL;
    private static playlistURLHeaderParser;
}
