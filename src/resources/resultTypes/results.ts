import { Item } from '../../blocks/item.js';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResult } from './searchResults.js';
import type { NextContinuationData } from '../rawResultTypes/common.js';

export class Results extends Item {
	public declare result?:
	| VideoSearchResult
	| AlbumSearchResult
	| ArtistSearchResult
	| PlaylistSearchResult
	| (Unsorted | null)[];

	public declare continuation?: NextContinuationData;
}

export class Unsorted extends Item {
	// Make this only accept the stuff above
	public declare content: any[];
}
