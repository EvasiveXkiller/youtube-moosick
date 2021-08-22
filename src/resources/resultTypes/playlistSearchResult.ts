import { Item } from '../../item';
import type { CategoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';

export class PlaylistSearchResult extends Item {
	public declare type: CategoryType;
	public declare title: string;
	public declare playlistId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare count: number;
}
