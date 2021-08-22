export enum EndPointType {
	SUGGESTIONS = 'music/get_search_suggestions',
	SEARCH = 'search',
	BROWSE = 'browse',
	NEXT = 'next',
}

export enum CategoryType {
	SONG = 'SONG',
	VIDEO = 'VIDEO',
	ALBUM = 'ALBUM',
	ARTIST = 'ARTIST',
	PLAYLISTS = 'PLAYLIST',
	EP = 'EP',
	SINGLE = 'SINGLE',
}

export enum CategoryURIBase64 {
	SONG = 'RAAGAAgACgA',
	VIDEO = 'BABGAAgACgA',
	ALBUM = 'BAAGAEgACgA',
	ARTIST = 'BAAGAAgASgA',
	PLAYLISTS = 'BAAGAAgACgB',
}
export enum ConstantURLs {
	VIDEOLINK = 'https://www.youtube.com/watch?v=',
	CHANNEL_URL = 'https://music.youtube.com/channel/',
}

export enum flexColumnDefinition {
	GENERAL = 1,
	SUPPLEMENT = 2,
}

// constant delimters for types, probably can do better

export enum SongOffset {
	ARTIST,
	ALBUM,
	DURATION,
}

export enum VideoOffset {
	ARTIST,
	VIEWS,
	DURATION,
}

export enum SingleOffset {
	ARTIST,
	VIEWS,
	DURATION,
}

export enum PlaylistOffset {
	AUTHOR,
	SONGCOUNT,
}

export enum ArtistOffset {
	SUBSCRIBERS,
}
