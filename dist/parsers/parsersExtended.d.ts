import { Album, AlbumExtended } from '../resources/generalTypes/album';
import { Category } from '../enums';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist';
import type { Video } from '../resources/generalTypes/video';
import type { Song } from '../resources/generalTypes/song';
import type { PurpleRun } from '../resources/rawResultTypes/comfirmedInterfaces';
import type { Playlist } from '../resources/generalTypes/playlist';
import type { Thumbnails } from '../resources/generalTypes/thumbnails';
export declare class ParsersExtended {
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ARTIST, trim: boolean): Pick<ArtistExtended, 'subs'>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.VIDEO, trim: boolean): Pick<Video, 'author' | 'views' | 'length'>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.SONG, trim: boolean): Pick<Song, 'artist' | 'album' | 'duration'>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Pick<AlbumExtended, 'year'>;
    static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.PLAYLISTS, trim: boolean): Pick<Playlist, 'trackCount' | 'author'>;
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
