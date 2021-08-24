import { Item } from '../../item';
import type { Thumbnails } from './thumbnails';
import type { Artist } from './artist';
export declare class Album extends Item {
    name: string;
    browseId: string;
    url: string;
}
export declare class AlbumExtended extends Album {
    thumbnails: Thumbnails[];
    year: number;
    artist: Artist[];
}
