import { Item } from '../../blocks/item.js';
import type { Category } from '../../enums.js';
import type { Artist } from '../generalTypes/artist.js';
export declare class AlbumSearchResult {
}
export declare class ArtistSearchResult {
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
//# sourceMappingURL=searchResults.d.ts.map