import { Item } from '../../item';
import type { Artist } from '../generalTypes/artist';
import type { Thumbnails } from '../generalTypes/thumbnails';
export declare class ArtistURL extends Item {
    headers: ArtistHeader;
    artistContents: ArtistContent;
}
export declare class ArtistContent extends Item {
    albums: Albums[];
    single: Single[];
    videos: Videos[];
}
export declare class ArtistHeader extends Item {
    artistName: string;
    totalSubscribers: string;
    description: string;
    thumbnails: Thumbnails[];
}
export declare class Albums extends Item {
    title: string;
    browseId: string;
    URL: string;
    year: number;
    thumbnails: Thumbnails[];
}
export declare class Single extends Item {
    title: string;
    browseId: string;
    URL: string;
    year: number;
    thumbnails: Thumbnails[];
}
export declare class Videos extends Item {
    title: string;
    videoId: string;
    URL: string;
    playlistId: string;
    views: number;
    author: Artist[];
    thumbnails: Thumbnails[];
}
