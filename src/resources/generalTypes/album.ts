import { Item } from '../../blocks/item';
import type { Thumbnails } from './thumbnails';
import type { Artist } from './artist';

export class Album extends Item {
	public declare name: string;
	public declare browseId: string;
	public declare url: string;
}

export class AlbumExtended extends Album {
	public declare thumbnails: Thumbnails[];
	public declare year: number;
	public declare artist: Artist[];
}
