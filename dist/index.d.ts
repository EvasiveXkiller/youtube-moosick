import { Category } from './enums.js';
import { SearchSuggestions } from './resources/resultTypes/searchSuggestions.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
import type { AlbumURL } from './resources/resultTypes/albumURL.js';
export declare class MooSick extends AsyncConstructor {
    #private;
    private client;
    private cookies;
    private config;
    private new;
    static new<T = MooSick>(): Promise<T>;
    private parseAndSetCookie;
    /**
     * Get search suggestions from Youtube Music
     * @param query String query text to search
     * @returns An object formatted with utils class
     */
    getSearchSuggestions(query: string): Promise<SearchSuggestions[]>;
    /**
     * Searches for songs using the Youtube Music API
     * @param query String query text to search
     * @param categoryName Type of category to search
     * @param _pageLimit Max pages to obtain
     * @returns An object formatted by parsers.js
     */
    search(query: string, categoryName?: Category, _pageLimit?: number): Promise<unknown>;
    /**
     * Gets the album details
     * @param browseId The Id of the album, without the https nonsense
     */
    getAlbum(browseId: string): Promise<AlbumURL>;
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId The playlist ID, sanitized
     * @param contentLimit Maximum content to get
     * @returns An object formatted by the parser
     */
    getPlaylist(browseId: string, contentLimit?: number): Promise<import("./resources/resultTypes/playlistURL.js").PlaylistURL>;
    /**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns An object formatted by the artist page
     */
    getArtist(browseId: string): Promise<import("./resources/resultTypes/artistURL.js").ArtistURL>;
}
