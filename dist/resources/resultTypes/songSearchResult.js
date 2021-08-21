class songSearchResult {
    type;
    name;
    videoId;
    URL;
    playlistId;
    artist;
    album;
    duration;
    thumbnails;
    params;
    constructor(type, name, videoId, URL, playlistId, artist, album, duration, thumbnails, params) {
        this.type = type;
        this.name = name;
        this.videoId = videoId;
        this.URL = URL;
        this.playlistId = playlistId;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.thumbnails = thumbnails;
        this.params = params;
    }
}

export { songSearchResult };
//# sourceMappingURL=SongSearchResult.js.map
