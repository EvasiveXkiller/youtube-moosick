import { Item } from '../../item';
import type { Category } from '../../enums';
import type { Artist } from '../generalTypes/artist';

export class AlbumSearchResult {

}

export class ArtistSearchResults {

}

export class PlaylistSearchResult extends Item {
	public declare type: Category;
	public declare title: string;
	public declare playlistId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare count: number;
}

export class VideoSearchResult extends Item {
	public declare type: Category;
	public declare name: string;
	public declare videoId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare views: string;
	public declare duration: number;
}
