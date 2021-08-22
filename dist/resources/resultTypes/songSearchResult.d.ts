import { CategoryType } from '../../enums';
import { Item } from '../../item';
import type { Thumbnails } from '../generalTypes/thumbnails';
import type { Artist } from '../generalTypes/artist';
import type { Album } from '../generalTypes/album';
export declare class SongSearchResult extends Item {
    type?: CategoryType;
    name: string;
    videoId: string;
    URL: string;
    playlistId: string;
    artist: Artist[];
    album: Album[];
    duration: number;
    thumbnails: Thumbnails[];
    params: any;
}
