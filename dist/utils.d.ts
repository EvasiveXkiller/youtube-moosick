export declare class utils {
    static fv(input: any, query: any, justOne?: boolean): any;
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
    static buildEndpointContext(typeName: any, browseId: any): {
        browseEndpointContextSupportedConfigs: {
            browseEndpointContextMusicConfig: {
                pageType: string;
            };
        };
        browseId: any;
    };
}
