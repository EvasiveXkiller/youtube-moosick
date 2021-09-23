import type { EndpointlessRun, Result } from './common.js';
export interface SearchSuggestionsFullResult extends Result {
    responseContext: ResponseContext;
    contents: Contents;
}
export declare type Contents = {
    searchSuggestionsSectionRenderer: SearchSuggestionsSectionRenderer;
}[];
export interface SearchSuggestionsSectionRenderer {
    contents: SearchSuggestionsSectionRendererContent[];
}
export interface SearchSuggestionsSectionRendererContent {
    searchSuggestionRenderer: SearchSuggestionRenderer;
}
export interface SearchSuggestionRenderer {
    suggestion: Suggestion;
    navigationEndpoint: NavigationEndpoint;
    trackingParams: string;
    icon: Icon;
}
export interface Icon {
    iconType: string;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    searchEndpoint: SearchEndpoint;
}
export interface SearchEndpoint {
    query: string;
}
export interface Suggestion {
    runs: BoldableEndpointlessRun[];
}
export interface BoldableEndpointlessRun extends EndpointlessRun {
    bold?: boolean;
}
export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
}
export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}
export interface Param {
    key: string;
    value: string;
}
//# sourceMappingURL=rawGetSearchSuggestions.d.ts.map