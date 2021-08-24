import type { ytcfgInterface } from './cfgInterface';
import { Artist } from './resources/generalTypes/artist';
import type { Run } from './resources/resultTypes/sectionList';
import { Album } from './resources/generalTypes/album';
import { Thumbnails } from './resources/generalTypes/thumbnails';
import objectScan from 'object-scan';
import { Category, ConstantURLs, SongFlexColumnOffset, PlaylistOffset, SongOffset } from './enums';
import { IllegalCategoryError } from './resources/errors';

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
	public static fv(input: Record<string | number | adaptCSSSelector, any>, query: string, shallow = false): unknown[] {
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
					prev + parseInt(curr, 10) * 60 ** (arr.length - 1 - i), 0,
			) * 1000
		);
	}

	static createApiContext(ytcfg: ytcfgInterface) {
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

	/**
     * Extracts artist from flexColumn[1];
     * @param runsArray array that complies with flexColumn[1] style
     * @param delimiter any delimiter but ' • ' seems to be the default
     */
	/* Example
	input : [
                        {
                            "text": "Video"
                        },
                        {
                            "text": " • "
                        },
                        {
                            "text": "Justin Bieber",
                            "navigationEndpoint": {
                                "clickTrackingParams": "COwBENNoGAAiEwi-jtSJiMHyAhXp3HMBHZXcCyk=",
                                "browseEndpoint": {
                                    "browseId": "UCGvj8kfUV5Q6lzECIrGY19g",
                                    "browseEndpointContextSupportedConfigs": {
                                        "browseEndpointContextMusicConfig": {
                                            "pageType": "MUSIC_PAGE_TYPE_ARTIST"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "text": " & "
                        },
                        {
                            "text": "The Kid Laroi",
                            "navigationEndpoint": {
                                "clickTrackingParams": "COwBENNoGAAiEwi-jtSJiMHyAhXp3HMBHZXcCyk=",
                                "browseEndpoint": {
                                    "browseId": "UCof4hiuvv9BPhVCh90QHErw",
                                    "browseEndpointContextSupportedConfigs": {
                                        "browseEndpointContextMusicConfig": {
                                            "pageType": "MUSIC_PAGE_TYPE_ARTIST"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "text": " • "
                        },
                        {
                            "text": "86M views"
                        },
                        {
                            "text": " • "
                        },
                        {
                            "text": "2:38"
                        }
                    ]
                    // probably the class here is wrong but u get the idea
        returns : [ { name: 'Justin Bieber', browseId: 'UCGvj8kfUV5Q6lzECIrGY19g' },
                    { name: 'The Kid Laroi', browseId: 'UCof4hiuvv9BPhVCh90QHErw' } ]
	 */
	static artistParser(runsArray: Run[], delimiter = ' • '): Artist[] {
		// Only "SONGS" and "VIDEOS" are supported for this function to extract
		if (runsArray[0].text as Category !== Category.SONG || Category.VIDEO) {
			throw new IllegalCategoryError('Only "categoryType.SONG" and "categoryType.VIDEO" are can be decoded');
		}

		// Gets the positions of the delimiter
		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		// Gets the object located between the 1st and 2nd delimiter
		const multiDimension = runsArray.slice(positions[SongOffset.ARTIST] + 1, positions[SongOffset.ARTIST + 1])
			// Strip out unrelated objects like "&"
			.map((element) => element.navigationEndpoint === undefined ? null : element)
			.filter(Boolean);
		// Returns an array of objects of class artist
		// FIXME wtf is this type
		return multiDimension.map((element) => (Artist.from({
			name: element.text,
			id: element.navigationEndpoint.browseEndpoint.browseId,
			url: ConstantURLs.CHANNEL_URL + element.navigationEndpoint.browseEndpoint.browseId,
		})));
	}

	/**
	 * Parses the album from the flexcolumn, if can
	 * @param runsArray
	 * @param delimiter
	 */
	static albumParser(runsArray: Run[], delimiter = ' • '): Album {
		// Only "SONGS" and "VIDEOS" are supported for this function to extract
		if (runsArray[SongFlexColumnOffset.ARTIST_ALBUM].text as Category !== Category.SONG
			|| runsArray[SongFlexColumnOffset.ARTIST_ALBUM].text as Category !== Category.VIDEO
		|| runsArray[SongFlexColumnOffset.ARTIST_ALBUM].text as Category !== Category.PLAYLISTS) {
			throw new IllegalCategoryError('Only "categoryType.SONG","categoryType.VIDEOS","categoryType.PLAYLISTS" can be decoded');
		}

		// Gets the positions of the delimiter
		// Probably can deprecate the following line, or use a constant
		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		// Determines what limiter to use
		const typedDelimiter = (runsArray[SongFlexColumnOffset.ARTIST_ALBUM].text as Category) === Category.PLAYLISTS ? PlaylistOffset.AUTHOR : SongOffset.ARTIST;
		return Album.from({
			name: runsArray[positions[typedDelimiter] + 1].text,
			id: runsArray[SongOffset.ALBUM + 1].navigationEndpoint.browseEndpoint.browseId,
			url: ConstantURLs.CHANNEL_URL + runsArray[typedDelimiter + 1].navigationEndpoint.browseEndpoint.browseId,
		});
	}

	/**
	 * Gets the thumbnail from the sectionList
	 * @param sectionContext
	 */
	static thumbnailParser(sectionContext: any): Thumbnails[] {
		return objectScan(['**.musicThumbnailRenderer.**.thumbnails'], {
			rtn: 'value',
			reverse: false,
		})(sectionContext) as Thumbnails[];
	}

	/**
	 * Gets the playlist count and extracts them
	 * @param flexColumn
	 */
	// Probably wrong type here
	static playlistCountExtractor(flexColumn: Run[]): number {
		const extracted = (objectScan(['**.text.runs'], { rtn: 'value', reverse: false, abort: true })(flexColumn[1])) as Run[];
		return parseInt(extracted[extracted.length - 1].text, 10);
	}

	// Parse enums from here for utils
	// Probably dont need it but see how
	public static parseTypeName(typeName: string): Category {
		return typeName as Category;
	}
}
