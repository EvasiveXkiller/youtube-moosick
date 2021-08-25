import { Item } from '../../blocks/item.js';
import type { ThumbnailElement } from '../rawResultTypes/common.js';

export class Thumbnails extends Item implements ThumbnailElement {
	public declare url: string;
	public declare width: number;
	public declare height: number;
}
