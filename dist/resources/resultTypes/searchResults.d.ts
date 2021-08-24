import { Item } from '../../item';
import type { Category } from '../../enums';
import type { Artist } from '../generalTypes/artist';
export declare class AlbumSearchResult {
}
export declare class ArtistSearchResults {
}
export declare class PlaylistSearchResult extends Item {
    type: Category;
    title: string;
    playlistId: string;
    url: string;
    author: Artist[];
    count: number;
}
export declare class VideoSearchResult extends Item {
    type: Category;
    name: string;
    videoId: string;
    url: string;
    author: Artist[];
    views: string;
    duration: number;
}
