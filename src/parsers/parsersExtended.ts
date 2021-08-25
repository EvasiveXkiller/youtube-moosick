import objectScan from 'object-scan';
import { Album, AlbumExtended } from '../resources/generalTypes/album';
import { Category, ConstantURLs } from '../enums';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist';
import { utils } from '../utils';
import { IllegalArgumentError } from '../resources/errors';
import type { Video } from '../resources/generalTypes/video';
import type { Song } from '../resources/generalTypes/song';
import type { PurpleRun } from '../resources/rawResultTypes/comfirmedInterfaces';
import type { Playlist } from '../resources/generalTypes/playlist';
import type { Thumbnails } from '../resources/generalTypes/thumbnails';

export class ParsersExtended {
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ARTIST, trim: boolean): Pick<ArtistExtended, 'subs'>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.VIDEO, trim: boolean): Pick<Video, 'author' | 'views' | 'length'>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.SONG, trim: boolean): Pick<Song, 'artist' | 'album' | 'duration'>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Pick<AlbumExtended, 'year'>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.PLAYLISTS, trim: boolean): Pick<Playlist, 'trackCount' | 'author'>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category, trim: boolean): any { // return array of capable stuff
		const delimiter = ' • ';
		const type = categoryType ?? runsArray[0].text as Category;
		let artist: Artist[] = [];

		if (trim) {
			runsArray.splice(0, 2);
		}

		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		if (positions.length !== 0) {
			artist = this.artistParser(runsArray.slice(0, positions[0]));
		}

		switch (type) {
			case Category.SONG:
				return {
					artist,
					album: this.albumParser(runsArray.slice(positions[0] + 1, positions[1])),
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
			case Category.PLAYLISTS:
				return {
					trackCount: Number(runsArray[runsArray.length - 1].text),
					author: artist,
				};
			case Category.ARTIST:
				return {
					subs: Number(runsArray[runsArray.length - 1].text),
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
	static artistParser(artistRaw: PurpleRun[]): Artist[] {
		return artistRaw.map((artist) => (Artist.from({
			name: artist.text,
			browseId: artist.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: ConstantURLs.CHANNEL_URL + String(artist.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
		})));
	}

	/**
	 * Parses the album from the Album Array
	 * @param albumRaw
	 */
	static albumParser(albumRaw: PurpleRun[]): Album[] { // return the albumObject only
		return albumRaw.map((album) => (Album.from({
			name: album.text,
			browseId: album.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: ConstantURLs.CHANNEL_URL + String(album.navigationEndpoint?.browseEndpoint?.browseId ?? ''),
		})));
	}
}
