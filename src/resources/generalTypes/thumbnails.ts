import type { Thumbnail } from '../../songresultRaw';
import { Item } from '../../item';

export class Thumbnails extends Item implements Thumbnail {
	public declare url: string;
	public declare width: number;
	public declare height: number;
}
