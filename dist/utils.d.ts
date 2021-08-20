export declare class utils {
    /**
     * fv (FieldVisitor)
     * Traverses an object through a colon-delimited query path & returns the values of its prop/field
     * @param input An input record
     * @param query A colon delimited string
     * @param shallow If false, recurses through object to find any nested object's prop/field value which matches the query
     * @example
     * ```js
     * 	const input = { a: { b: { c: 1 } } };
     *
     * 	fv(input, 'a:b:c', false); // result === 1
     * ```
     * */
    static fv(input: Record<string | number | symbol, any>, query: string, shallow?: boolean): unknown[];
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
    static parseTypeName(typeName: string): void;
}
