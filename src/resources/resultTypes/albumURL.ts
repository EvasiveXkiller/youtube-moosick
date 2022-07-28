import { Item } from '../../blocks/item.js';
import type { Thumbnails, Artist } from '../generalTypes/index.js';

export class AlbumURL extends Item {
	public declare AlbumURLHeader: AlbumURLHeader;
	public declare tracks: Track[];
}

export class AlbumURLHeader extends Item {
	public declare title: string;
	public declare description?: string;
	public declare trackCount: number;
	public declare thumbnails: Thumbnails[];
	public declare date: string;
	public declare totalRuntime: string;
	public declare artist: Artist[];
}

export class Track extends Item {
	public declare title: string;
	public declare videoId: string;
	public declare url: string;
	public declare playlistId: string;
	public declare lengthMs: number;
}
