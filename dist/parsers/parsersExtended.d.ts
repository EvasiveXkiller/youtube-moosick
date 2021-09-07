import { Album, AlbumExtended } from '../resources/generalTypes/album.js';
import { Category } from '../enums.js';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist.js';
import type { Video } from '../resources/generalTypes/video.js';
import type { Song } from '../resources/generalTypes/song.js';
import type { Run } from '../resources/etc/rawResultTypes/common.js';
import type { Playlist } from '../resources/generalTypes/playlist.js';
import type { Thumbnails } from '../resources/generalTypes/thumbnails.js';
/**
 * Extended parser that is used wherever possible
 */
export declare class ParsersExtended {
    static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.ARTIST, trim: boolean): Pick<ArtistExtended, 'subs'>;
    static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.VIDEO, trim: boolean): Pick<Video, 'author' | 'views' | 'length'>;
    static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.SONG, trim: boolean): Pick<Song, 'artist' | 'album' | 'duration'>;
    static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Pick<AlbumExtended, 'year'>;
    static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.PLAYLIST, trim: boolean): Pick<Playlist, 'trackCount' | 'author'>;
    /**
     * Gets the thumbnail from the sectionList
     * @param sectionContext - Section context
     */
    static thumbnailParser(sectionContext: any): Thumbnails[];
    /**
     * Parses the artist from the Artist array
     * @param artistRaw - The raw runs of artist
     */
    static artistParser(artistRaw: Run[]): Artist[];
    /**
     * Parses the album from the Album Array
     * @param albumRaw - The raw runs of album
     */
    static albumParser(albumRaw: Run[]): Album[];
}
//# sourceMappingURL=parsersExtended.d.ts.map