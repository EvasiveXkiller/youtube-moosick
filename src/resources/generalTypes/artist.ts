import { Item } from '../../blocks/item.js';
import type { Thumbnails } from './thumbnails.js';

export class Artist extends Item {
	public declare name: string;
	public declare browseId: string;
	public declare url: string;
}

export class ArtistExtended extends Artist {
	public declare thumbnails: Thumbnails[];
	public subs?: string;
}
