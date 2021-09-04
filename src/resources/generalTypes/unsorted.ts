import { Factory } from '../../blocks/item.js';
import type { AlbumExtended } from './album.js';
import type { ArtistExtended } from './artist.js';
import { ContinuableResult } from './continuableResult.js';
import type { Playlist } from './playlist.js';
import type { Song } from './song.js';
import type { Video } from './video.js';

export type UnsortedSubTypes = Video | Song | Playlist | ArtistExtended | AlbumExtended;

export class UnsortedFactory extends Factory<
	Unsorted,
	Pick<Unsorted, Exclude<keyof Unsorted, keyof any[]>>
> {
	constructor() {
		super(Unsorted);
	}
}

export class Unsorted extends Array<UnsortedSubTypes> {
	public declare albums: AlbumExtended[];
	public declare videos: Video[];
	public declare playlists: Playlist[];
	public declare artist: ArtistExtended[];
	public declare songs: Song[];
}

export interface ContinuableUnsorted extends ContinuableResult<UnsortedSubTypes>, Unsorted {}
export class ContinuableUnsorted extends ContinuableResult<UnsortedSubTypes> {}
