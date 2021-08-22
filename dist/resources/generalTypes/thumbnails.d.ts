import type { ThumbnailElement } from '../../songresultRaw';
import { Item } from '../../item';
export declare class Thumbnails extends Item implements ThumbnailElement {
    url: string;
    width: number;
    height: number;
}
