import { Item } from '../../blocks/item';
import type { Thumbnails } from './thumbnails';

export class Artist extends Item {
	public declare name: string;
	public declare browseId: string;
	public declare url: string;
}

export class ArtistExtended extends Artist {
	public declare thumbnails: Thumbnails[];
	public subs?: number;
}
