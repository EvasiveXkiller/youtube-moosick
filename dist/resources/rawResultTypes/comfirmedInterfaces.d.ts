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
