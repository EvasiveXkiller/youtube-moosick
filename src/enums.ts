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

export enum SongFlexColumnOffset {
	TITLE,
	ARTIST_ALBUM,
	SUPPLEMENT,
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
