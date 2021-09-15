import { Item } from '../../blocks/item.js';
import type { Thumbnails } from './thumbnails.js';
import type { Artist } from './artist.js';
export declare class Album extends Item {
    name: string;
    browseId: string;
    url: string;
}
export declare class AlbumExtended extends Album {
    thumbnails: Thumbnails[];
    year?: number;
    artist?: Artist[];
}
//# sourceMappingURL=album.d.ts.map