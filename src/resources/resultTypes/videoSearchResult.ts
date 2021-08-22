import { Item } from '../../item';
import type { categoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';

export class VideoSearchResult extends Item {
	public declare type: categoryType;
	public declare name: string;
	public declare videoId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare views: string;
	public declare duration: number;
}
