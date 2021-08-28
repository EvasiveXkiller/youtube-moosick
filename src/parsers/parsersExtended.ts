import objectScan from 'object-scan';
import { Album, AlbumExtended } from '../resources/generalTypes/album.js';
import { Category, ConstantURLs, FlexColumnOffset, FlexSecondRowOffset } from '../enums.js';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist.js';
import { utils } from '../utils.js';
import { IllegalArgumentError } from '../resources/errors/index.js';
import type { Video } from '../resources/generalTypes/video.js';
import type { Song } from '../resources/generalTypes/song.js';
import type { Run } from '../resources/rawResultTypes/common.js';
import type { Playlist } from '../resources/generalTypes/playlist.js';
import type { Thumbnails } from '../resources/generalTypes/thumbnails.js';

export class ParsersExtended {
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.ARTIST, trim: boolean): Pick<ArtistExtended, 'subs'>
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.VIDEO, trim: boolean): Pick<Video, 'author' | 'views' | 'length'>
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.SONG, trim: boolean): Pick<Song, 'artist' | 'album' | 'duration'>
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Pick<AlbumExtended, 'year'>
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category.PLAYLIST, trim: boolean): Pick<Playlist, 'trackCount' | 'author'>
	static flexSecondRowComplexParser(runsArray: Run[], categoryType: Category, trim: boolean): any { // return array of capable stuff
		const delimiter = ' • ';
		const type = categoryType ?? runsArray[FlexColumnOffset.MAIN].text as Category;
		let artist: Artist[] = [];

		if (!trim) {
			runsArray.splice(0, 2);
		}

		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		if (positions.length !== 0) {
			artist = this.artistParser(runsArray.slice(0, positions[FlexSecondRowOffset.ARTIST]));
		}

		switch (type) {
			case Category.SONG:
				return {
					artist,
					album: this.albumParser(runsArray.slice(positions[FlexSecondRowOffset.ARTIST] + 1, positions[FlexSecondRowOffset.OTHERS])),
					duration: utils.hms2ms(runsArray[runsArray.length - 1].text),
				};
			case Category.VIDEO:
				return {
					author: artist,
					views: utils.hms2ms(runsArray[positions[0] + 1].text),
					length: utils.hms2ms(runsArray[runsArray.length - 1].text),
				};
			case Category.EP:
			case Category.SINGLE:
			case Category.ALBUM:
				return {
					year: Number(runsArray[runsArray.length - 1].text),
				};
			case Category.PLAYLIST:
				return {
					trackCount: parseInt(runsArray[runsArray.length - 1].text, 10),
					author: artist,
				};
			case Category.ARTIST:
				return {
					subs: runsArray[runsArray.length - 1].text,
				};
			default:
				throw new IllegalArgumentError('Unrecognized category', 'categoryType');
		}
	}

	/**
	 * Gets the thumbnail from the sectionList
	 * @param sectionContext
	 */
	static thumbnailParser(sectionContext: any): Thumbnails[] {
		return objectScan(['**.musicThumbnailRenderer.**.thumbnails'], {
			rtn: 'value',
			reverse: false,
		})(sectionContext) as Thumbnails[];
	}

	/**
	 * Parses the artist from the Artist array
	 * @param artistRaw
	 */
	static artistParser(artistRaw: Run[]): Artist[] {
		return artistRaw.map((artist) => (Artist.from({
			name: artist.text,
			browseId: artist.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: artist.navigationEndpoint?.browseEndpoint?.browseId === ''
				? ''
				: ConstantURLs.CHANNEL_URL + String(artist.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
		})));
	}

	/**
	 * Parses the album from the Album Array
	 * @param albumRaw
	 */
	static albumParser(albumRaw: Run[]): Album[] { // return the albumObject only
		return albumRaw.map((album) => (Album.from({
			name: album.text,
			browseId: album.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: ConstantURLs.CHANNEL_URL + String(album.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
		})));
	}
}
