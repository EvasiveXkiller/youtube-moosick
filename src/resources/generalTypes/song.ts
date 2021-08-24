import { CategoryType } from '../../enums';
import { Item } from '../../item';
import type { Thumbnails } from './thumbnails';
import type { Artist } from './artist';
import type { Album } from './album';

export class Song extends Item {
	public type?: CategoryType = CategoryType.SONG;
	public declare name: string;
	public declare videoId: string;
	public declare URL: string;
	public declare playlistId: string;
	public declare artist: Artist[];
	public declare album: Album[];
	public declare duration: number;
	public declare thumbnails: Thumbnails[];
	public declare params: any;
}
