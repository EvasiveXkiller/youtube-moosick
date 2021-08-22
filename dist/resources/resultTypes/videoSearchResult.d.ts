import { Item } from '../../item';
import type { CategoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';
export declare class VideoSearchResult extends Item {
    type: CategoryType;
    name: string;
    videoId: string;
    url: string;
    author: Artist[];
    views: string;
    duration: number;
}
