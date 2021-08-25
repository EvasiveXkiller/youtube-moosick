import type { BrowseEndpoint, WatchEndpoint } from './general/generalSearchSong.js';
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
export interface Run extends EndpointlessRun {
    navigationEndpoint: NavigationEndpoint;
}
export interface NavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint: WatchEndpoint;
    browseEndpoint: BrowseEndpoint;
}
