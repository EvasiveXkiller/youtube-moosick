import { Category } from './enums.js';
import { AlbumURL, PlaylistURL, ArtistURL, SearchSuggestions } from './resources/resultTypes/index.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
import type { Video } from './resources/generalTypes/video.js';
import type { Song } from './resources/generalTypes/song.js';
import type { Playlist } from './resources/generalTypes/playlist.js';
import type { Artist } from './resources/generalTypes/artist.js';
import type { Unsorted } from './resources/generalTypes/unsorted.js';
import type { Album } from './resources/generalTypes/album.js';
import { ContinuableResult } from './resources/generalTypes/result.js';
/**
 * Main class to interact with methods
 *
 * @public
 */
export declare class MooSick extends AsyncConstructor {
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
     * Creates a new api request to the specified endpoint.
     * @param endpointName - The endpoint name?
     * @param inputVariables - Any variable?
     * @param inputQuery - Any queries?
     * @returns The result of the endpoint reply
     * @remarks Soonner or later destructure functions into individual files
     *
     *	TODO: probably define each api req's input vars & input queries,
     *  then make this func generic so it's type safe
     * @internal
     */
    private createApiRequest;
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
    search(query: string): Promise<ContinuableResult<Unsorted>>;
    search<T extends Category.VIDEO>(query: string, searchType?: T): Promise<ContinuableResult<Video>>;
    search<T extends Category.SONG>(query: string, searchType?: T): Promise<ContinuableResult<Song>>;
    search<T extends Category.PLAYLIST>(query: string, searchType?: T): Promise<ContinuableResult<Playlist>>;
    search<T extends Category.ARTIST>(query: string, searchType?: T): Promise<ContinuableResult<Artist>>;
    search<T extends Category.ALBUM | Category.EP | Category.SINGLE>(query: string, searchType?: T): Promise<ContinuableResult<Album>>;
    search<T extends Category>(query: string, searchType?: T): Promise<ContinuableResult<Video | Song | Playlist | Artist | Album>>;
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