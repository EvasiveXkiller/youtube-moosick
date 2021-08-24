import { AlbumURL } from '../resources/resultTypes/albumURL';
import type { RawGetAlbumURL } from '../resources/rawResultTypes/rawGetAlbumURL';
export declare class GetAlbumParser {
    static parseAlbumURLPage(context: RawGetAlbumURL): AlbumURL;
    private static thumbnailParser;
}
