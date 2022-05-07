"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsersExtended = void 0;
const objectScan_utility_js_1 = require("../resources/utilities/objectScan.utility.js");
const album_js_1 = require("../resources/generalTypes/album.js");
const enums_js_1 = require("../enums.js");
const artist_js_1 = require("../resources/generalTypes/artist.js");
const utils_js_1 = require("../utils.js");
const index_js_1 = require("../resources/errors/index.js");
/**
 * Extended parser that is used wherever possible
 */
class ParsersExtended {
    static flexSecondRowComplexParser(runsArray, categoryType, trim) {
        const delimiter = ' • ';
        const type = categoryType ?? runsArray[enums_js_1.FlexColumnOffset.MAIN].text;
        let artist = [];
        if (!trim) {
            runsArray.splice(0, 2);
        }
        const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
        if (positions.length !== 0) {
            artist = this.artistParser(runsArray.slice(0, positions[enums_js_1.FlexSecondRowOffset.ARTIST]));
        }
        switch (type) {
            case enums_js_1.Category.SONG:
                return {
                    artist,
                    album: this.albumParser(runsArray.slice(positions[enums_js_1.FlexSecondRowOffset.ARTIST] + 1, positions[enums_js_1.FlexSecondRowOffset.OTHERS])),
                    duration: utils_js_1.utils.hms2ms(runsArray[runsArray.length - 1].text),
                };
            case enums_js_1.Category.VIDEO:
                return {
                    author: artist,
                    views: utils_js_1.utils.hms2ms(runsArray[positions[0] + 1].text),
                    length: utils_js_1.utils.hms2ms(runsArray[runsArray.length - 1].text),
                };
            case enums_js_1.Category.EP:
            case enums_js_1.Category.SINGLE:
            case enums_js_1.Category.ALBUM:
                return {
                    artist,
                    year: Number(runsArray[runsArray.length - 1].text),
                };
            case enums_js_1.Category.PLAYLIST:
                return {
                    trackCount: parseInt(runsArray[runsArray.length - 1].text, 10),
                    author: artist,
                };
            case enums_js_1.Category.ARTIST:
                return {
                    subs: runsArray[runsArray.length - 1].text,
                };
            default:
                throw new index_js_1.IllegalArgumentError('Unrecognized category', 'categoryType');
        }
    }
    /**
     * Gets the thumbnail from the sectionList
     * @param sectionContext - Section context
     */
    static thumbnailParser(sectionContext) {
        return (0, objectScan_utility_js_1.$)('.musicThumbnailRenderer .thumbnails')(sectionContext);
    }
    /**
     * Parses the artist from the Artist array
     * @param artistRaw - The raw runs of artist
     */
    static artistParser(artistRaw) {
        const semiParsedArtist = artistRaw.map((artist) => (artist_js_1.Artist.from({
            name: artist.text,
            browseId: artist.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: artist.navigationEndpoint?.browseEndpoint?.browseId
                ? enums_js_1.ConstantURLs.CHANNEL_URL + String(artist.navigationEndpoint?.browseEndpoint?.browseId ?? '')
                : '',
        })));
        return semiParsedArtist.filter((str) => !(/^\s*\W\s*$/.exec(str.name)));
    }
    /**
     * Parses the album from the Album Array
     * @param albumRaw - The raw runs of album
     */
    static albumParser(albumRaw) {
        return albumRaw.map((album) => (album_js_1.Album.from({
            name: album.text,
            browseId: album.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: enums_js_1.ConstantURLs.CHANNEL_URL + String(album.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
        })));
    }
}
exports.ParsersExtended = ParsersExtended;
//# sourceMappingURL=parsersExtended.js.map