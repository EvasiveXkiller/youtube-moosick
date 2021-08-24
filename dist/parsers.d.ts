import { Category } from './enums';
import type { MusicShelfRendererContent } from './resources/rawResultTypes/rawGetSongURL';
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
}
