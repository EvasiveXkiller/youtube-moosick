import { CategoryType } from '../../enums';
import { Item } from '../../item';
import type { Thumbnails } from '../generalTypes/thumbnails';
import type { Artist } from '../generalTypes/artist';
import type { Album } from '../generalTypes/album';

export class SongSearchResult extends Item {
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
