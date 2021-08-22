export declare enum endPointType {
    SUGGESTIONS = "music/get_search_suggestions",
    SEARCH = "search",
    BROWSE = "browse",
    NEXT = "next"
}
export declare enum categoryType {
    SONG = "SONG",
    VIDEO = "VIDEO",
    ALBUM = "ALBUM",
    ARTIST = "ARTIST",
    PLAYLISTS = "PLAYLIST",
    EP = "EP",
    SINGLE = "SINGLE"
}
export declare enum categoryURIBase64 {
    SONG = "RAAGAAgACgA",
    VIDEO = "BABGAAgACgA",
    ALBUM = "BAAGAEgACgA",
    ARTIST = "BAAGAAgASgA",
    PLAYLISTS = "BAAGAAgACgB"
}
export declare enum constantLinks {
    VIDEOLINK = "https://www.youtube.com/watch?v=",
    CHANNELLINK = "https://music.youtube.com/channel/"
}
export declare enum flexColumnDefinition {
    GENERAL = 1,
    SUPPLEMENT = 2
}
export declare enum songOffset {
    ARTIST = 0,
    ALBUM = 1,
    DURATION = 2
}
export declare enum videoOffset {
    ARTIST = 0,
    VIEWS = 1,
    DURATION = 2
}
export declare enum singleOffset {
    ARTIST = 0,
    VIEWS = 1,
    DURATION = 2
}
export declare enum playlistOffset {
    AUTHOR = 0,
    SONGCOUNT = 1
}
export declare enum artistOffset {
    SUBSCRIBERS = 0
}
