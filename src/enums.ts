export enum EndPoint {
	SUGGESTIONS = 'music/get_search_suggestions',
	SEARCH = 'search',
	BROWSE = 'browse',
	NEXT = 'next',
}

export enum Category {
	SONG = 'SONG',
	VIDEO = 'VIDEO',
	ALBUM = 'ALBUM',
	ARTIST = 'ARTIST',
	PLAYLIST = 'PLAYLIST',
	EP = 'EP',
	SINGLE = 'SINGLE',
}

export enum CategoryURIBase64 {
	SONG = 'RAAGAAgACgA',
	VIDEO = 'BABGAAgACgA',
	ALBUM = 'BAAGAEgACgA',
	ARTIST = 'BAAGAAgASgA',
	PLAYLIST = 'BAAGAAgACgB',
}

export enum ConstantURLs {
	VIDEOLINK = 'https://www.youtube.com/watch?v=',
	CHANNEL_URL = 'https://music.youtube.com/channel/',
}

export enum FlexColumnOffset {
	MAIN = 0,
	ALT = 1,
	ONLYRUN = 0,
}

export enum FlexSecondRowOffset {
	ARTIST = 0,
	OTHERS = 1,
}

