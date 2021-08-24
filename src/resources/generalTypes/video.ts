import { Item } from '../../blocks/item';
import type { Artist } from './artist';

export class Video extends Item {
	public declare title: string;
	public declare videoId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare length: number;
	public declare views: number;
}
