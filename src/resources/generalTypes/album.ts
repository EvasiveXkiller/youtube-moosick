import { Item } from '../../blocks/item.js';
import type { Thumbnails } from './thumbnails.js';
import type { Artist } from './artist.js';

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
