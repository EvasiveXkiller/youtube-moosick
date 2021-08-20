import type { categoryType } from "../../enums";
import type { thumbnails } from "../generalTypes/thumbnails";
export declare class songSearchResult {
    type: categoryType;
    name: string;
    videoId: string;
    URL: string;
    playlistId: string;
    artist: unknown[];
    album: unknown[];
    duration: number;
    thumbnails: Array<thumbnails>;
    params: any;
    constructor(type: categoryType, name: string, videoId: string, URL: string, playlistId: string, artist: unknown[], album: unknown[], duration: number, thumbnails: Array<thumbnails>, params: any);
}
