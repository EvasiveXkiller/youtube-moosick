import type { Song } from '../generalTypes/song';
import { Item } from '../../blocks/item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResults } from './searchResults';

export class Results extends Item {
	public declare result?:
	| VideoSearchResult
	| AlbumSearchResult
	| ArtistSearchResults
	| PlaylistSearchResult
	| (Unsorted | null)[];

	public declare continuation?: string;
}

export class Unsorted extends Item {
	// Make this only accept the stuff above
	public declare content: any[];
}
