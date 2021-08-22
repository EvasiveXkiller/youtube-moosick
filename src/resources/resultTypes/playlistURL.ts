import { Item } from '../../item';
import type { Artist } from '../generalTypes/artist';
import type { Thumbnails } from '../generalTypes/thumbnails';

export class PlaylistURL extends Item {
	public declare headers: PlaylistHeader;
	public declare playlistContent: PlaylistContent[];
}

export class PlaylistContent extends Item {
	public declare trackTitle: string;
	public declare trackId: string;
	public declare artist: Artist[];
	public declare thumbnail: Thumbnails[];
}

export class PlaylistHeader extends Item {
	public declare playlistName: string;
	public declare owner: string;
	public declare createdYear: number;
	public declare thumbnail: Thumbnails[];
	public declare songCount: number;
	public declare approxRunTime: string;
}
