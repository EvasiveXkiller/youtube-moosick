export interface RawGetSearchSuggestions {
    responseContext: ResponseContext;
    trackingParams: string;
    contents: RawGetSearchSuggestionsContent[];
}
export interface RawGetSearchSuggestionsContent {
    searchSuggestionsSectionRenderer: SearchSuggestionsSectionRenderer;
}
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
    runs: Run[];
}
export interface Run {
    text: string;
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
