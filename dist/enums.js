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
    CategoryURIBase64["PLAYLIST"] = "BAAGAAgACgB";
})(CategoryURIBase64 || (CategoryURIBase64 = {}));
export var ConstantURLs;
(function (ConstantURLs) {
    ConstantURLs["VIDEOLINK"] = "https://www.youtube.com/watch?v=";
    ConstantURLs["CHANNEL_URL"] = "https://music.youtube.com/channel/";
})(ConstantURLs || (ConstantURLs = {}));
export var FlexColumnOffset;
(function (FlexColumnOffset) {
    FlexColumnOffset[FlexColumnOffset["MAIN"] = 0] = "MAIN";
    FlexColumnOffset[FlexColumnOffset["ALT"] = 1] = "ALT";
    FlexColumnOffset[FlexColumnOffset["ONLYRUN"] = 0] = "ONLYRUN";
})(FlexColumnOffset || (FlexColumnOffset = {}));
export var FlexSecondRowOffset;
(function (FlexSecondRowOffset) {
    FlexSecondRowOffset[FlexSecondRowOffset["ARTIST"] = 0] = "ARTIST";
    FlexSecondRowOffset[FlexSecondRowOffset["OTHERS"] = 1] = "OTHERS";
})(FlexSecondRowOffset || (FlexSecondRowOffset = {}));
//# sourceMappingURL=enums.js.map