import { Item } from '../../item';
import type { categoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';
export declare class PlaylistSearchResult extends Item {
    type: categoryType;
    title: string;
    playlistId: string;
    url: string;
    author: Artist[];
    count: number;
}
