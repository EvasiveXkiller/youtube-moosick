import { Item } from '../../blocks/item';
import type { Thumbnails } from './thumbnails';
export declare class Artist extends Item {
    name: string;
    browseId: string;
    url: string;
}
export declare class ArtistExtended extends Artist {
    thumbnails: Thumbnails[];
    subs?: number;
}
