import type { BrowseEndpoint, WatchEndpoint } from './general/generalSearchSong';
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
export interface PurpleRun {
    text: string;
    navigationEndpoint?: RunNavigationEndpoint;
}
export interface RunNavigationEndpoint {
    clickTrackingParams: string;
    watchEndpoint?: WatchEndpoint;
    browseEndpoint?: BrowseEndpoint;
}
