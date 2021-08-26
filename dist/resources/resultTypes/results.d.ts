import { Item } from '../../blocks/item.js';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResult } from './searchResults.js';
import type { NextContinuationData } from '../rawResultTypes/common.js';
export declare class Results extends Item {
    result?: VideoSearchResult | AlbumSearchResult | ArtistSearchResult | PlaylistSearchResult | (Unsorted | null)[];
    continuation?: NextContinuationData;
}
export declare class Unsorted extends Item {
    content: any[];
}
