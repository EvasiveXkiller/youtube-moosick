import { CategoryURIBase64 } from './enums';
import { SearchSuggestions } from './resources/resultTypes/searchSuggestions';
export declare class MooSick {
    private client;
    private cookies;
    private config;
    constructor();
    private parseAndSetCookie;
    private _createApiRequest;
    /**
     * Initialize the client for usage
     * @returns {Promise<unknown>} A ready to use API object
     */
    initialize(): Promise<unknown>;
    /**
     * Get search suggestions from Youtube Music
     * @param query String query text to search
     * @returns {Promise<unknown>} An object formatted with utils class
     */
    getSearchSuggestions(query: string): Promise<SearchSuggestions[]>;
    /**
     * Searches for songs using the Youtube Music API
     * @param query String query text to search
     * @param categoryName Type of category to search
     * @param _pageLimit Max pages to obtain
     * @returns {Promise<unknown>} An object formatted by parsers.js
     */
    search(query: string, categoryName?: CategoryURIBase64, _pageLimit?: number): Promise<unknown>;
    /**
     * Gets the album details
     * @param browseId The Id of the album, without the https nonsense
     */
    getAlbum(browseId: string): Promise<unknown>;
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId The playlist ID, sanitized
     * @param contentLimit Maximum content to get
     * @returns {Promise<unknown>} An object formatted by the parser
     */
    getPlaylist(browseId: string, contentLimit?: number): Promise<unknown>;
    /**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns {Promise<unknown>} An object formatted by the artist page
     */
    getArtist(browseId: string): Promise<unknown>;
}
