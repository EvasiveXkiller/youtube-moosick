import { Item } from '../../blocks/item.js';
import type { Artist } from '../generalTypes/artist.js';
import type { Thumbnails } from '../generalTypes/thumbnails.js';

export class ArtistURL extends Item {
	public declare headers: ArtistHeader;
	public declare artistContents: ArtistContent;
}

export class ArtistContent extends Item {
	public declare albums: Albums[];
	public declare single: Single[];
	public declare videos: Videos[];
}

export class ArtistHeader extends Item {
	public declare artistName: string;
	public declare totalSubscribers: string;
	public declare description: string;
	public declare thumbnails: Thumbnails[];
}

export class Albums extends Item {
	public declare title: string;
	public declare browseId: string;
	public declare URL: string;
	public declare year: number;
	public declare thumbnails: Thumbnails[];
}

export class Single extends Item {
	public declare title: string;
	public declare browseId: string;
	public declare URL: string;
	public declare year: number;
	public declare thumbnails: Thumbnails[];
}

export class Videos extends Item {
	public declare title: string;
	public declare videoId: string;
	public declare URL: string;
	public declare playlistId: string;
	public declare views: number;
	public declare author: Artist[];
	public declare thumbnails: Thumbnails[];
}
