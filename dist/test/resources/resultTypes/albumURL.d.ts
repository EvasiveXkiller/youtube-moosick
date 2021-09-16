import { Item } from '../../blocks/item.js';
import type { Thumbnails, Artist } from '../generalTypes/index.js';
export declare class AlbumURL extends Item {
    AlbumURLHeader: AlbumURLHeader;
    tracks: Track[];
}
export declare class AlbumURLHeader extends Item {
    title: string;
    description: string;
    trackCount: number;
    thumbnails: Thumbnails[];
    date: string;
    totalRuntime: string;
    artist: Artist[];
}
export declare class Track extends Item {
    title: string;
    videoId: string;
    url: string;
    playlistId: string;
    lengthMs: number;
}
//# sourceMappingURL=albumURL.d.ts.map