import { Item } from '../../blocks/item.js';
import type { Artist } from './artist.js';

export class Playlist extends Item {
	public declare name: string;
	public declare browseId: string;
	public declare author: Artist[];
	public declare trackCount: number;
}
