import { Item } from '../../item';
import type { ThumbnailElement } from '../rawResultTypes/comfirmedInterfaces';

export class Thumbnails extends Item implements ThumbnailElement {
	public declare url: string;
	public declare width: number;
	public declare height: number;
}
