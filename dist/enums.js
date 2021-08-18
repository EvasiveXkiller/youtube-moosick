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
})(categoryType || (categoryType = {}));
var categoryURIBase64;
(function (categoryURIBase64) {
    categoryURIBase64["SONG"] = "RAAGAAgACgA";
    categoryURIBase64["VIDEO"] = "BABGAAgACgA";
    categoryURIBase64["ALBUM"] = "BAAGAEgACgA";
    categoryURIBase64["ARTIST"] = "BAAGAAgASgA";
    categoryURIBase64["PLAYLISTS"] = "BAAGAAgACgB";
})(categoryURIBase64 || (categoryURIBase64 = {}));

export { categoryType, categoryURIBase64, endPointType };
//# sourceMappingURL=enums.js.map
