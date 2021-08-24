import type { Song } from '../generalTypes/song';
import { Item } from '../../item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResults } from './searchResults';
export declare class Results extends Item {
    results: Song | VideoSearchResult | AlbumSearchResult | ArtistSearchResults | PlaylistSearchResult | null[] | Unsorted[] | undefined;
    continuation: string | undefined;
}
export declare class Unsorted extends Item {
    content: any[];
}
