import { Item } from '../../blocks/item.js';
import type { Category } from '../../enums.js';
import type { Artist } from '../generalTypes/artist.js';

export class AlbumSearchResult {

}

export class ArtistSearchResult {

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
