import { $ } from '../resources/utilities/objectScan.utility.js';
import { Album } from '../resources/generalTypes/album.js';
import { Category, ConstantURLs, FlexColumnOffset, FlexSecondRowOffset } from '../enums.js';
import { Artist } from '../resources/generalTypes/artist.js';
import { utils } from '../utils.js';
import { IllegalArgumentError } from '../resources/errors/index.js';
export class ParsersExtended {
    static flexSecondRowComplexParser(runsArray, categoryType, trim) {
        const delimiter = ' • ';
        const type = categoryType ?? runsArray[FlexColumnOffset.MAIN].text;
        let artist = [];
        if (!trim) {
            runsArray.splice(0, 2);
        }
        const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
        if (positions.length !== 0) {
            artist = this.artistParser(runsArray.slice(0, positions[FlexSecondRowOffset.ARTIST]));
        }
        switch (type) {
            case Category.SONG:
                return {
                    artist,
                    album: this.albumParser(runsArray.slice(positions[FlexSecondRowOffset.ARTIST] + 1, positions[FlexSecondRowOffset.OTHERS])),
                    duration: utils.hms2ms(runsArray[runsArray.length - 1].text),
                };
            case Category.VIDEO:
                return {
                    author: artist,
                    views: utils.hms2ms(runsArray[positions[0] + 1].text),
                    length: utils.hms2ms(runsArray[runsArray.length - 1].text),
                };
            case Category.EP:
            case Category.SINGLE:
            case Category.ALBUM:
                return {
                    artist,
                    year: Number(runsArray[runsArray.length - 1].text),
                };
            case Category.PLAYLIST:
                return {
                    trackCount: parseInt(runsArray[runsArray.length - 1].text, 10),
                    author: artist,
                };
            case Category.ARTIST:
                return {
                    subs: runsArray[runsArray.length - 1].text,
                };
            default:
                throw new IllegalArgumentError('Unrecognized category', 'categoryType');
        }
    }
    /**
     * Gets the thumbnail from the sectionList
     * @param sectionContext
     */
    static thumbnailParser(sectionContext) {
        return $('.musicThumbnailRenderer .thumbnails')(sectionContext);
    }
    /**
     * Parses the artist from the Artist array
     * @param artistRaw
     */
    static artistParser(artistRaw) {
        const artistFiltered = artistRaw.filter((artist) => artist.navigationEndpoint !== undefined);
        return artistFiltered.map((artist) => (Artist.from({
            name: artist.text,
            browseId: artist.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: artist.navigationEndpoint?.browseEndpoint?.browseId === ''
                ? ''
                : ConstantURLs.CHANNEL_URL + String(artist.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
        })));
    }
    /**
     * Parses the album from the Album Array
     * @param albumRaw
     */
    static albumParser(albumRaw) {
        return albumRaw.map((album) => (Album.from({
            name: album.text,
            browseId: album.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: ConstantURLs.CHANNEL_URL + String(album.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
        })));
    }
}
//# sourceMappingURL=parsersExtended.js.map