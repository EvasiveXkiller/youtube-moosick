import type { SongSearchResult } from './songSearchResult';
import type { VideoSearchResult } from './videoSearchResult';
import type { AlbumSearchResult } from './albumSearchResult';
import type { ArtistSearchResults } from './artistSearchResults';
import type { PlaylistSearchResult } from './playlistSearchResult';
import { Item } from '../../item';
export declare class Results extends Item {
    results: SongSearchResult | VideoSearchResult | AlbumSearchResult | ArtistSearchResults | PlaylistSearchResult | null[] | undefined;
    continuation: string | undefined;
}
