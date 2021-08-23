import { Item } from '../../item';
import { Artist } from '../generalTypes/artist';
import type { Thumbnails } from '../generalTypes/thumbnails';

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

export class ArtistExtended extends Artist {
	public declare thumbnails: Thumbnails[];
}
