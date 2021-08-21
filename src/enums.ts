export enum endPointType {
	SUGGESTIONS = 'music/get_search_suggestions',
	SEARCH = 'search',
	BROWSE = 'browse',
	NEXT = 'next',
}

export enum categoryType {
	SONG = 'SONG',
	VIDEO = 'VIDEO',
	ALBUM = 'ALBUM',
	ARTIST = 'ARTIST',
	PLAYLISTS = 'PLAYLIST',
	EP = 'EP',
	SINGLE = 'SINGLE',
}

export enum categoryURIBase64 {
	SONG = 'RAAGAAgACgA',
	VIDEO = 'BABGAAgACgA',
	ALBUM = 'BAAGAEgACgA',
	ARTIST = 'BAAGAAgASgA',
	PLAYLISTS = 'BAAGAAgACgB',
}
export enum constantLinks {
	VIDEOLINK = 'https://www.youtube.com/watch?v=',
	CHANNELLINK = 'https://music.youtube.com/channel/',
}

// constant delimters for types, probably can do better

export enum songOffset {
	ARTIST = 0,
	ALBUM = 1,
	DURATION = 2,
}

export enum videoOffset {
	ARTIST = 0,
	VIEWS = 1,
	DURATION = 2,
}
