import type {categoryType} from "../../enums";
import type {thumbnails} from "../generalTypes/thumbnails";

export class songSearchResult {
    type: categoryType
    name: string
    videoId: string
    URL: string
    playlistId: string
    artist: unknown[]
    album: unknown[]
    duration: number
    thumbnails: Array<thumbnails>
    params: any

    constructor(type: categoryType,
                name: string,
                videoId: string,
                URL: string,
                playlistId: string,
                artist: unknown[],
                album: unknown[],
                duration: number,
                thumbnails: Array<thumbnails>,
                params: any
    ) {
        this.type = type;
        this.name = name;
        this.videoId = videoId;
        this.URL = URL;
        this.playlistId = playlistId;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.thumbnails = thumbnails;
        this.params = params;
    }
}