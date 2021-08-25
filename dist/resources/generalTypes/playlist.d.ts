import { Item } from '../../blocks/item';
import type { Artist } from './artist';
export declare class Playlist extends Item {
    name: string;
    browseId: string;
    author: Artist[];
    trackCount: number;
}
