import { Item } from '../../item';
import type { CategoryType } from '../../enums';
import type { Artist } from '../generalTypes/artist';
export declare class PlaylistSearchResult extends Item {
    type: CategoryType;
    title: string;
    playlistId: string;
    url: string;
    author: Artist[];
    count: number;
}
