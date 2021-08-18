import axios from './node_modules/axios/index.js';
import http_1 from './node_modules/axios/lib/adapters/http.js';
import './node_modules/tough-cookie/lib/cookie.js';
import _ from './node_modules/lodash/lodash.js';
import './node_modules/@jsdevtools/readdir-enhanced/lib/index.js';
import { endPointType, categoryType } from './enums.js';
import { utils } from './utils.js';
import { IllegalArgumentError } from './resources/errors/illegalArgument.error.js';
import { IllegalStateError } from './resources/errors/illegalState.error.js';
import { __exports as cookie } from './_virtual/cookie.js_commonjs-exports';

axios.defaults.adapter = http_1;
// ASYNC AWAIT SUPPORT EVERYWHERE, CALLBACK HELL IT IS NOW
class MooSick {
    client;
    cookies;
    // FIXME: where is this coming from?
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
        return new Promise((resolve, reject) => {
            this.client.get('/')
                .then((res) => {
                try {
                    res.data.split('ytcfg.set(').map((v) => {
                        try {
                            return JSON.parse(v.split(');')[0]);
                        }
                        catch (_) {
                        }
                    }).filter(Boolean).forEach((cfg) => (this.config = Object.assign(cfg, this.config)));
                    resolve({
                        locale: this.config.LOCALE,
                        logged_in: this.config.LOGGED_IN,
                    });
                }
                catch (err) {
                    reject(err);
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Get search suggestions from Youtube Music
     * @param query String query text to search
     * @returns {Promise<unknown>} An object formatted with utils class
     */
    async getSearchSuggestions(query) {
        return new Promise((resolve, reject) => {
            this._createApiRequest('music/get_search_suggestions', {
                input: query,
            })
                .then((content) => {
                try {
                    resolve(utils.fv(content, 'searchSuggestionRenderer:navigationEndpoint:query'));
                }
                catch (error) {
                    reject(error);
                }
            })
                .catch((error) => {
                reject(error);
            });
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
        return new Promise((resolve, reject) => {
            let result = {};
            this._createApiRequest(endPointType.SEARCH, {
                query,
                params: utils.getCategoryURI(categoryName),
            })
                .then((context) => {
                try {
                    switch (_.upperCase(categoryName)) {
                        case categoryType.SONG:
                            result = parsers.parseSongSearchResult(context);
                            break;
                        case categoryType.VIDEO:
                            result = parsers.parseVideoSearchResult(context);
                            break;
                        case categoryType.ALBUM:
                            result = parsers.parseAlbumSearchResult(context);
                            break;
                        case categoryType.ARTIST:
                            result = parsers.parseArtistSearchResult(context);
                            break;
                        case categoryType.PLAYLISTS:
                            result = parsers.parsePlaylistSearchResult(context);
                            break;
                        default:
                            result = parsers.parseSearchResult(context);
                            break;
                    }
                    resolve(result);
                }
                catch (error) {
                    resolve({
                        error: error.message,
                    });
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    async getAlbum(browseId) {
        if (_.startsWith(browseId, 'MPREb')) {
            return new Promise((resolve, reject) => {
                this._createApiRequest(endPointType.SEARCH, utils.buildEndpointContext(categoryType.ALBUM, browseId))
                    .then((context) => {
                    try {
                        const result = parsers.parseAlbumPage(context);
                        resolve(result);
                    }
                    catch (error) {
                        resolve({
                            error: error.message,
                        });
                    }
                })
                    .catch((error) => {
                    reject(error);
                });
            });
        }
        throw new Error('invalid album browse id.');
    }
    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId The playlist ID, sanitized
     * @param contentLimit Maximum content to get
     * @returns {Promise<unknown>} An object formatted by the parser
     */
    async getPlaylist(browseId, contentLimit = 100) {
        if (_.startsWith(browseId, 'VL') || _.startsWith(browseId, 'PL')) {
            _.startsWith(browseId, 'PL') && (browseId = 'VL' + browseId);
            return new Promise((resolve, reject) => {
                this._createApiRequest(endPointType.BROWSE, utils.buildEndpointContext(categoryType.PLAYLISTS, browseId))
                    .then((context) => {
                    try {
                        const result = parsers.parsePlaylistPage(context);
                        const getContinuations = (params) => {
                            this._createApiRequest(endPointType.BROWSE, {}, {
                                ctoken: params.continuation,
                                continuation: params.continuation,
                                itct: params.continuation.clickTrackingParams,
                            })
                                .then((context) => {
                                const continuationResult = parsers.parsePlaylistPage(context);
                                if (Array.isArray(continuationResult.content)) {
                                    result.content = _.concat(result.content, continuationResult.content);
                                    result.continuation = continuationResult.continuation;
                                }
                                if (!Array.isArray(continuationResult.continuation) && result.continuation instanceof Object) {
                                    if (contentLimit > result.content.length) {
                                        getContinuations(continuationResult.continuation);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        };
                        if (contentLimit > result.content.length && (!Array.isArray(result.continuation) && result.continuation instanceof Object)) {
                            getContinuations(result.continuation);
                        }
                        else {
                            resolve(result);
                            return;
                        }
                    }
                    catch (error) {
                        resolve({
                            error: error.message,
                        });
                    }
                })
                    .catch((error) => {
                    reject(error);
                });
            });
        }
        throw new Error('invalid playlist id.');
    }
    /**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns {Promise<unknown>} An object formatted by the artist page
     */
    async getArtist(browseId) {
        if (_.startsWith(browseId, 'UC')) {
            return new Promise((resolve, reject) => {
                this._createApiRequest(endPointType.BROWSE, utils.buildEndpointContext(categoryType.ARTIST, browseId))
                    .then((context) => {
                    try {
                        const result = parsers.parseArtistPage(context);
                        resolve(result);
                    }
                    catch (error) {
                        resolve({
                            error: error.message,
                        });
                    }
                })
                    .catch((error) => {
                    reject(error);
                });
            });
        }
        throw new Error('invalid artist browse id.');
    }
}

export { MooSick };
//# sourceMappingURL=index.js.map
