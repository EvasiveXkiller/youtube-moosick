import { Item } from '../../blocks/item.js';
import type { ArtistExtended } from '../generalTypes/artist.js';
import type { Thumbnails } from '../generalTypes/thumbnails.js';

export class AlbumURL extends Item {
	public declare title: string;
	public declare description: string;
	public declare trackCount: number;
	public declare date: ReleaseDate;
	public declare duration: number;
	public declare artist: ArtistExtended[];
	public declare tracks: Track[];
	public declare thumbnails: Thumbnails[];
}

export class ReleaseDate extends Item {
	public declare year: number;
	public declare month: number;
	public declare day: number;
}

export class Track extends Item {
	public declare index: number;
	public declare title: string;
	public declare videoId: string;
	public declare lengthMs: number;
}
