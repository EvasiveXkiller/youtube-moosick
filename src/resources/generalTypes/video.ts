import { Item } from '../../blocks/item.js';
import type { Artist } from './artist.js';

export class Video extends Item {
	public declare title: string;
	public declare videoId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare length: number;
	public declare views: number;
}
