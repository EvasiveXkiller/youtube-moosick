import { Item } from '../../blocks/item.js';
import type { ArtistExtended } from '../generalTypes/artist.js';
import type { Thumbnails } from '../generalTypes/thumbnails.js';
export declare class AlbumURL extends Item {
    title: string;
    description: string;
    trackCount: number;
    date: ReleaseDate;
    duration: number;
    artist: ArtistExtended[];
    tracks: Track[];
    thumbnails: Thumbnails[];
}
export declare class ReleaseDate extends Item {
    year: number;
    month: number;
    day: number;
}
export declare class Track extends Item {
    index: number;
    title: string;
    videoId: string;
    lengthMs: number;
}
