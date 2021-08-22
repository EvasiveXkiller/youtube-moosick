import type { ytcfgInterface } from './cfgInterface';
import { Artist } from './resources/generalTypes/artist';
import type { Run } from './resources/resultTypes/sectionList';
import { Album } from './resources/generalTypes/album';
import { Thumbnails } from './resources/generalTypes/thumbnails';
import { categoryType } from './enums';
export declare class utils {
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
    static fv(input: Record<string | number | symbol, any>, query: string, shallow?: boolean): unknown[];
    static hms2ms(input: string): number;
    static createApiContext(ytcfg: ytcfgInterface): {
        context: {
            capabilities: {};
            client: {
                clientName: string | undefined;
                clientVersion: string | undefined;
                experimentIds: never[];
                experimentsToken: string;
                gl: string | undefined;
                hl: string | undefined;
                locationInfo: {
                    locationPermissionAuthorizationStatus: string;
                };
                musicAppInfo: {
                    musicActivityMasterSwitch: string;
                    musicLocationMasterSwitch: string;
                    pwaInstallabilityStatus: string;
                };
                utcOffsetMinutes: number;
            };
            request: {
                internalExperimentFlags: {
                    key: string;
                    value: string;
                }[];
                sessionIndex: {};
            };
            user: {
                enableSafetyMode: boolean;
            };
        };
    };
    static buildEndpointContext(typeName: string, browseId: string): {
        browseEndpointContextSupportedConfigs: {
            browseEndpointContextMusicConfig: {
                pageType: string;
            };
        };
        browseId: string;
    };
    /**
     * Extracts artist from flexColumn[1];
     * @param runsArray array that complies with flexColumn[1] style
     * @param delimiter any delimiter but ' • ' seems to be the default
     */
    static artistParser(runsArray: Run[], delimiter?: string): Artist[];
    /**
     * Parses the album from the flexcolumn, if can
     * @param runsArray
     * @param delimiter
     */
    static albumParser(runsArray: Run[], delimiter?: string): Album;
    /**
     * Gets the thumbnail from the sectionList
     * @param sectionContext
     */
    static thumbnailParser(sectionContext: any): Thumbnails[];
    /**
     * Gets the playlist count and extracts them
     * @param flexColumn
     */
    static playlistCountExtractor(flexColumn: Run[]): number;
    static parseTypeName(typeName: string): categoryType;
}
