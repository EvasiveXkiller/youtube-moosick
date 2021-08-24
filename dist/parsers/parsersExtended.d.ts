import type { PurpleRun } from '../resources/rawResultTypes/comfirmedInterfaces';
import { Category } from '../enums';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist';
import type { Video } from '../resources/generalTypes/video';
import type { Song } from '../resources/generalTypes/song';
import { Album } from '../resources/generalTypes/album';
import type { Thumbnails } from '../resources/generalTypes/thumbnails';
export declare class ParsersExtended {
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ARTIST, trim: boolean): Partial<ArtistExtended>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.VIDEO, trim: boolean): Partial<Video>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.SONG, trim: boolean): Partial<Song>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Partial<Album>;
    /**
     * Gets the thumbnail from the sectionList
     * @param sectionContext
     */
    static thumbnailParser(sectionContext: any): Thumbnails[];
    /**
     * Parses the artist from the Artist array
     * @param artistRaw
     */
    static artistParser(artistRaw: PurpleRun[]): Artist[];
    /**
     * Parses the album from the Album Array
     * @param albumRaw
     */
    static albumParser(albumRaw: PurpleRun[]): Album[];
}
