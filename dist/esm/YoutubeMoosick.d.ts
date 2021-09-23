import { Category } from './enums.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
import { AlbumURL, ArtistURL, SearchSuggestions, ContinuablePlaylistURL } from './resources/resultTypes/index.js';
import { Song, Playlist, Video, Artist, ArtistExtended, ContinuableUnsorted, Album, ContinuableResult } from './resources/generalTypes/index.js';
export * from './resources/resultTypes/index.js';
export * from './resources/generalTypes/index.js';
/**
 * Main class to interact with methods
 *
 * @public
 */
export declare class YoutubeMoosick extends AsyncConstructor {
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
     * Overrides the constructor
     * @internal
     */
    static new<T = YoutubeMoosick>(): Promise<T>;
    /**
     * Sets the cookie that is called from the new method
     * @param cookieString - Cookie string
     * @param baseURL - The base URL of that the cookie should be applied
     * @internal
     */
    private parseAndSetCookie;
    /**
     * Creates a new api request to the specified endpoint.
     * @param endpointName - The endpoint name?
     * @param inputVariables - Any variable?
     * @param inputQuery - Any queries?
     * @returns The result of the endpoint reply
     * @remarks Soonner or later destructure functions into individual files
     *
     * @internal
     */
    private createApiRequest;
    /**
     * Get search suggestions from Youtube Music
     * @param query - String query text to search
     * @returns An object formatted by parsers.js
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
     * @param searchType - Type of category to search
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
    search<T extends undefined>(query: string, searchType?: T): Promise<ContinuableUnsorted>;
    search<T extends Category.VIDEO>(query: string, searchType?: T): Promise<ContinuableResult<Video>>;
    search<T extends Category.SONG>(query: string, searchType?: T): Promise<ContinuableResult<Song>>;
    search<T extends Category.PLAYLIST>(query: string, searchType?: T): Promise<ContinuableResult<Playlist>>;
    search<T extends Category.ARTIST>(query: string, searchType?: T): Promise<ContinuableResult<ArtistExtended>>;
    search<T extends Category.ALBUM | Category.EP | Category.SINGLE>(query: string, searchType?: T): Promise<ContinuableResult<Album>>;
    search<T extends Category>(query: string, searchType?: T): Promise<ContinuableResult<Video | Song | Playlist | Artist | Album>>;
    /**
     * Gets the album details
     * @param browseId - The album Id only, without `https://....`
     * @returns AlbumURL object
     *
     * Example:
     * ```typescript
     * const api = await MooSick.new();
     * const results = await api.getAlbum('MPREb_REsMMqBZjZB');
     *
     * console.log(results)
     * ```
     */
    getAlbum(browseId: string): Promise<AlbumURL>;
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId - The playlist `browseId` only, without `https://....`
     * @param contentLimit - Maximum amount of contents to get, defaults to 100
     * @returns PlaylistURL object
     *
     * Example:
     * ```typescript
     * const api = await MooSick.new();
     * const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');
     *
     * console.log(results);
     * ```
     */
    getPlaylist(browseId: string, contentLimit?: number): Promise<ContinuablePlaylistURL>;
    /**
     * Gets the artist details from Youtube Music
     * @param browseId - The artist `browseId` only, without `https://....`
     * @returns ArtistURL object
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
//# sourceMappingURL=YoutubeMoosick.d.ts.map