import type { Thumbnail } from '../../songresultRaw';
import { Item } from '../../item';
export declare class Thumbnails extends Item implements Thumbnail {
    url: string;
    width: number;
    height: number;
}
