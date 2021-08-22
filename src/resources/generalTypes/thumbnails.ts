import type { ThumbnailElement } from '../../songresultRaw';
import { Item } from '../../item';

export class Thumbnails extends Item implements ThumbnailElement {
	public declare url: string;
	public declare width: number;
	public declare height: number;
}
