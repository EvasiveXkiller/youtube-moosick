import { AlbumURL } from '../resources/resultTypes/albumURL';
import type { AlbumURLFullResult } from '../resources/rawResultTypes/rawGetAlbumURL';
export declare class GetAlbumParser {
    static parseAlbumURLPage(context: AlbumURLFullResult): AlbumURL;
    private static thumbnailParser;
}
