import { Category } from '../../enums.js';
import { Item } from '../../blocks/item.js';
import type { Thumbnails } from './thumbnails.js';
import type { Artist } from './artist.js';
import type { Album } from './album.js';

export class Song extends Item {
	public type?: Category = Category.SONG;
	public declare name: string;
	public declare videoId: string;
	public declare url: string;
	public declare playlistId?: string;
	public declare artist: Artist[];
	public declare album: Album[];
	public declare duration: number;
	public declare thumbnails: Thumbnails[];
	public declare params: any;
}
