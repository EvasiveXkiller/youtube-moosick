import { Item } from '../../blocks/item.js';
import type { Artist } from '../generalTypes/artist.js';
import type { Thumbnails } from '../generalTypes/thumbnails.js';

export class PlaylistURL extends Item {
	public declare headers: PlaylistHeader;
	public declare playlistContents: PlaylistContent[];
	public declare continuation: Continuation;
}

export class PlaylistContent extends Item {
	public declare trackTitle: string;
	public trackId?: string;
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

export interface Continuation {
	continuation: string;
	clickTrackingParams: string;
}
