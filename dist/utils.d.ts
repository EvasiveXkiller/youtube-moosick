export declare class utils {
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
    static fv<T extends Record<string, any>>(input: T, query: string): unknown;
    static hms2ms(input: string): number;
    static createApiContext(ytcfg: any): {
        context: {
            capabilities: {};
            client: {
                clientName: any;
                clientVersion: any;
                experimentIds: never[];
                experimentsToken: string;
                gl: any;
                hl: any;
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
}
