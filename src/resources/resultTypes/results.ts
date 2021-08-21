import type { SongSearchResult } from './songSearchResult';
import type { VideoSearchResult } from './videoSearchResult';
import type { AlbumSearchResult } from './albumSearchResult';
import type { ArtistSearchResults } from './artistSearchResults';
import type { PlaylistSearchResult } from './playlistSearchResult';

export class results {
	private _results: SongSearchResult |
	VideoSearchResult |
	AlbumSearchResult |
	ArtistSearchResults |
	PlaylistSearchResult |
	null[] | undefined;

	private _continuation: string | undefined;

	constructor(results?: SongSearchResult |
	VideoSearchResult |
	AlbumSearchResult |
	ArtistSearchResults |
	PlaylistSearchResult |
	null[]
	, continuation?: string | undefined) {
		this._results = results;
		this._continuation = continuation;
	}

	get continuation(): string | undefined {
		return this._continuation;
	}

	set continuation(value: string | undefined) {
		this._continuation = value;
	}

	get results(): SongSearchResult | VideoSearchResult | AlbumSearchResult | ArtistSearchResults | PlaylistSearchResult | null[] | undefined {
		return this._results;
	}

	set results(value: SongSearchResult | VideoSearchResult | AlbumSearchResult | ArtistSearchResults | PlaylistSearchResult | null[] | undefined) {
		this._results = value;
	}
}
