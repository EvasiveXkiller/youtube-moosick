import type { Song } from '../generalTypes/song';
import { Item } from '../../item';
import type { AlbumSearchResult, PlaylistSearchResult, VideoSearchResult, ArtistSearchResults } from './searchResults';

export class Results extends Item {
	public declare results: Song |
	VideoSearchResult |
	AlbumSearchResult |
	ArtistSearchResults |
	PlaylistSearchResult |
	null[] | Unsorted[] | undefined;

	public declare continuation: string | undefined;
}

export class Unsorted extends Item {
	// Make this only accept the stuff above
	public declare content: any[];
}
