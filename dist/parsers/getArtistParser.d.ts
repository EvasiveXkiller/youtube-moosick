import { ArtistURL } from '../resources/resultTypes/artistURL';
import type { ArtistURLFullResult } from '../resources/rawResultTypes/rawGetArtistURL';
export declare class GetArtistParser {
    static parseArtistURLPage(context: ArtistURLFullResult): ArtistURL;
    private static parseMusicThumbnailRenderer;
    private static parseArtistFromVideos;
}
