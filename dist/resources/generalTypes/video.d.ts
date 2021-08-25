import { Item } from '../../blocks/item.js';
import type { Artist } from './artist.js';
export declare class Video extends Item {
    title: string;
    videoId: string;
    url: string;
    author: Artist[];
    length: number;
    views: number;
}
