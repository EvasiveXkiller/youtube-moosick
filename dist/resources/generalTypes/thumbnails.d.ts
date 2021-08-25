import { Item } from '../../blocks/item.js';
import type { ThumbnailElement } from '../rawResultTypes/comfirmedInterfaces.js';
export declare class Thumbnails extends Item implements ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
