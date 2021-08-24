import { Item } from '../../item';
import type { ThumbnailElement } from '../rawResultTypes/comfirmedInterfaces';
export declare class Thumbnails extends Item implements ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
