import { Item } from '../../blocks/item.js';
import type { Album } from './album.js';
import type { Artist } from './artist.js';
import type { Playlist } from './playlist.js';
import type { Song } from './song.js';
import type { Video } from './video.js';
export declare class Unsorted extends Item {
    albums: Album[];
    videos: Video[];
    playlists: Playlist[];
    artist: Artist[];
    songs: Song[];
}
//# sourceMappingURL=unsorted.d.ts.map