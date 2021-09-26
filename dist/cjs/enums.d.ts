/**
 * @internal
 * Different Endpoints for createNewApi method
 */
export declare enum EndPoint {
    /**
     * Search Suggestions
     */
    SUGGESTIONS = "music/get_search_suggestions",
    /**
     * Search
     */
    SEARCH = "search",
    /**
     * Browse with the given Id
     */
    BROWSE = "browse",
    /**
     * Used for continuation
     */
    NEXT = "next"
}
/**
 * Categories that can be placed into search()
 */
export declare enum Category {
    /**
     * Category Song
     */
    SONG = "SONG",
    /**
     * Category Video
     */
    VIDEO = "VIDEO",
    /**
     * Category Album
     */
    ALBUM = "ALBUM",
    /**
     * Category Artist
     */
    ARTIST = "ARTIST",
    /**
     * Category Playlist
     */
    PLAYLIST = "PLAYLIST",
    /**
     * Category Ep
     */
    EP = "EP",
    /**
     * Category Single
     */
    SINGLE = "SINGLE"
}
/**
 * @internal
 */
export declare enum CategoryURIBase64 {
    SONG = "RAAGAAgACgA",
    VIDEO = "BABGAAgACgA",
    ALBUM = "BAAGAEgACgA",
    ARTIST = "BAAGAAgASgA",
    PLAYLIST = "BAAGAAgACgB"
}
/**
 * Constant Links
 */
export declare enum ConstantURLs {
    VIDEOLINK = "https://www.youtube.com/watch?v=",
    CHANNEL_URL = "https://music.youtube.com/channel/"
}
/**
 * @internal
 */
export declare enum FlexColumnOffset {
    MAIN = 0,
    ALT = 1,
    ONLYRUN = 0
}
/**
 * @internal
 */
export declare enum FlexSecondRowOffset {
    ARTIST = 0,
    OTHERS = 1
}
//# sourceMappingURL=enums.d.ts.map