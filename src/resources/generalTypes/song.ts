import { Category } from '../../enums';
import { Item } from '../../blocks/item';
import type { Thumbnails } from './thumbnails';
import type { Artist } from './artist';
import type { Album } from './album';

export class Song extends Item {
	public type?: Category = Category.SONG;
	public declare name: string;
	public declare videoId: string;
	public declare url: string;
	public declare playlistId: string;
	public declare artist: Artist[];
	public declare album: Album[];
	public declare duration: number;
	public declare thumbnails: Thumbnails[];
	public declare params: any;
}
