import { Category } from './enums.js';
import { AlbumURL, PlaylistURL, ArtistURL, SearchSuggestions } from './resources/resultTypes/index.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
/**
 * Main class to interact with methods
 *
 * @public
 */
export declare class MooSick extends AsyncConstructor {
    #private;
    private client;
    private cookies;
    private config;
    /**
     * Creates a new instance of the searcher.
     * @returns Adds with the original constructor
     * @remarks Required to construct along with the class.
     * @internal
     * @beta
     */
    private new;
    /**
     * I have no idea what this method is supposed to do
     * @returns something?
     * @internal
     */
    static new<T = MooSick>(): Promise<T>;
    /**
     * Sets the cookie that is called from the new method
     * @param cookieString - Cookie string
     * @param baseURL - The base URL of that the cookie should be applied
     * @internal
     */
    private parseAndSetCookie;
    /**
     * Get search suggestions from Youtube Music
     * @param query - query String query text to search
     * @returns An object formatted with utils class
     *
     * Example
     * ```typescript
     * const suggestions = api.getSearchSuggestions("All We know");
     * console.log(suggestions);
     * ```
     */
    getSearchSuggestions(query: string): Promise<SearchSuggestions[]>;
    /**
     * Searches for songs using the Youtube Music API
     * @param query - String query text to search
     * @param categoryName - Type of category to search
     * @param _pageLimit - Max pages to obtain
     * @returns An object formatted by parsers.js
     *
     * Example
     * ```typescript
     * const api = await MooSick.new();
     *
     * // Get the general search results.
     * const resultsGeneral = await api.search('Never gonna give you up');
     * console.log(resultsGeneral)
     *
     * // Gets a specific category
     * const resultsSong = await api.search('Never gonna give you up', Category.SONG);
     * console.log(resultsSong)
     * ```
     */
    search(query: string, categoryName?: Category, _pageLimit?: number): Promise<unknown>;
    /**
     * Gets the album details
     * @param browseId - The ID of the album, without `https` infront
     * @returns Album URL object
     *
     * Example:
     * ```typescript
     * const api = await MooSick.new();
     * const results = await api.getAlbum('MPREb_REsMMqBZjZB');
     *
     * console.log(results)
     * ```
     *
     */
    getAlbum(browseId: string): Promise<AlbumURL>;
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId - The playlist ID, sanitized
     * @param contentLimit - Maximum content to get
     * @returns An object formatted by the parser
     *
     * Example:
     * ```typescript
     * const api = await MooSick.new();
     * const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');
     *
     * console.log(results);
     * ```
     *
     * @remarks
     * FIXME: in stale/index.js, they reference `.content` instead. is this a conscious change?
     * I think i forgotten to change it, but i dont have faith on this system working,
     * it relies on the old structure which i have modified
     */
    getPlaylist(browseId: string, contentLimit?: number): Promise<PlaylistURL>;
    /**
     * Gets the artist details from Youtube Music
     * @param browseId - The artist ID, sanitized
     * @returns An object formatted by the artist page
     *
     * Example:
     * ```typescript
     * const api = await MooSick.new();
     * const results = await api.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');
     *
     * console.log(results);
     * ```
     */
    getArtist(browseId: string): Promise<ArtistURL>;
}
//# sourceMappingURL=index.d.ts.map