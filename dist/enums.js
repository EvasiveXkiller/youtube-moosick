var EndPointType;
(function (EndPointType) {
    EndPointType["SUGGESTIONS"] = "music/get_search_suggestions";
    EndPointType["SEARCH"] = "search";
    EndPointType["BROWSE"] = "browse";
    EndPointType["NEXT"] = "next";
})(EndPointType || (EndPointType = {}));
var CategoryType;
(function (CategoryType) {
    CategoryType["SONG"] = "SONG";
    CategoryType["VIDEO"] = "VIDEO";
    CategoryType["ALBUM"] = "ALBUM";
    CategoryType["ARTIST"] = "ARTIST";
    CategoryType["PLAYLISTS"] = "PLAYLIST";
    CategoryType["EP"] = "EP";
    CategoryType["SINGLE"] = "SINGLE";
})(CategoryType || (CategoryType = {}));
var CategoryURIBase64;
(function (CategoryURIBase64) {
    CategoryURIBase64["SONG"] = "RAAGAAgACgA";
    CategoryURIBase64["VIDEO"] = "BABGAAgACgA";
    CategoryURIBase64["ALBUM"] = "BAAGAEgACgA";
    CategoryURIBase64["ARTIST"] = "BAAGAAgASgA";
    CategoryURIBase64["PLAYLISTS"] = "BAAGAAgACgB";
})(CategoryURIBase64 || (CategoryURIBase64 = {}));
var ConstantURLs;
(function (ConstantURLs) {
    ConstantURLs["VIDEOLINK"] = "https://www.youtube.com/watch?v=";
    ConstantURLs["CHANNEL_URL"] = "https://music.youtube.com/channel/";
})(ConstantURLs || (ConstantURLs = {}));
var flexColumnDefinition;
(function (flexColumnDefinition) {
    flexColumnDefinition[flexColumnDefinition["GENERAL"] = 1] = "GENERAL";
    flexColumnDefinition[flexColumnDefinition["SUPPLEMENT"] = 2] = "SUPPLEMENT";
})(flexColumnDefinition || (flexColumnDefinition = {}));
// constant delimters for types, probably can do better
var SongOffset;
(function (SongOffset) {
    SongOffset[SongOffset["ARTIST"] = 0] = "ARTIST";
    SongOffset[SongOffset["ALBUM"] = 1] = "ALBUM";
    SongOffset[SongOffset["DURATION"] = 2] = "DURATION";
})(SongOffset || (SongOffset = {}));
var VideoOffset;
(function (VideoOffset) {
    VideoOffset[VideoOffset["ARTIST"] = 0] = "ARTIST";
    VideoOffset[VideoOffset["VIEWS"] = 1] = "VIEWS";
    VideoOffset[VideoOffset["DURATION"] = 2] = "DURATION";
})(VideoOffset || (VideoOffset = {}));
var SingleOffset;
(function (SingleOffset) {
    SingleOffset[SingleOffset["ARTIST"] = 0] = "ARTIST";
    SingleOffset[SingleOffset["VIEWS"] = 1] = "VIEWS";
    SingleOffset[SingleOffset["DURATION"] = 2] = "DURATION";
})(SingleOffset || (SingleOffset = {}));
var PlaylistOffset;
(function (PlaylistOffset) {
    PlaylistOffset[PlaylistOffset["AUTHOR"] = 0] = "AUTHOR";
    PlaylistOffset[PlaylistOffset["SONGCOUNT"] = 1] = "SONGCOUNT";
})(PlaylistOffset || (PlaylistOffset = {}));
var ArtistOffset;
(function (ArtistOffset) {
    ArtistOffset[ArtistOffset["SUBSCRIBERS"] = 0] = "SUBSCRIBERS";
})(ArtistOffset || (ArtistOffset = {}));

export { ArtistOffset, CategoryType, CategoryURIBase64, ConstantURLs, EndPointType, PlaylistOffset, SingleOffset, SongOffset, VideoOffset, flexColumnDefinition };
//# sourceMappingURL=enums.js.map
