import axios from './node_modules/axios/index.js';
import http_1 from './node_modules/axios/lib/adapters/http.js';
import './node_modules/tough-cookie/lib/cookie.js';
import _ from './node_modules/lodash/lodash.js';
import { EndPoint, Category } from './enums.js';
import { utils } from './utils.js';
import { IllegalArgumentError } from './resources/errors/illegalArgument.error.js';
import { IllegalStateError } from './resources/errors/illegalState.error.js';
import { URLSearchParams } from 'url';
import { GeneralParser } from './parsers/generalParser.js';
import { GetPlaylistParser } from './parsers/getPlaylistParser.js';
import { GetArtistParser } from './parsers/getArtistParser.js';
import { SearchSuggestions } from './resources/resultTypes/searchSuggestions.js';
import { GetAlbumParser } from './parsers/getAlbumParser.js';
import { __exports as cookie } from './_virtual/cookie.js_commonjs-exports';

axios.defaults.adapter = http_1;
// ASYNC AWAIT SUPPORT EVERYWHERE, CALLBACK HELL IT IS NOW
class MooSick {
    client;
    cookies;
    // FIXME: where is this coming from?
    // @REPLY came from `initialize` func filter foreach function
    // probably this set to any since the object that comes out is huge
    config;
    constructor() {
        this.cookies = new cookie.CookieJar();
        this.client = axios.create({
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
                throw new IllegalStateError('Incomplete `req`');
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
                throw new IllegalStateError('Incomplete `req`');
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
    }
    parseAndSetCookie(cookieString, baseURL) {
        const cookie$1 = cookie.Cookie.parse(cookieString);
        if (cookie$1 == null) {
            throw new IllegalArgumentError(`"${String(cookieString)}" is not a cookie`, 'cookieString');
        }
        this.cookies.setCookieSync(cookie$1, baseURL);
    }
    // Soonner or later destructure functions into individual files
    // TODO: probably define each api req's input vars & input queries,
    // then make this func generic so it's type safe
    async _createApiRequest(endpointName, inputVariables = {}, inputQuery = {}) {
        const res = await this.client.post(`youtubei/${this.config.INNERTUBE_API_VERSION}/${endpointName}?${
        // eslint is drunk
        // eslint-disable-next-line
        new URLSearchParams({
            alt: 'json',
            key: this.config.INNERTUBE_API_KEY,
            ...inputQuery,
        })
            .toString()}`, {
            ...inputVariables,
            ...utils.createApiContext(this.config),
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (res.data?.responseContext != null) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return res.data;
        }
        return null;
    }
    /**
     * Initialize the client for usage
     * @returns {Promise<unknown>} A ready to use API object
     */
    async initialize() {
        return new Promise(async (resolve, reject) => {
            const res = await this.client.get('/');
            try {
                const frontDelimiter = 'ytcfg.set(';
                const splitDelimiter = ');';
                res.data.split(frontDelimiter).map((v) => {
                    try {
                        return JSON.parse(v.split(splitDelimiter)[0]);
                    }
                    catch (_) {
                    }
                }).filter(Boolean)
                    .forEach((cfg) => (this.config = Object.assign(cfg, this.config)));
                resolve({
                    locale: this.config.LOCALE,
                    logged_in: this.config.LOGGED_IN,
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    /**
     * Get search suggestions from Youtube Music
     * @param query String query text to search
     * @returns {Promise<unknown>} An object formatted with utils class
     */
    async getSearchSuggestions(query) {
        return new Promise(async (resolve, reject) => {
            const res = await this._createApiRequest(EndPoint.SUGGESTIONS, {
                input: query,
            });
            // I dont think this is the best way, maybe the fv seems nice but that is really unreadable
            // Probably think of a better way
            if (!res.contents !== undefined) {
                reject(new IllegalStateError('No results found'));
            }
            const { contents } = res.contents[0].searchSuggestionsSectionRenderer;
            if (!contents) {
                reject(new IllegalStateError('result array not found'));
            }
            const rendererCompressed = contents.map((searchSuggestionRenderer) => SearchSuggestions.from({
                title: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[0]?.text ?? '',
                artist: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[1]?.text ?? '',
            }));
            resolve(rendererCompressed);
        });
    }
    /**
     * Searches for songs using the Youtube Music API
     * @param query String query text to search
     * @param categoryName Type of category to search
     * @param _pageLimit Max pages to obtain
     * @returns {Promise<unknown>} An object formatted by parsers.js
     */
    async search(query, categoryName, _pageLimit = 1) {
        return new Promise(async (resolve, reject) => {
            const context = await this._createApiRequest(EndPoint.SEARCH, {
                query,
                params: categoryName ?? '',
            });
            // The switch case will be implemented in parser as the individual stuff that comes out it nearly the same
            resolve(GeneralParser.parseSearchResult(context, categoryName));
        });
    }
    /**
     * Gets the album details
     * @param browseId The Id of the album, without the https nonsense
     */
    async getAlbum(browseId) {
        if (!browseId.startsWith('MPREb')) {
            throw new IllegalArgumentError('Invalid Album browse Id.');
        }
        return new Promise(async (resolve, reject) => {
            const ctx = await this._createApiRequest(EndPoint.SEARCH, utils.buildEndpointContext(Category.ALBUM, browseId));
            try {
                const result = GetAlbumParser.parseAlbumURLPage(ctx);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId The playlist ID, sanitized
     * @param contentLimit Maximum content to get
     * @returns {Promise<unknown>} An object formatted by the parser
     */
    async getPlaylist(browseId, contentLimit = 100) {
        if (!(browseId.startsWith('VL') || browseId.startsWith('PL'))) {
            throw new IllegalArgumentError(`Invalid Playlist Id ${browseId}.`);
        }
        if (browseId.startsWith('PL')) {
            browseId = 'VL' + browseId;
        }
        return new Promise(async (resolve, reject) => {
            const ctx = this._createApiRequest(EndPoint.BROWSE, utils.buildEndpointContext(Category.PLAYLISTS, browseId));
            try {
                const result = GetPlaylistParser.parsePlaylistURL(ctx);
                // No idea does this work or not
                const getContinuations = async (params) => {
                    const ctx = this._createApiRequest(EndPoint.BROWSE, {}, {
                        ctoken: params.continuation,
                        continuation: params.continuation,
                        itct: params.clickTrackingParams,
                    });
                    const continuationResult = GetPlaylistParser.parsePlaylistURL(ctx);
                    result.playlistContents = _.concat(result.playlistContents, continuationResult.playlistContents);
                    result.continuation = continuationResult.continuation;
                    if (Array.isArray(continuationResult.continuation)) {
                        resolve(result);
                    }
                    else if (contentLimit > result.playlistContents.length) {
                        await getContinuations(continuationResult.continuation);
                    }
                    else {
                        resolve(result);
                    }
                };
                if (contentLimit > result.playlistContents.length && (!Array.isArray(result.continuation))) {
                    await getContinuations(result.continuation);
                }
                else {
                    resolve(result);
                    return;
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns {Promise<unknown>} An object formatted by the artist page
     */
    async getArtist(browseId) {
        if (!_.startsWith(browseId, 'UC')) {
            throw new Error('invalid artist browse id.');
        }
        return new Promise(async (resolve, reject) => {
            const ctx = await this._createApiRequest(EndPoint.BROWSE, utils.buildEndpointContext(Category.ARTIST, browseId));
            try {
                // FIXME no idea how to solve this for now
                const result = GetArtistParser.parseArtistURLPage(ctx);
                resolve(result);
            }
            catch (error) {
                resolve(error);
            }
        });
    }
}

export { MooSick };
//# sourceMappingURL=index.js.map
