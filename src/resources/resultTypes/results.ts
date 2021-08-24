import { Item } from '../../blocks/item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResult } from './searchResults';
import type { NextContinuationData } from '../rawResultTypes/common';

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
