import { Category, CategoryURIBase64 } from './enums.js';
export class utils {
    // FIXME: Should we deprecate this function?
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
    static fv(input, query, shallow = false) {
        const props = query
            .split(':')
            .reduce(function findPropValuesOfKey(obj, key) {
            if (typeof obj !== 'object') {
                return [];
            }
            let props = [];
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (shallow) {
                    return obj[key];
                }
                props.push(obj[key]);
            }
            if (!(obj instanceof Array)) {
                obj = Object.values(obj);
            }
            obj
                .forEach((objPart) => props.push(findPropValuesOfKey(objPart, key)));
            props = props.flat(1);
            return props.length === 1 ? props[0] : props;
        }, input);
        return props instanceof Array ? props : [props];
    }
    static hms2ms(input) {
        const splitDigits = input.split(':');
        return (splitDigits.reduceRight((prev, curr, i, arr) => 
        // eslint-disable-next-line no-mixed-operators
        prev + parseInt(curr, 10) * 60 ** (arr.length - 1 - i), 0) * 1000);
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
    static buildEndpointContext(browseId, category) {
        return {
            browseEndpointContextSupportedConfigs: {
                browseEndpointContextMusicConfig: {
                    pageType: `MUSIC_PAGE_TYPE_${category.toUpperCase()}`,
                },
            },
            browseId,
        };
    }
    static mapCategoryToURL(category) {
        let categoryURL = CategoryURIBase64.SONG;
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
//# sourceMappingURL=utils.js.map