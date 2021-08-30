import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axios0 from 'axios/lib/adapters/http.js';
import tough from 'tough-cookie';
import { Category, EndPoint } from './enums.js';
import { utils } from './utils.js';
import { IllegalArgumentError, IllegalStateError } from './resources/errors/index.js';
import { URLSearchParams } from 'url';
import { GeneralParser, GetArtistParser, GetAlbumParser, GetPlaylistParser } from './parsers/index.js';
import { AlbumURL, PlaylistURL, ArtistURL, SearchSuggestions } from './resources/resultTypes/index.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
import type { ArtistURLFullResult } from './resources/etc/rawResultTypes/rawGetArtistURL.js';
import type { SearchSuggestionsFullResult } from './resources/etc/rawResultTypes/rawGetSearchSuggestions.js';
import type { AlbumURLFullResult } from './resources/etc/rawResultTypes/rawGetAlbumURL.js';
import type { GeneralFull } from './resources/etc/rawResultTypes/general/generalFull.js';
import type { Result } from './resources/etc/rawResultTypes/common.js';
import type { YtCfgMain } from './resources/etc/cfgInterface.js';

axios.defaults.adapter = axios0;

// you found a kitten, please collect it

/**
 * Main class to interact with methods
 *
 * @public
 */
export class MooSick extends AsyncConstructor {
	private client!: AxiosInstance;
	private cookies!: tough.CookieJar;
	private config!: YtCfgMain;

	/**
	 * Creates a new instance of the searcher.
	 * @returns Adds with the original constructor
	 * @remarks Required to construct along with the class.
	 * @internal
	 * @beta
	 */
	private async new() {
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

		const res = await this.client.get<string, AxiosResponse<string>>('/');
		const dataString = /(?<=ytcfg\.set\().+(?=\);)/.exec(res.data)?.[0];

		if (dataString == null) {
			throw new IllegalStateError('API initialization returned a nullish value');
		}

		this.config = JSON.parse(dataString) as YtCfgMain;

		return this;
	}

	/**
	 * I have no idea what this method is supposed to do
	 * @returns something?
	 * @internal
	 */
	public static override async new<T = MooSick>(): Promise<T> {
		void super.new();

		return new MooSick().new() as unknown as Promise<T>;
	}

	/**
	 * Sets the cookie that is called from the new method
	 * @param cookieString - Cookie string
	 * @param baseURL - The base URL of that the cookie should be applied
	 * @internal
	 */
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
	async #createApiRequest(endpointName: EndPoint, inputVariables = {}, inputQuery = {}): Promise<Result> {
		const res = await this.client.post<any, AxiosResponse<Result>>(
			`youtubei/${
				this.config.INNERTUBE_API_VERSION
			}/${
				endpointName
			}?${
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

		if (res.data?.responseContext != null) {
			return res.data;
		}

		throw new IllegalStateError('Youtube Music API request failed (`res.data?.responseContext` was nullish)');
	}

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
	public async getSearchSuggestions(query: string): Promise<SearchSuggestions[]> {
		const res = await this.#createApiRequest(EndPoint.SUGGESTIONS, {
			input: query,
		}) as SearchSuggestionsFullResult;

		if (res.contents == null) {
			throw new IllegalStateError('No results found');
		}

		const { contents } = res.contents[0].searchSuggestionsSectionRenderer;
		if (!contents) {
			throw new IllegalStateError('Results array not found');
		}

		return contents
			.map(
				(searchSuggestionRenderer) => SearchSuggestions
					.from({
						title: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[0]?.text ?? '',
						artist: searchSuggestionRenderer.searchSuggestionRenderer.suggestion.runs[1]?.text ?? '',
					}),
			);
	}

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
	async search(query: string, categoryName?: Category, _pageLimit = 1): Promise<unknown> {
		const URI = categoryName ? `Eg-KAQwIA${utils.mapCategoryToURL(categoryName)}MABqChAEEAMQCRAFEAo%3D` : '';
		const ctx = await this.#createApiRequest(
			EndPoint.SEARCH,
			{
				query,
				params: URI,
			},
		);
		return GeneralParser.parseSearchResult(ctx as GeneralFull, categoryName);
	}

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
	async getAlbum(browseId: string): Promise<AlbumURL> {
		if (!browseId.startsWith('MPREb')) {
			throw new IllegalArgumentError('Album browse IDs must start with "MPREb"', 'browseId');
		}

		const ctx = await this.#createApiRequest(
			EndPoint.SEARCH,
			utils.buildEndpointContext(Category.ALBUM, browseId),
		);

		return GetAlbumParser.parseAlbumURLPage(ctx as AlbumURLFullResult);
	}

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
	public async getPlaylist(browseId: string, contentLimit = 100): Promise<PlaylistURL> {
		if (!browseId.startsWith('VL')
			&& !browseId.startsWith('PL')) {
			throw new IllegalArgumentError('Playlist browse IDs must start with "VL" or "PL"', 'browseId');
		}

		if (browseId.startsWith('PL')) {
			browseId = 'VL' + browseId;
		}

		const ctx = this.#createApiRequest(EndPoint.BROWSE, utils.buildEndpointContext(Category.PLAYLIST, browseId));
		const result = GetPlaylistParser.parsePlaylistURL(ctx);

		while (contentLimit > result.playlistContents.length
		&& result.continuation) {
			const { continuation, clickTrackingParams } = result.continuation;

			const ctx = this.#createApiRequest(EndPoint.BROWSE, {}, {
				ctoken: continuation,
				continuation,
				itct: clickTrackingParams,
			});
			const continuationResult = GetPlaylistParser.parsePlaylistURL(ctx);

			if (!Array.isArray(continuationResult.playlistContents)) {
				throw new IllegalStateError('Browse API responded with non-array `playlistContents`');
			}

			result.playlistContents.push(...continuationResult.playlistContents);
			result.continuation = continuationResult.continuation;
		}

		return result;
	}

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
	public async getArtist(browseId: string): Promise<ArtistURL> {
		if (!browseId.startsWith('UC')) {
			throw new IllegalArgumentError('Artist browse IDs must start with "UC"', 'browseId');
		}

		const ctx = await this.#createApiRequest(
			EndPoint.BROWSE,
			utils.buildEndpointContext(Category.ARTIST, browseId),
		);

		return GetArtistParser.parseArtistURLPage(ctx as ArtistURLFullResult);
	}

	// FIXME: there is a method called `getNext` to get continuation, but its undocumented, should we implement it?
}

