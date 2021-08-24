import { Item } from '../../item';
import type { Thumbnails } from './thumbnails';

export class Artist extends Item {
	public declare name: string;
	public declare id: string;
	public declare url: string;
}

export class ArtistExtended extends Artist {
	public declare thumbnails: Thumbnails[];
	public subs?: number;
}
