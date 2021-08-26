export declare enum EndPoint {
    SUGGESTIONS = "music/get_search_suggestions",
    SEARCH = "search",
    BROWSE = "browse",
    NEXT = "next"
}
export declare enum Category {
    SONG = "SONG",
    VIDEO = "VIDEO",
    ALBUM = "ALBUM",
    ARTIST = "ARTIST",
    PLAYLIST = "PLAYLIST",
    EP = "EP",
    SINGLE = "SINGLE"
}
export declare enum CategoryURIBase64 {
    SONG = "RAAGAAgACgA",
    VIDEO = "BABGAAgACgA",
    ALBUM = "BAAGAEgACgA",
    ARTIST = "BAAGAAgASgA",
    PLAYLISTS = "BAAGAAgACgB"
}
export declare enum ConstantURLs {
    VIDEOLINK = "https://www.youtube.com/watch?v=",
    CHANNEL_URL = "https://music.youtube.com/channel/"
}
export declare enum SongFlexColumnOffset {
    TITLE = 0,
    ARTIST_ALBUM = 1,
    SUPPLEMENT = 2
}
export declare enum SongOffset {
    ARTIST = 0,
    ALBUM = 1,
    DURATION = 2
}
export declare enum VideoOffset {
    ARTIST = 0,
    VIEWS = 1,
    DURATION = 2
}
export declare enum SingleOffset {
    ARTIST = 0,
    VIEWS = 1,
    DURATION = 2
}
export declare enum PlaylistOffset {
    AUTHOR = 0,
    SONGCOUNT = 1
}
export declare enum ArtistOffset {
    SUBSCRIBERS = 0
}
