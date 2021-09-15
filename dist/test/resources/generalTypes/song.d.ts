import { Category } from '../../enums.js';
import { Item } from '../../blocks/item.js';
import type { Thumbnails } from './thumbnails.js';
import type { Artist } from './artist.js';
import type { Album } from './album.js';
export declare class Song extends Item {
    type?: Category;
    name: string;
    videoId: string;
    url: string;
    playlistId?: string;
    artist: Artist[];
    album: Album[];
    duration: number;
    thumbnails: Thumbnails[];
    params: any;
}
//# sourceMappingURL=song.d.ts.map