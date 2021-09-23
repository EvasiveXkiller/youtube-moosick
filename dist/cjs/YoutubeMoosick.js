"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeMoosick = void 0;
const axios_1 = __importDefault(require("axios"));
const http_js_1 = __importDefault(require("axios/lib/adapters/http.js"));
const tough_cookie_1 = __importDefault(require("tough-cookie"));
const enums_js_1 = require("./enums.js");
const utils_js_1 = require("./utils.js");
const index_js_1 = require("./resources/errors/index.js");
const url_1 = require("url");
const index_js_2 = require("./parsers/index.js");
const asyncConstructor_js_1 = require("./blocks/asyncConstructor.js");
const index_js_3 = require("./resources/resultTypes/index.js");
const index_js_4 = require("./resources/generalTypes/index.js");
__exportStar(require("./resources/resultTypes/index.js"), exports);
__exportStar(require("./resources/generalTypes/index.js"), exports);
axios_1.default.defaults.adapter = http_js_1.default;
// you found a kitten, please collect it
/**
 * Main class to interact with methods
 *
 * @public
 */
class YoutubeMoosick extends asyncConstructor_js_1.AsyncConstructor {
    client;
    cookies;
    config;
    /**
     * Creates a new instance of the searcher.
     * @returns Adds with the original constructor
     * @remarks Required to construct along with the class.
     * @internal
     * @beta
     */
    async new() {
        this.cookies = new tough_cookie_1.default.CookieJar();
        this.client = axios_1.default.create({
            baseURL: 'https://music.youtube.com/',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.5',
            },
            withCredentials: true,
        });
        this.client.interceptors.request.use((req) => {
            if (!req.baseURL
                || !req.headers) {
                throw new index_js_1.IllegalStateError('Incomplete `req`');
            }
            const cookies = this.cookies.getCookieStringSync(req.baseURL);
            if (cookies && cookies.length > 0) {
                req.headers.Cookie = cookies;
            }
            return req;
        }, async (err) => Promise.reject(err));
        this.client.interceptors.response.use((res) => {
            if (!res.config?.baseURL
                || (typeof res.headers !== 'object')) {
                throw new index_js_1.IllegalStateError('Incomplete `req`');
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { headers } = res;
            if (headers['set-cookie'] == null) {
                return res;
            }
            if (headers['set-cookie'] instanceof Array) {
                headers['set-cookie'].forEach((value) => {
                    this.parseAndSetCookie(value, res.config.baseURL);
                });
            }
            else {
                this.parseAndSetCookie(headers['set-cookie'], res.config.baseURL);
            }
            return res;
        });
        const res = await this.client.get('/');
        const dataString = /(?<=ytcfg\.set\().+(?=\);)/.exec(res.data)?.[0];
        if (dataString == null) {
            throw new index_js_1.IllegalStateError('API initialization returned a nullish value');
        }
        this.config = JSON.parse(dataString);
        return this;
    }
    /**
     * Overrides the constructor
     * @internal
     */
    static async new() {
        void super.new();
        return new YoutubeMoosick().new();
    }
    /**
     * Sets the cookie that is called from the new method
     * @param cookieString - Cookie string
     * @param baseURL - The base URL of that the cookie should be applied
     * @internal
     */
    parseAndSetCookie(cookieString, baseURL) {
        const cookie = tough_cookie_1.default.Cookie.parse(cookieString);
        if (cookie == null) {
            throw new index_js_1.IllegalArgumentError(`"${String(cookieString)}" is not a cookie`, 'cookieString');
        }
        this.cookies.setCookieSync(cookie, baseURL);
    }
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
    async createApiRequest(endpointName, inputVariables = {}, inputQuery = {}) {
        const res = await this.client.post(`youtubei/${this.config.INNERTUBE_API_VERSION}/${endpointName}?${new url_1.URLSearchParams({
            alt: 'json',
            key: this.config.INNERTUBE_API_KEY,
            ...inputQuery,
        })
            .toString()}`, {
            ...inputVariables,
            ...utils_js_1.utils.createApiContext(this.config),
        }, {
            responseType: 'json',
            headers: {
                'x-origin': this.client.defaults.baseURL ?? '',
                'X-Goog-Visitor-Id': this.config.VISITOR_DATA ?? '',
                'X-YouTube-Client-Name': this.config.INNERTUBE_CONTEXT_CLIENT_NAME,
                'X-YouTube-Client-Version': this.config.INNERTUBE_CLIENT_VERSION,
                'X-YouTube-Device': this.config.DEVICE,
                'X-YouTube-Page-CL': this.config.PAGE_CL,
                'X-YouTube-Page-Label': this.config.PAGE_BUILD_LABEL,
                'X-YouTube-Utc-Offset': String(-new Date().getTimezoneOffset()),
                'X-YouTube-Time-Zone': new Intl.DateTimeFormat().resolvedOptions().timeZone,
                ...this.client.defaults.headers,
            },
        });
        if (res.data?.responseContext != null) {
            return res.data;
        }
        throw new index_js_1.IllegalStateError('Youtube Music API request failed (`res.data?.responseContext` was nullish)');
    }
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
    async getSearchSuggestions(query) {
        const res = await this.createApiRequest(enums_js_1.EndPoint.SUGGESTIONS, {
            input: query,
        });
        if (res.contents == null) {
            throw new index_js_1.IllegalStateError('No results found');
        }
        const { contents } = res.contents[0].searchSuggestionsSectionRenderer;
        if (!contents) {
            throw new index_js_1.IllegalStateError('Results array not found');
        }
        return contents
            .map((searchSuggestionRenderer) => index_js_3.SearchSuggestions
            .from({
            title: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[0]?.text ?? '',
            artist: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[1]?.text ?? '',
        }));
    }
    async search(query, searchType) {
        const URI = searchType ? `Eg-KAQwIA${utils_js_1.utils.mapCategoryToURL(searchType)}MABqChAEEAMQCRAFEAo%3D` : '';
        const ctx = await this.createApiRequest(enums_js_1.EndPoint.SEARCH, {
            query,
            params: URI,
        });
        const { result, continuation, } = index_js_2.GeneralParser.parseSearchResult(ctx, searchType);
        const continuableResult = new index_js_4.ContinuableResultFactory(searchType == null ? index_js_4.ContinuableUnsorted : index_js_4.ContinuableResult)
            .create({
            ctx: this,
            getContent: (context) => context.result,
            getContinuation: (context) => context.continuation,
            parser: (context) => index_js_2.GeneralParser.parseSearchResult(context, searchType),
            isDone: (context) => (context?.length ?? 0) === 0,
            continuation,
        })
            .append(result);
        return continuableResult;
    }
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
    async getAlbum(browseId) {
        if (!browseId.startsWith('MPREb')) {
            throw new index_js_1.IllegalArgumentError('Album browse IDs must start with "MPREb"', 'browseId');
        }
        const ctx = await this.createApiRequest(enums_js_1.EndPoint.BROWSE, utils_js_1.utils.buildEndpointContext(browseId, enums_js_1.Category.ALBUM));
        return index_js_2.GetAlbumParser.parseAlbumURLPage(ctx);
    }
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
    async getPlaylist(browseId, contentLimit = 100) {
        if (!browseId.startsWith('VL')
            && !browseId.startsWith('PL')) {
            throw new index_js_1.IllegalArgumentError('Playlist browse IDs must start with "VL" or "PL"', 'browseId');
        }
        if (browseId.startsWith('PL')) {
            browseId = 'VL' + browseId;
        }
        const ctx = await this.createApiRequest(enums_js_1.EndPoint.BROWSE, utils_js_1.utils.buildEndpointContext(browseId, enums_js_1.Category.PLAYLIST));
        const result = index_js_2.GetPlaylistParser.parsePlaylistURL(ctx);
        // Results here are expected
        const continuableResult = index_js_3.ContinuablePlaylistURL.from({
            continuation: result.continuation,
            headers: result.headers,
            playlistContents: new index_js_4.ContinuableResultFactory()
                .create({
                ctx: this,
                getContent: (context) => context.playlistContents,
                getContinuation: (context) => context.continuation,
                parser: index_js_2.GetPlaylistParser.parsePlaylistURL.bind(index_js_2.GetPlaylistParser),
                continuation: result.continuation,
                endpoint: enums_js_1.EndPoint.BROWSE,
            })
                .append(result.playlistContents),
        });
        await continuableResult.playlistContents
            .loadUntil(contentLimit);
        return continuableResult;
    }
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
    async getArtist(browseId) {
        if (!browseId.startsWith('UC')) {
            throw new index_js_1.IllegalArgumentError('Artist browse IDs must start with "UC"', 'browseId');
        }
        const ctx = await this.createApiRequest(enums_js_1.EndPoint.BROWSE, utils_js_1.utils.buildEndpointContext(browseId, enums_js_1.Category.ARTIST));
        return index_js_2.GetArtistParser.parseArtistURLPage(ctx);
    }
}
exports.YoutubeMoosick = YoutubeMoosick;
//# sourceMappingURL=YoutubeMoosick.js.map