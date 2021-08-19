import axios, {AxiosInstance} from 'axios';
// no idea how to import these
import axios0 from 'axios/lib/adapters/http';
import tough from 'tough-cookie';
import _ from 'lodash';
import {categoryType, categoryURIBase64, endPointType} from './enums';
import {utils} from './utils';
import {IllegalArgumentError, IllegalStateError} from './resources/errors';
import {URLSearchParams} from "url";
import {parsers} from "./parsers";

axios.defaults.adapter = axios0;
// you found a kitten, please collect it

// Binding for functions later on
// Probably wont work but see how
const bindAndCloneToContext = (
    from: Record<string | number | symbol, any>,
    ctx: Record<string | number | symbol, any>,
) => {
    Object.entries(from).forEach(([key, value]) => {
        if (typeof value === 'function') {
            ctx[key] = (value as (...args: any[]) => any).bind(ctx);
        }
    });
};

interface YTConfig {
    VISITOR_DATA: string;
    INNERTUBE_CONTEXT_CLIENT_NAME: string;
    INNERTUBE_CLIENT_VERSION: string;
    INNERTUBE_API_VERSION: string;
    INNERTUBE_API_KEY: string;
    DEVICE: string;
    PAGE_CL: string;
    PAGE_BUILD_LABEL: string;
}

// ASYNC AWAIT SUPPORT EVERYWHERE, CALLBACK HELL IT IS NOW

export class MooSick {
    private client: AxiosInstance;
    private cookies: tough.CookieJar;

    // FIXME: where is this coming from?
    // @REPLY initialize func filter foreach function
    // probably this set to any since the object that comes out is huge
    private config: any;

    constructor() {
        this.cookies = new tough.CookieJar();
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
                (req.headers as Record<string, any>).Cookie = cookies;
            }

            return req;
        }, async (err) => Promise.reject(err));

        this.client.interceptors.response.use((res) => {
            if (!res.config?.baseURL
                || (typeof res.headers !== 'object')) {
                throw new IllegalStateError('Incomplete `req`');
            }

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const {headers}: { headers: Record<string, any> } = res;

            if (headers['set-cookie'] == null) {
                return res;
            }

            if (headers['set-cookie'] instanceof Array) {
                headers['set-cookie'].forEach((value) => {
                    this.parseAndSetCookie(value, res.config.baseURL!);
                });
            } else {
                this.parseAndSetCookie(headers['set-cookie'], res.config.baseURL);
            }

            return res;
        });
    }

    private parseAndSetCookie(cookieString: string, baseURL: string) {
        const cookie = tough.Cookie.parse(cookieString);

        if (cookie == null) {
            throw new IllegalArgumentError(`"${String(cookieString)}" is not a cookie`, 'cookieString');
        }

        this.cookies.setCookieSync(
            cookie,
            baseURL,
        );
    }

    // Soonner or later destructure functions into individual files

    // TODO: probably define each api req's input vars & input queries,
    // then make this func generic so it's type safe
    private async _createApiRequest(endpointName: endPointType, inputVariables = {}, inputQuery = {}) {
        const res = await this.client.post(
            `youtubei/${
                this.config.INNERTUBE_API_VERSION
            }/${
                endpointName
            }?${
                // eslint is drunk
                // eslint-disable-next-line
                new URLSearchParams({
                    alt: 'json',
                    key: this.config.INNERTUBE_API_KEY,
                    ...inputQuery,
                })
                    .toString()
            }`, {
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
                    ...(this.client.defaults.headers as Record<string, string>),
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
    public async initialize() {
        return new Promise(async (resolve, reject) => {
            const res = await this.client.get(`/`);
            try {
                const frontDelimiter = `ytcfg.set(`, splitDelimiter = `);`
                res.data.split(frontDelimiter).map((v: string) => {
                    try {
                        return JSON.parse(v.split(splitDelimiter)[0]);
                    } catch (_) {
                    }
                }).filter(Boolean)
                    .forEach((cfg: Object) => (this.config = Object.assign(cfg, this.config)));
                resolve({
                    locale: this.config.LOCALE,
                    logged_in: this.config.LOGGED_IN,
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get search suggestions from Youtube Music
     * @param query String query text to search
     * @returns {Promise<unknown>} An object formatted with utils class
     */
    public async getSearchSuggestions(query: string) {
        return new Promise(async (resolve, reject) => {
            const res = await this._createApiRequest(endPointType.SUGGESTIONS, {
                input: query,
            })
            // I dont think this is the best way, maybe the fv seems nice but that is really unreadable
            // Probably think of a better way
            if (!res.hasOwnProperty("contents")) reject(`no results found`);
            const contents = res.contents[0].searchSuggestionRenderer.contents;
            if (!contents) reject(new IllegalStateError("result array not found"));
            const rendererCompressed = contents.map((searchSuggestionRenderer: any) => {
                return {
                    track: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[0]?.text ?? "",
                    artist: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[1]?.text ?? ""
                }
            })
            return resolve(rendererCompressed);
        });
    }

    /**
     * Searches for songs using the Youtube Music API
     * @param query String query text to search
     * @param categoryName Type of category to search
     * @param _pageLimit Max pages to obtain
     * @returns {Promise<unknown>} An object formatted by parsers.js
     */
    async search(query: string, categoryName?: categoryURIBase64, _pageLimit = 1) : Promise<unknown> {
        return new Promise(async (resolve, reject) => {
            let result: Object;
            const context = await this._createApiRequest(endPointType.SEARCH, {
                query,
                params: categoryName,
            })
            switch (categoryName) {
                case categoryURIBase64.SONG:
                    result = parsers.parseSongSearchResult(context);
                    break;
                case categoryURIBase64.VIDEO:
                    result = parsers.parseVideoSearchResult(context);
                    break;
                case categoryURIBase64.ALBUM:
                    result = parsers.parseAlbumSearchResult(context);
                    break;
                case categoryURIBase64.ARTIST:
                    result = parsers.parseArtistSearchResult(context);
                    break;
                case categoryURIBase64.PLAYLISTS:
                    result = parsers.parsePlaylistSearchResult(context);
                    break;
                default:
                    result = parsers.parseSearchResult(context);
                    break;
            }
            resolve(result);
        })
    }

    async getAlbum(browseId: string) {
        if (!_.startsWith(browseId, 'MPREb')) throw new Error('invalid album browse id.');
        return new Promise((resolve, reject) => {
            const ctx = this._createApiRequest(endPointType.SEARCH, utils.buildEndpointContext(categoryType.ALBUM, browseId));
            try {
                const result = parsers.parseAlbumPage(ctx);
                resolve(result);
            } catch (error) {
                reject(error.message);
            }
        });
    }

    /**
     * Gets the playlist using the Youtube Music API
     * @param browseId The playlist ID, sanitized
     * @param contentLimit Maximum content to get
     * @returns {Promise<unknown>} An object formatted by the parser
     */
    async getPlaylist(browseId: string, contentLimit = 100) {
        if (!(_.startsWith(browseId, 'VL') || _.startsWith(browseId, 'PL'))) throw new Error('invalid playlist id.');
        _.startsWith(browseId, 'PL') && (browseId = 'VL' + browseId);

        return new Promise(async (resolve, reject) => {
            const ctx = this._createApiRequest(endPointType.BROWSE, utils.buildEndpointContext(categoryType.PLAYLISTS, browseId))
            try {
                const result = parsers.parsePlaylistPage(ctx);
                const getContinuations = async (params: any) => {
                    const ctx = this._createApiRequest(endPointType.BROWSE, {}, {
                        ctoken: params.continuation,
                        continuation: params.continuation,
                        itct: params.continuation.clickTrackingParams,
                    })
                    const continuationResult = parsers.parsePlaylistPage(ctx);
                    if (Array.isArray(continuationResult.content)) {
                        result.content = _.concat(result.content, continuationResult.content);
                        result.continuation = continuationResult.continuation;
                    }
                    if (!Array.isArray(continuationResult.continuation) && result.continuation instanceof Object) {
                        if (contentLimit > result.content.length) {
                            await getContinuations(continuationResult.continuation);
                        } else {
                            resolve(result);
                        }
                    } else {
                        resolve(result);
                    }
                }
                if (contentLimit > result.content.length && (!Array.isArray(result.continuation) && result.continuation instanceof Object)) {
                    await getContinuations(result.continuation);
                } else {
                    resolve(result);
                    return;
                }
            } catch (error) {
                resolve({
                    error: error.message,
                });
            }
        });
    }


    /**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns {Promise<unknown>} An object formatted by the artist page
     */
    async getArtist(browseId: string) {
        if (!_.startsWith(browseId, 'UC')) throw new Error('invalid artist browse id.');
        return new Promise(async (resolve, reject) => {
            const ctx = await this._createApiRequest(endPointType.BROWSE, utils.buildEndpointContext(categoryType.ARTIST, browseId));
            try {
                const result = parsers.parseArtistPage(ctx);
                resolve(result);
            } catch (error) {
                resolve({
                    error: error.message,
                });
            }
        })

    }
}


