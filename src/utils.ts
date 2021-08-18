export class utils {
	/**
	 * fv (FieldVisitor)
	 * Traverses an object through a colon-delimited query path
	 * @param input An input record
	 * @param query A colon delimited string
	 * @param justOne Whether to return the
	 * @example
	 * ```js
	 * 	const input = { a: { b: { c: 1 } } };
	 *
	 * 	fv(input, 'a:b:c', false); // result === 1
	 * ```
	 * */
	static fv<T extends Record<string, any>>(input: T, query: string): unknown {
		let result: any = input;
		const keyPath = query.split(':');

		for (const key of keyPath) {
			if (typeof result !== 'object') {
				return result as T[keyof T];
			}

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			result = (result as Record<string | number | symbol, any>)[key];
		}

		return result ?? [];
	}

	static hms2ms(input: string) {
		try {
			const p = input.split(':');
			let s = 0;
			let f = 1;
			while (p.length > 0) {
				s += f * parseInt(p.pop(), 10);
				f *= 60;
			}

			return s * 1e3;
		} catch (e) {
			return 0;
		}
	}

	static createApiContext(ytcfg) {
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
					internalExperimentFlags: [{
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
					}],
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
}
