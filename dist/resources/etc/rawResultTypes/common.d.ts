export interface WatchEndpoint {
    videoId: string;
    playlistId: string;
    loggingContext: LoggingContext;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
    params?: WatchEndpointParams;
}
export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}
export interface VssLoggingContext {
    serializedContextData: string;
}
export declare enum WatchEndpointParams {
    WAEB = "wAEB"
}
export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
}
export interface WatchEndpointMusicConfig {
    musicVideoType: MusicVideoType;
}
export declare enum MusicVideoType {
    MusicVideoTypeAtv = "MUSIC_VIDEO_TYPE_ATV"
}
export interface BrowseEndpoint {
    browseId: string;
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}
export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}
export interface BrowseEndpointContextMusicConfig {
    pageType: PageType;
}
export declare enum PageType {
    MusicPageTypeAlbum = "MUSIC_PAGE_TYPE_ALBUM",
    MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST"
}
export interface Result {
    responseContext: any;
    trackingParams: string;
    contents: any;
}
export interface NextContinuationData {
    continuation: string;
    clickTrackingParams: string;
}
export interface MusicThumbnailRenderer {
    thumbnail: MusicThumbnailRendererThumbnail;
    thumbnailCrop: string;
    thumbnailScale: string;
    trackingParams: string;
}
export interface MusicThumbnailRendererThumbnail {
    thumbnails: ThumbnailElement[];
}
export interface ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
export interface RunNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: BrowseEndpoint;
}
export interface EndpointlessRun {
    text: string;
}
export interface EndpointlessText {
    runs: EndpointlessRun[];
}
export interface Text {
    runs: Run[];
}
export interface Run extends EndpointlessRun {
    navigationEndpoint: NavigationEndpoint;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
    browseEndpoint: BrowseEndpoint;
}
export interface MusicResponsiveListItemFlexColumnRenderer {
    text: Text;
    displayPriority: DisplayPriority;
}
export declare enum DisplayPriority {
    MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH",
    MusicResponsiveListItemColumnDisplayPriorityMedium = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_MEDIUM"
}
export interface FlexColumn {
    musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}
//# sourceMappingURL=common.d.ts.map