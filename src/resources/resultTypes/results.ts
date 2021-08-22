import type { SongSearchResult } from './songSearchResult';
import type { VideoSearchResult } from './videoSearchResult';
import type { AlbumSearchResult } from './albumSearchResult';
import type { ArtistSearchResults } from './artistSearchResults';
import type { PlaylistSearchResult } from './playlistSearchResult';
import { Item } from '../../item';

export class Results extends Item {
	public declare results: SongSearchResult |
	VideoSearchResult |
	AlbumSearchResult |
	ArtistSearchResults |
	PlaylistSearchResult |
	null[] | undefined;

	public declare continuation: string | undefined;
}
