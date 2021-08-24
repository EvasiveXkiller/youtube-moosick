import { Category } from '../../enums';
import { Item } from '../../blocks/item';
import type { Thumbnails } from './thumbnails';
import type { Artist } from './artist';
import type { Album } from './album';
export declare class Song extends Item {
    type?: Category;
    name: string;
    videoId: string;
    url: string;
    playlistId: string;
    artist: Artist[];
    album: Album[];
    duration: number;
    thumbnails: Thumbnails[];
    params: any;
}
