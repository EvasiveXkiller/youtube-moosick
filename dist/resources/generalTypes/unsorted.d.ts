import { Factory } from '../../blocks/item.js';
import type { AlbumExtended } from './album.js';
import type { ArtistExtended } from './artist.js';
import { ContinuableResult } from './continuableResult.js';
import type { Playlist } from './playlist.js';
import type { Song } from './song.js';
import type { Video } from './video.js';
export declare type UnsortedSubTypes = Video | Song | Playlist | ArtistExtended | AlbumExtended;
export declare class UnsortedFactory extends Factory<Unsorted, Pick<Unsorted, Exclude<keyof Unsorted, keyof any[]>>> {
    constructor();
}
export declare class Unsorted extends Array<UnsortedSubTypes> {
    albums: AlbumExtended[];
    videos: Video[];
    playlists: Playlist[];
    artist: ArtistExtended[];
    songs: Song[];
}
export interface ContinuableUnsorted extends ContinuableResult<UnsortedSubTypes>, Unsorted {
}
export declare class ContinuableUnsorted extends ContinuableResult<UnsortedSubTypes> {
}
//# sourceMappingURL=unsorted.d.ts.map