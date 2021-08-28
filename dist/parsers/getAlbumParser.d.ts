import { AlbumURL } from '../resources/resultTypes/albumURL.js';
import type { AlbumURLFullResult } from '../resources/rawResultTypes/rawGetAlbumURL.js';
export declare class GetAlbumParser {
    static parseAlbumURLPage(context: AlbumURLFullResult): AlbumURL;
    private static thumbnailParser;
}
