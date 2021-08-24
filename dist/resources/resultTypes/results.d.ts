import { Item } from '../../blocks/item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResult } from './searchResults';
import type { NextContinuationData } from '../rawResultTypes/common';
export declare class Results extends Item {
    result?: VideoSearchResult | AlbumSearchResult | ArtistSearchResult | PlaylistSearchResult | (Unsorted | null)[];
    continuation?: NextContinuationData;
}
export declare class Unsorted extends Item {
    content: any[];
}
