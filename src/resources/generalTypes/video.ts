import { Item } from '../../blocks/item.js';
import type { Artist } from './artist.js';
import type { Thumbnails } from './thumbnails.js';

export class Video extends Item {
	public declare name: string;
	public declare videoId: string;
	public declare url: string;
	public declare author: Artist[];
	public declare length: number;
	public declare views: number;
	public thumbnails?: Thumbnails[];
}

