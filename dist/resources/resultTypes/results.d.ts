import { Item } from '../../blocks/item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResults } from './searchResults';
export declare class Results extends Item {
    result?: VideoSearchResult | AlbumSearchResult | ArtistSearchResults | PlaylistSearchResult | (Unsorted | null)[];
    continuation?: string;
}
export declare class Unsorted extends Item {
    content: any[];
}
