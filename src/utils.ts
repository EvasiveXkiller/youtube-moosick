import type { YtCfgMain } from './cfgInterface.js';
import { Category, CategoryURIBase64 } from './enums.js';

export class utils {
	/**
	 * fv (FieldVisitor)
	 * Traverses an object through a colon-delimited query path & returns the values of its prop/field
	 * @param input An input record
	 * @param query A colon delimited string
	 * @param shallow If false, recuses through object to find any nested object's prop/field value which matches the query
	 * @example
	 * ```js
	 *    const input = { a: { b: { c: 1 } } };
	 *
	 *    fv(input, 'a:b:c', false); // result === 1
	 * ```
	 * */
	public static fv(input: Record<string | number | symbol, any>, query: string, shallow = false): unknown[] {
		const props = query
			.split(':')
			.reduce<any>(
				function findPropValuesOfKey(obj: typeof input, key: typeof query): unknown | unknown[] {
					if (typeof obj !== 'object') {
						return [];
					}

					let props = [];

					if (Object.prototype.hasOwnProperty.call(obj, key)) {
						if (shallow) {
							return obj[key] as unknown;
						}

						props.push(obj[key]);
					}

					if (!(obj instanceof Array)) {
						obj = Object.values(obj);
					}

					(obj as any[])
						.forEach(
							(objPart) => props.push(
								findPropValuesOfKey(objPart, key),
							),
						);
					props = props.flat(1);

					return props.length === 1 ? props[0] : props;
				},
				input,
			) as unknown;

		return props instanceof Array ? props : [props];
	}

	static hms2ms(input: string): number {
		const splitDigits = input.split(':');
		return (
			splitDigits.reduceRight(
				(prev, curr, i, arr) =>
					// eslint-disable-next-line no-mixed-operators
					prev + parseInt(curr, 10) * 60 ** (arr.length - 1 - i), 0,
			) * 1000
		);
	}

	static createApiContext(ytcfg: YtCfgMain) {
		return {
			context: {
				capabilities: {},
				client: {
					clientName: ytcfg.INNERTUBE_CLIENT_NAME,
					clientVersion: ytcfg.INNERTUBE_CLIENT_VERSION,
					experimentIds: [],
					experimentsToken: '',
					gl: ytcfg.GL,
					hl: ytcfg.HL,
					locationInfo: {
						locationPermissionAuthorizationStatus: 'LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED',
					},
					musicAppInfo: {
						musicActivityMasterSwitch: 'MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE',
						musicLocationMasterSwitch: 'MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE',
						pwaInstallabilityStatus: 'PWA_INSTALLABILITY_STATUS_UNKNOWN',
					},
					utcOffsetMinutes: -new Date().getTimezoneOffset(),
				},
				request: {
					internalExperimentFlags: [
						{
							key: 'force_music_enable_outertube_tastebuilder_browse',
							value: 'true',
						},
						{
							key: 'force_music_enable_outertube_playlist_detail_browse',
							value: 'true',
						},
						{
							key: 'force_music_enable_outertube_search_suggestions',
							value: 'true',
						},
					],
					sessionIndex: {},
				},
				user: {
					enableSafetyMode: false,
				},
			},
		};
	}

	static buildEndpointContext(typeName: string, browseId: string) {
		return {
			browseEndpointContextSupportedConfigs: {
				browseEndpointContextMusicConfig: {
					pageType: `MUSIC_PAGE_TYPE_${typeName.toUpperCase()}`,
				},
			},
			browseId,
		};
	}

	static mapCategoryToURL(category: Category): CategoryURIBase64 {
		let categoryURL: CategoryURIBase64 = CategoryURIBase64.SONG;
		switch (category) {
			case Category.SONG:
				categoryURL = CategoryURIBase64.SONG;
				break;
			case Category.VIDEO:
				categoryURL = CategoryURIBase64.VIDEO;
				break;
			case Category.ALBUM:
			case Category.EP:
			case Category.SINGLE:
				categoryURL = CategoryURIBase64.ALBUM;
				break;
			case Category.ARTIST:
				categoryURL = CategoryURIBase64.ARTIST;
				break;
			case Category.PLAYLIST:
				categoryURL = CategoryURIBase64.PLAYLIST;
				break;
			default:
				break;
		}

		return categoryURL;
	}
}
