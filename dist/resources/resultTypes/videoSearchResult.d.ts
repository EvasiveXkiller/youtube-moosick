import { Item } from '../../item';
import type { categoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';
export declare class VideoSearchResult extends Item {
    type: categoryType;
    name: string;
    videoId: string;
    url: string;
    author: Artist[];
    views: string;
    duration: number;
}
