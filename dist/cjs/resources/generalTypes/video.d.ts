import { Item } from '../../blocks/item.js';
import type { Artist } from './artist.js';
import type { Thumbnails } from './thumbnails.js';
export declare class Video extends Item {
    name: string;
    videoId: string;
    url: string;
    author: Artist[];
    length: number;
    views: number;
    thumbnails?: Thumbnails[];
}
//# sourceMappingURL=video.d.ts.map