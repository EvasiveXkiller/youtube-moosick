import axios, { AxiosInstance } from 'axios';
// no idea how to import these
import axios0 from 'axios/lib/adapters/http';
import tough from 'tough-cookie';
import _ from 'lodash';
import { CategoryType, CategoryURIBase64, EndPointType } from './enums';
import { utils } from './utils';
import { IllegalArgumentError, IllegalStateError } from './resources/errors';
import { URLSearchParams } from 'url';
import { parsers } from './parsers';
import type { continuation } from './resources/resultTypes/playlistURL';
import { GetPlaylistParser } from './parsers/getPlaylistParser';
import { GetArtistParser } from './parsers/getArtistParser';
import type { ArtistURLFullResult } from './resources/rawResultTypes/rawGetArtistURL';
import type { RawGetSearchSuggestions } from './resources/rawResultTypes/rawGetSearchSuggestions';
import { SearchSuggestions } from './resources/resultTypes/searchSuggestions';
import {GetAlbumParser} from "./parsers/getAlbumParser";
import type {RawGetAlbumURL} from "./resources/rawResultTypes/rawGetAlbumURL";

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
	CLIENT_CANARY_STATE: string;

}

// Just ditch stuff i guess if u dont need, and im pretty sure we dont need every param here
// Or we can just leave it as any
interface full {
	'CLIENT_CANARY_STATE': string;
	'DEVICE': string;
	'ELEMENT_POOL_DEFAULT_CAP': number;
	'EVENT_ID': string;
	// Experiment flags is a big object, probably dont need it
	'EXPERIMENT_FLAGS': Record<string, unknown>;
	'GAPI_HINT_PARAMS': string;
	'GAPI_HOST': string;
	'GAPI_LOCALE': string;
	'GL': string;
	'HL': string;
	'HTML_DIR': string;
	'HTML_LANG': string;
	'INNERTUBE_API_KEY': string;
	'INNERTUBE_API_VERSION': string;
	'INNERTUBE_CLIENT_NAME': string;
	'INNERTUBE_CLIENT_VERSION': string;
	'INNERTUBE_CONTEXT': Record<string, unknown>;
	'INNERTUBE_CONTEXT_CLIENT_NAME': 67;
	'INNERTUBE_CONTEXT_CLIENT_VERSION': string;
	'INNERTUBE_CONTEXT_GL': string;
	'INNERTUBE_CONTEXT_HL': string;
	'LATEST_ECATCHER_SERVICE_TRACKING_PARAMS': Record<string, unknown>;
	'LOGGED_IN': false;
	'PAGE_BUILD_LABEL': string;
	'PAGE_CL': number;
	'SERVER_NAME': string;
	'SIGNIN_URL': string;
	'VISITOR_DATA': string;
	'WEB_PLAYER_CONTEXT_CONFIGS': Record<string, unknown>;
	'XSRF_FIELD_NAME': string;
	'XSRF_TOKEN': string;
	'YPC_MB_URL': string;
	'YTR_FAMILY_CREATION_URL': string;
	'SERVER_VERSION': string;
	'LOCALE': string;
	'REUSE_COMPONENTS': boolean;
	'STAMPER_STABLE_LIST': boolean;
	'DATASYNC_ID': string;
	'SERIALIZED_CLIENT_CONFIG_DATA': string;
	'CLIENT_PROTOCOL': string;
	'CLIENT_TRANSPORT': string;
	'USE_EMBEDDED_INNERTUBE_DATA': boolean;
	'VISIBILITY_ROOT': string;
	'YTMUSIC_ICON_SRC': string;
	'YTMUSIC_LOGO_SRC': string;
	'UPLOAD_URL': string;
	'TRANSFER_PAGE_SIGNIN_URL': string;
	'LOGOUT_URL': string;
	'IS_SUBSCRIBER': boolean;
	'IS_MOBILE_WEB': boolean;
	'INITIAL_ENDPOINT': string;
	// pretty sure we dont need this
	'HOTKEY_DIALOG': Record<string, unknown>;
	'DEFAULT_ALBUM_IMAGE_SRC': string;
	'AUDIO_QUALITY': string;
	'ADD_SCRAPER_ATTRIBUTES': boolean;
	'ACTIVE_ACCOUNT_IS_MADISON_ACCOUNT': boolean;
	'YTMUSIC_WHITE_ICON_SRC': string;
	'YTMUSIC_WHITE_LOGO_SRC': string;
}

// ASYNC AWAIT SUPPORT EVERYWHERE, CALLBACK HELL IT IS NOW

export class MooSick {
	private client: AxiosInstance;
	private cookies: tough.CookieJar;

	// FIXME: where is this coming from?
	// @REPLY came from `initialize` func filter foreach function
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
			const { headers }: { headers: Record<string, any> } = res;

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
	private async _createApiRequest(endpointName: EndPointType, inputVariables = {}, inputQuery = {}): Promise<string> {
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
			const res = await this.client.get('/');
			try {
				const frontDelimiter = 'ytcfg.set(';
				const splitDelimiter = ');';
				res.data.split(frontDelimiter).map((v: string) => {
					try {
						return JSON.parse(v.split(splitDelimiter)[0]);
					} catch (_) {
					}
				}).filter(Boolean)
					.forEach((cfg: Record<string, unknown>) => (this.config = Object.assign(cfg, this.config)));
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
	public async getSearchSuggestions(query: string): Promise<SearchSuggestions[]> {
		return new Promise(async (resolve, reject) => {
			const res = await this._createApiRequest(EndPointType.SUGGESTIONS, {
				input: query,
			}) as unknown as RawGetSearchSuggestions;
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
	async search(query: string, categoryName?: CategoryURIBase64, _pageLimit = 1): Promise<unknown> {
		return new Promise(async (resolve, reject) => {
			let result: Record<string, unknown>;
			const context = await this._createApiRequest(EndPointType.SEARCH, {
				query,
				params: categoryName,
			});
			switch (categoryName) {
				case CategoryURIBase64.SONG:
					result = parsers.parseSongSearchResult(context);
					break;
				case CategoryURIBase64.VIDEO:
					result = parsers.parseVideoSearchResult(context);
					break;
				case CategoryURIBase64.ALBUM:
					result = parsers.parseAlbumSearchResult(context);
					break;
				case CategoryURIBase64.ARTIST:
					result = parsers.parseArtistSearchResult(context);
					break;
				case CategoryURIBase64.PLAYLISTS:
					result = parsers.parsePlaylistSearchResult(context);
					break;
				default:
					result = parsers.parseSearchResult(context);
					break;
			}

			resolve(result);
		});
	}

	/**
	 * Gets the album details
	 * @param browseId The Id of the album, without the https nonsense
	 */
	async getAlbum(browseId: string) {
		if (!browseId.startsWith('MPREb')) {
			throw new IllegalArgumentError('Invalid Album browse Id.');
		}

		return new Promise(async (resolve, reject) => {
			const ctx = await this._createApiRequest(EndPointType.SEARCH, utils.buildEndpointContext(CategoryType.ALBUM, browseId));
			try {
				const result = GetAlbumParser.parseAlbumURLPage(ctx as unknown as RawGetAlbumURL);
				resolve(result);
			} catch (error: unknown) {
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
	async getPlaylist(browseId: string, contentLimit = 100) {
		if (!(browseId.startsWith('VL') || browseId.startsWith('PL'))) {
			throw new IllegalArgumentError(`Invalid Playlist Id ${browseId}.`);
		}

		if (browseId.startsWith('PL')) {
			browseId = 'VL' + browseId;
		}

		return new Promise(async (resolve, reject) => {
			const ctx = this._createApiRequest(EndPointType.BROWSE, utils.buildEndpointContext(CategoryType.PLAYLISTS, browseId));
			try {
				const result = GetPlaylistParser.parsePlaylistURL(ctx);
				// No idea does this work or not
				const getContinuations = async (params: continuation) => {
					const ctx = this._createApiRequest(EndPointType.BROWSE, {}, {
						ctoken: params.continuation,
						continuation: params.continuation,
						itct: params.clickTrackingParams,
					});
					const continuationResult = GetPlaylistParser.parsePlaylistURL(ctx);
					result.playlistContents = _.concat(result.playlistContents, continuationResult.playlistContents);
					result.continuation = continuationResult.continuation;

					if (Array.isArray(continuationResult.continuation)) {
						resolve(result);
					} else if (contentLimit > result.playlistContents.length) {
						await getContinuations(continuationResult.continuation);
					} else {
						resolve(result);
					}
				};

				if (contentLimit > result.playlistContents.length && (!Array.isArray(result.continuation))) {
					await getContinuations(result.continuation);
				} else {
					resolve(result);
					return;
				}
			} catch (error: unknown) {
				reject(error);
			}
		});
	}

	/**
     * Gets the artist details from Youtube Music
     * @param browseId The artist ID, sanitized
     * @returns {Promise<unknown>} An object formatted by the artist page
     */
	async getArtist(browseId: string) {
		if (!_.startsWith(browseId, 'UC')) {
			throw new Error('invalid artist browse id.');
		}

		return new Promise(async (resolve, reject) => {
			const ctx = await this._createApiRequest(EndPointType.BROWSE, utils.buildEndpointContext(CategoryType.ARTIST, browseId));
			try {
				// FIXME no idea how to solve this for now
				const result = GetArtistParser.parseArtistURLPage(ctx as unknown as ArtistURLFullResult);
				resolve(result);
			} catch (error: unknown) {
				resolve(error);
			}
		});
	}
}

