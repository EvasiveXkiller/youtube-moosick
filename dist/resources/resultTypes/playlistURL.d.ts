import { Item } from '../../item';
import type { Artist } from '../generalTypes/artist';
import type { Thumbnails } from '../generalTypes/thumbnails';
export declare class PlaylistURL extends Item {
    headers: PlaylistHeader;
    playlistContents: PlaylistContent[];
    continuation: continuation;
}
export declare class PlaylistContent extends Item {
    trackTitle: string;
    trackId: string;
    artist: Artist[];
    thumbnail: Thumbnails[];
}
export declare class PlaylistHeader extends Item {
    playlistName: string;
    owner: string;
    createdYear: number;
    thumbnail: Thumbnails[];
    songCount: number;
    approxRunTime: string;
}
export interface continuation {
    continuation: string;
    clickTrackingParams: string;
}
