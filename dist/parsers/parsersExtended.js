import { Category, ConstantURLs } from '../enums.js';
import { Artist } from '../resources/generalTypes/artist.js';
import { Album } from '../resources/generalTypes/album.js';
import lib from '../node_modules/object-scan/lib/index.js';
import { utils } from '../utils.js';
import { IllegalArgumentError } from '../resources/errors/illegalArgument.error.js';

class ParsersExtended {
    static flexSecondRowComplexParser(runsArray, categoryType, trim) {
        const delimiter = ' • ';
        const type = categoryType ?? runsArray[0].text;
        let artist = [];
        if (trim) {
            runsArray.splice(0, 2);
        }
        const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
        if (positions.length !== 0) {
            artist = this.artistParser(runsArray.slice(0, positions[0]));
        }
        switch (type) {
            case Category.SONG:
                return {
                    artist,
                    album: this.albumParser(runsArray.slice(positions[0] + 1, positions[1])),
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
                    year: Number(runsArray[runsArray.length - 1].text),
                };
            case Category.PLAYLISTS:
                return {
                    trackCount: Number(runsArray[runsArray.length - 1].text),
                    author: artist,
                };
            case Category.ARTIST:
                return {
                    subs: Number(runsArray[runsArray.length - 1].text),
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
        return lib(['**.musicThumbnailRenderer.**.thumbnails'], {
            rtn: 'value',
            reverse: false,
        })(sectionContext);
    }
    /**
     * Parses the artist from the Artist array
     * @param artistRaw
     */
    static artistParser(artistRaw) {
        return artistRaw.map((artist) => (Artist.from({
            name: artist.text,
            browseId: artist.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: ConstantURLs.CHANNEL_URL + String(artist.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
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

export { ParsersExtended };
//# sourceMappingURL=parsersExtended.js.map
