import { ArtistURL } from '../resources/resultTypes/artistURL.js';
import type { ArtistURLFullResult } from '../resources/rawResultTypes/rawGetArtistURL.js';
export declare class GetArtistParser {
    static parseArtistURLPage(context: ArtistURLFullResult): ArtistURL;
    private static parseMusicThumbnailRenderer;
    private static parseArtistFromVideos;
}
