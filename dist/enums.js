var endPointType;
(function (endPointType) {
    endPointType["SUGGESTIONS"] = "music/get_search_suggestions";
    endPointType["SEARCH"] = "search";
    endPointType["BROWSE"] = "browse";
    endPointType["NEXT"] = "next";
})(endPointType || (endPointType = {}));
var categoryType;
(function (categoryType) {
    categoryType["SONG"] = "SONG";
    categoryType["VIDEO"] = "VIDEO";
    categoryType["ALBUM"] = "ALBUM";
    categoryType["ARTIST"] = "ARTIST";
    categoryType["PLAYLISTS"] = "PLAYLIST";
    categoryType["EP"] = "EP";
    categoryType["SINGLE"] = "SINGLE";
})(categoryType || (categoryType = {}));
var categoryURIBase64;
(function (categoryURIBase64) {
    categoryURIBase64["SONG"] = "RAAGAAgACgA";
    categoryURIBase64["VIDEO"] = "BABGAAgACgA";
    categoryURIBase64["ALBUM"] = "BAAGAEgACgA";
    categoryURIBase64["ARTIST"] = "BAAGAAgASgA";
    categoryURIBase64["PLAYLISTS"] = "BAAGAAgACgB";
})(categoryURIBase64 || (categoryURIBase64 = {}));
var constantLinks;
(function (constantLinks) {
    constantLinks["VIDEOLINK"] = "https://www.youtube.com/watch?v=";
    constantLinks["CHANNELLINK"] = "https://music.youtube.com/channel/";
})(constantLinks || (constantLinks = {}));
var flexColumnDefinition;
(function (flexColumnDefinition) {
    flexColumnDefinition[flexColumnDefinition["GENERAL"] = 1] = "GENERAL";
    flexColumnDefinition[flexColumnDefinition["SUPPLEMENT"] = 2] = "SUPPLEMENT";
})(flexColumnDefinition || (flexColumnDefinition = {}));
// constant delimters for types, probably can do better
var songOffset;
(function (songOffset) {
    songOffset[songOffset["ARTIST"] = 0] = "ARTIST";
    songOffset[songOffset["ALBUM"] = 1] = "ALBUM";
    songOffset[songOffset["DURATION"] = 2] = "DURATION";
})(songOffset || (songOffset = {}));
var videoOffset;
(function (videoOffset) {
    videoOffset[videoOffset["ARTIST"] = 0] = "ARTIST";
    videoOffset[videoOffset["VIEWS"] = 1] = "VIEWS";
    videoOffset[videoOffset["DURATION"] = 2] = "DURATION";
})(videoOffset || (videoOffset = {}));
var singleOffset;
(function (singleOffset) {
    singleOffset[singleOffset["ARTIST"] = 0] = "ARTIST";
    singleOffset[singleOffset["VIEWS"] = 1] = "VIEWS";
    singleOffset[singleOffset["DURATION"] = 2] = "DURATION";
})(singleOffset || (singleOffset = {}));
var playlistOffset;
(function (playlistOffset) {
    playlistOffset[playlistOffset["AUTHOR"] = 0] = "AUTHOR";
    playlistOffset[playlistOffset["SONGCOUNT"] = 1] = "SONGCOUNT";
})(playlistOffset || (playlistOffset = {}));
var artistOffset;
(function (artistOffset) {
    artistOffset[artistOffset["SUBSCRIBERS"] = 0] = "SUBSCRIBERS";
})(artistOffset || (artistOffset = {}));

export { artistOffset, categoryType, categoryURIBase64, constantLinks, endPointType, flexColumnDefinition, playlistOffset, singleOffset, songOffset, videoOffset };
//# sourceMappingURL=enums.js.map
