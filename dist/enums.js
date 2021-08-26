export var EndPoint;
(function (EndPoint) {
    EndPoint["SUGGESTIONS"] = "music/get_search_suggestions";
    EndPoint["SEARCH"] = "search";
    EndPoint["BROWSE"] = "browse";
    EndPoint["NEXT"] = "next";
})(EndPoint || (EndPoint = {}));
export var Category;
(function (Category) {
    Category["SONG"] = "SONG";
    Category["VIDEO"] = "VIDEO";
    Category["ALBUM"] = "ALBUM";
    Category["ARTIST"] = "ARTIST";
    Category["PLAYLIST"] = "PLAYLIST";
    Category["EP"] = "EP";
    Category["SINGLE"] = "SINGLE";
})(Category || (Category = {}));
export var CategoryURIBase64;
(function (CategoryURIBase64) {
    CategoryURIBase64["SONG"] = "RAAGAAgACgA";
    CategoryURIBase64["VIDEO"] = "BABGAAgACgA";
    CategoryURIBase64["ALBUM"] = "BAAGAEgACgA";
    CategoryURIBase64["ARTIST"] = "BAAGAAgASgA";
    CategoryURIBase64["PLAYLISTS"] = "BAAGAAgACgB";
})(CategoryURIBase64 || (CategoryURIBase64 = {}));
export var ConstantURLs;
(function (ConstantURLs) {
    ConstantURLs["VIDEOLINK"] = "https://www.youtube.com/watch?v=";
    ConstantURLs["CHANNEL_URL"] = "https://music.youtube.com/channel/";
})(ConstantURLs || (ConstantURLs = {}));
export var SongFlexColumnOffset;
(function (SongFlexColumnOffset) {
    SongFlexColumnOffset[SongFlexColumnOffset["TITLE"] = 0] = "TITLE";
    SongFlexColumnOffset[SongFlexColumnOffset["ARTIST_ALBUM"] = 1] = "ARTIST_ALBUM";
    SongFlexColumnOffset[SongFlexColumnOffset["SUPPLEMENT"] = 2] = "SUPPLEMENT";
})(SongFlexColumnOffset || (SongFlexColumnOffset = {}));
// constant delimters for types, probably can do better
export var SongOffset;
(function (SongOffset) {
    SongOffset[SongOffset["ARTIST"] = 0] = "ARTIST";
    SongOffset[SongOffset["ALBUM"] = 1] = "ALBUM";
    SongOffset[SongOffset["DURATION"] = 2] = "DURATION";
})(SongOffset || (SongOffset = {}));
export var VideoOffset;
(function (VideoOffset) {
    VideoOffset[VideoOffset["ARTIST"] = 0] = "ARTIST";
    VideoOffset[VideoOffset["VIEWS"] = 1] = "VIEWS";
    VideoOffset[VideoOffset["DURATION"] = 2] = "DURATION";
})(VideoOffset || (VideoOffset = {}));
export var SingleOffset;
(function (SingleOffset) {
    SingleOffset[SingleOffset["ARTIST"] = 0] = "ARTIST";
    SingleOffset[SingleOffset["VIEWS"] = 1] = "VIEWS";
    SingleOffset[SingleOffset["DURATION"] = 2] = "DURATION";
})(SingleOffset || (SingleOffset = {}));
export var PlaylistOffset;
(function (PlaylistOffset) {
    PlaylistOffset[PlaylistOffset["AUTHOR"] = 0] = "AUTHOR";
    PlaylistOffset[PlaylistOffset["SONGCOUNT"] = 1] = "SONGCOUNT";
})(PlaylistOffset || (PlaylistOffset = {}));
export var ArtistOffset;
(function (ArtistOffset) {
    ArtistOffset[ArtistOffset["SUBSCRIBERS"] = 0] = "SUBSCRIBERS";
})(ArtistOffset || (ArtistOffset = {}));
//# sourceMappingURL=enums.js.map