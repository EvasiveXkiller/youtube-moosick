import { Item } from '../../blocks/item.js';
import type { Album } from './album.js';
import type { Artist } from './artist.js';
import type { Playlist } from './playlist.js';
import type { Song } from './song.js';
import type { Video } from './video.js';

export class Unsorted extends Item {
	public declare albums: Album[];
	public declare videos: Video[];
	public declare playlists: Playlist[];
	public declare artist: Artist[];
	public declare songs: Song[];
}
