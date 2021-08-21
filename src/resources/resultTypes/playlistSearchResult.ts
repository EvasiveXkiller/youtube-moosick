import { Item } from '../../item';
import type { categoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';

export class PlaylistSearchResult extends Item {
	public declare type: categoryType;
	public declare title: string;
	public declare playlistId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare count: number;
}
