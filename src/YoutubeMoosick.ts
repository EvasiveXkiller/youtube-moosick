import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axios0 from 'axios/lib/adapters/http.js';
import tough from 'tough-cookie';
import { Category, EndPoint } from './enums.js';
import { utils } from './utils.js';
import { IllegalArgumentError, IllegalStateError } from './resources/errors/index.js';
import { URLSearchParams } from 'url';
import { GeneralParser, GetArtistParser, GetAlbumParser, GetPlaylistParser } from './parsers/index.js';
import { AsyncConstructor } from './blocks/asyncConstructor.js';
import type { ArtistURLFullResult } from './resources/etc/rawResultTypes/rawGetArtistURL.js';
import type { SearchSuggestionsFullResult } from './resources/etc/rawResultTypes/rawGetSearchSuggestions.js';
import type { AlbumURLFullResult } from './resources/etc/rawResultTypes/rawGetAlbumURL.js';
import type { GeneralFull } from './resources/etc/rawResultTypes/general/generalFull.js';
import type { Result as IResult } from './resources/etc/rawResultTypes/common.js';
import type { YtCfgMain } from './resources/etc/cfgInterface.js';
import {
	AlbumURL,
	ArtistURL,
	ContinuablePlaylistURL, PlaylistContent, PlaylistURL, SearchSuggestions,
} from './resources/resultTypes/index.js';
import {
	Song,
	Playlist,
	Video,
	Artist,
	ArtistExtended,
	ContinuableResult,
	ContinuableResultBlueprint,
	ContinuableResultFactory, ContinuableUnsorted, Album,
} from './resources/generalTypes/index.js';

export * from './resources/resultTypes/index.js';
export * from './resources/generalTypes/index.js';

axios.defaults.adapter = axios0;

// you found a kitten, please collect it

/**
 * Main class to interact with methods
 *
 * @public
 */
export class YoutubeMoosick extends AsyncConstructor {
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

			if (headers['set-cookie'] instanceof Array || typeof headers['set-cookie'] === 'object') {
				headers['set-cookie'].forEach((value: string) => {
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
	 * Overrides the constructor
	 * @internal
	 */
	public static override async new<T = YoutubeMoosick>(): Promise<T> {
		void super.new();

		return new YoutubeMoosick().new() as unknown as Promise<T>;
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
	 * @internal
	 */
	private async createApiRequest(endpointName: EndPoint, inputVariables = {}, inputQuery = {}): Promise<IResult> {
		const res = await this.client.post<any, AxiosResponse<IResult>>(
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
					'X-YouTube-Client-Name': this.config.INNERTUBE_CONTEXT_CLIENT_NAME as unknown as string,
					'X-YouTube-Client-Version': this.config.INNERTUBE_CLIENT_VERSION,
					'X-YouTube-Device': this.config.DEVICE,
					'X-YouTube-Page-CL': this.config.PAGE_CL as unknown as string,
					'X-YouTube-Page-Label': this.config.PAGE_BUILD_LABEL,
					'X-YouTube-Utc-Offset': String(-new Date().getTimezoneOffset()),
					'X-YouTube-Time-Zone': new Intl.DateTimeFormat().resolvedOptions().timeZone,
					...(this.client.defaults.headers as unknown as Record<string, string>),
				},
			});

		if (res.data?.responseContext != null) {
			return res.data;
		}

		throw new IllegalStateError('Youtube Music API request failed (`res.data?.responseContext` was nullish)');
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
	public async getSearchSuggestions(query: string): Promise<SearchSuggestions[]> {
		const res = await this.createApiRequest(EndPoint.SUGGESTIONS, {
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
	public async search<T extends undefined>(query: string, searchType?: T): Promise<ContinuableUnsorted>;
	public async search<T extends Category.VIDEO>(query: string, searchType?: T): Promise<ContinuableResult<Video>>;
	public async search<T extends Category.SONG>(query: string, searchType?: T): Promise<ContinuableResult<Song>>;
	public async search<T extends Category.PLAYLIST>(query: string, searchType?: T): Promise<ContinuableResult<Playlist>>;
	public async search<T extends Category.ARTIST>(query: string, searchType?: T): Promise<ContinuableResult<ArtistExtended>>;
	public async search<T extends Category.ALBUM | Category.EP | Category.SINGLE>(query: string, searchType?: T): Promise<ContinuableResult<Album>>;
	public async search<T extends Category>(query: string, searchType?: T): Promise<ContinuableResult<Video | Song | Playlist | Artist | Album>>;
	public async search<T extends Category>(query: string, searchType?: T): Promise<any> {
		const URI = searchType ? `Eg-KAQwIA${utils.mapCategoryToURL(searchType)}MABqChAEEAMQCRAFEAo%3D` : '';
		const ctx = await this.createApiRequest(
			EndPoint.SEARCH,
			{
				query,
				params: URI,
			},
		);

		const {
			result,
			continuation,
		} = GeneralParser.parseSearchResult(ctx as GeneralFull, searchType);

		const continuableResult = new ContinuableResultFactory<typeof result[0],
			ContinuableResultBlueprint<typeof result[0]>,
			typeof result>(searchType == null ? ContinuableUnsorted as any : ContinuableResult)
			.create({
				ctx: this,
				getContent: (context) => context.result,
				getContinuation: (context) => context.continuation,
				parser: (context) => GeneralParser.parseSearchResult(context, searchType),
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
	async getAlbum(browseId: string): Promise<AlbumURL> {
		if (!browseId.startsWith('MPREb')) {
			throw new IllegalArgumentError('Album browse IDs must start with "MPREb"', 'browseId');
		}

		const ctx = await this.createApiRequest(
			EndPoint.BROWSE,
			utils.buildEndpointContext(browseId, Category.ALBUM),
		);

		return GetAlbumParser.parseAlbumURLPage(ctx as AlbumURLFullResult);
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
	public async getPlaylist(browseId: string, contentLimit = 100): Promise<ContinuablePlaylistURL> {
		if (!browseId.startsWith('VL')
			&& !browseId.startsWith('PL')) {
			throw new IllegalArgumentError('Playlist browse IDs must start with "VL" or "PL"', 'browseId');
		}

		if (browseId.startsWith('PL')) {
			browseId = 'VL' + browseId;
		}

		const ctx = await this.createApiRequest(
			EndPoint.BROWSE,
			utils.buildEndpointContext(browseId, Category.PLAYLIST),
		);
		const result = GetPlaylistParser.parsePlaylistURL(ctx);
		// Results here are expected
		const continuableResult = ContinuablePlaylistURL.from({
			continuation: result.continuation,
			headers: result.headers,
			playlistContents: new ContinuableResultFactory<PlaylistContent, PlaylistURL>()
				.create({
					ctx: this,
					getContent: (context) => context.playlistContents,
					getContinuation: (context) => context.continuation,
					parser: GetPlaylistParser.parsePlaylistURL.bind(GetPlaylistParser),
					continuation: result.continuation,
					endpoint: EndPoint.BROWSE,
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
	public async getArtist(browseId: string): Promise<ArtistURL> {
		if (!browseId.startsWith('UC')) {
			throw new IllegalArgumentError('Artist browse IDs must start with "UC"', 'browseId');
		}

		const ctx = await this.createApiRequest(
			EndPoint.BROWSE,
			utils.buildEndpointContext(browseId, Category.ARTIST),
		);

		return GetArtistParser.parseArtistURLPage(ctx as ArtistURLFullResult);
	}

	/**
	 * Gets the `browseId` for the album based on the newer `listID`
	 * @param listID - The `listID` of the album
	 * @returns String The `browseID` of the album
	 *
	 * Example:
	 * ```typescript
	 * const api = await MooSick.new();
	 * const results = await api.getAlbumBrowseId('OLAK5uy_ljhFMBuzqiynvNq_3dC2QhQaz12zkD0LE');
	 *
	 * console.log(results);
	 * ```
	 *
	 */
	public async getAlbumBrowseId(listID: string): Promise<string> {
		if (!listID.startsWith('OLAK')) {
			throw new IllegalArgumentError('Artist browse IDs must start with "OLAK"', 'listID');
		}

		const res = await this.client.get(
			`https://music.youtube.com/playlist?${
				new URLSearchParams({
					list: listID,
				}).toString()
			}`,
			{},
		);

		const result = /"MPREb.+?"/g.exec(res.data) ?? [];
		if (result.length > 0) {
			return decodeURI(encodeURI(result[0])).replaceAll('"', '').replaceAll('\\', '');
		}

		throw new IllegalStateError('No Album ID was found');
	}
}
