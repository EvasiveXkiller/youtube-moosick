import { Item } from '../../item';
import type { Artist } from './artist';
export declare class Video extends Item {
    title: string;
    videoId: string;
    url: string;
    author: Artist[];
    length: number;
    views: number;
}
