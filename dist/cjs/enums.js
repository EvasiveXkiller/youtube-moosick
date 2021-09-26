"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexSecondRowOffset = exports.FlexColumnOffset = exports.ConstantURLs = exports.CategoryURIBase64 = exports.Category = exports.EndPoint = void 0;
/**
 * @internal
 * Different Endpoints for createNewApi method
 */
var EndPoint;
(function (EndPoint) {
    /**
     * Search Suggestions
     */
    EndPoint["SUGGESTIONS"] = "music/get_search_suggestions";
    /**
     * Search
     */
    EndPoint["SEARCH"] = "search";
    /**
     * Browse with the given Id
     */
    EndPoint["BROWSE"] = "browse";
    /**
     * Used for continuation
     */
    EndPoint["NEXT"] = "next";
})(EndPoint = exports.EndPoint || (exports.EndPoint = {}));
/**
 * Categories that can be placed into search()
 */
var Category;
(function (Category) {
    /**
     * Category Song
     */
    Category["SONG"] = "SONG";
    /**
     * Category Video
     */
    Category["VIDEO"] = "VIDEO";
    /**
     * Category Album
     */
    Category["ALBUM"] = "ALBUM";
    /**
     * Category Artist
     */
    Category["ARTIST"] = "ARTIST";
    /**
     * Category Playlist
     */
    Category["PLAYLIST"] = "PLAYLIST";
    /**
     * Category Ep
     */
    Category["EP"] = "EP";
    /**
     * Category Single
     */
    Category["SINGLE"] = "SINGLE";
})(Category = exports.Category || (exports.Category = {}));
/**
 * @internal
 */
var CategoryURIBase64;
(function (CategoryURIBase64) {
    CategoryURIBase64["SONG"] = "RAAGAAgACgA";
    CategoryURIBase64["VIDEO"] = "BABGAAgACgA";
    CategoryURIBase64["ALBUM"] = "BAAGAEgACgA";
    CategoryURIBase64["ARTIST"] = "BAAGAAgASgA";
    CategoryURIBase64["PLAYLIST"] = "BAAGAAgACgB";
})(CategoryURIBase64 = exports.CategoryURIBase64 || (exports.CategoryURIBase64 = {}));
/**
 * Constant Links
 */
var ConstantURLs;
(function (ConstantURLs) {
    ConstantURLs["VIDEOLINK"] = "https://www.youtube.com/watch?v=";
    ConstantURLs["CHANNEL_URL"] = "https://music.youtube.com/channel/";
})(ConstantURLs = exports.ConstantURLs || (exports.ConstantURLs = {}));
/**
 * @internal
 */
var FlexColumnOffset;
(function (FlexColumnOffset) {
    FlexColumnOffset[FlexColumnOffset["MAIN"] = 0] = "MAIN";
    FlexColumnOffset[FlexColumnOffset["ALT"] = 1] = "ALT";
    FlexColumnOffset[FlexColumnOffset["ONLYRUN"] = 0] = "ONLYRUN";
})(FlexColumnOffset = exports.FlexColumnOffset || (exports.FlexColumnOffset = {}));
/**
 * @internal
 */
var FlexSecondRowOffset;
(function (FlexSecondRowOffset) {
    FlexSecondRowOffset[FlexSecondRowOffset["ARTIST"] = 0] = "ARTIST";
    FlexSecondRowOffset[FlexSecondRowOffset["OTHERS"] = 1] = "OTHERS";
})(FlexSecondRowOffset = exports.FlexSecondRowOffset || (exports.FlexSecondRowOffset = {}));
//# sourceMappingURL=enums.js.map