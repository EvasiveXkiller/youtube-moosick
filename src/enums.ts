export enum endPointType {
    SUGGESTIONS = 'music/get_search_suggestions',
    SEARCH = 'search',
    BROWSE = 'browse',
    NEXT = 'next'
}

export enum categoryType {
    SONG = "SONG",
    VIDEO = "VIDEO",
    ALBUM = "ALBUM",
    ARTIST = "ARTIST",
    PLAYLISTS = "PLAYLIST"
}


export enum categoryURIBase64 {
    SONG = "RAAGAAgACgA",
    VIDEO = "BABGAAgACgA",
    ALBUM = "BAAGAEgACgA",
    ARTIST = "BAAGAAgASgA",
    PLAYLISTS = "BAAGAAgACgB"
}