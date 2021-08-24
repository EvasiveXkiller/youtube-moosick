import type { PurpleRun } from '../resources/rawResultTypes/comfirmedInterfaces';
import { Category, ConstantURLs } from '../enums';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist';
import type { Video } from '../resources/generalTypes/video';
import type { Song } from '../resources/generalTypes/song';
import { Album, AlbumExtended } from '../resources/generalTypes/album';
import type { Playlist } from '../resources/generalTypes/playlist';
import { parseInt } from 'lodash';
import type { Thumbnails } from '../resources/generalTypes/thumbnails';
import objectScan from 'object-scan';
import { utils } from '../utils';

export class ParsersExtended {
	// FIXME how do you overload this????
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ARTIST, trim: boolean): Partial<ArtistExtended>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.VIDEO, trim: boolean): Partial<Video>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.SONG, trim: boolean): Partial<Song>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.ALBUM | Category.SINGLE | Category.EP, trim: boolean): Partial<Album>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType: Category.PLAYLISTS, trim: boolean): Partial<Playlist> | undefined { // return array of capable stuff
		const delimiter = ' • ';
		const type = categoryType ?? runsArray[0].text as Category;
		let artist: Artist[];
		if (trim) {
			runsArray.splice(0, 2);
		}

		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		if (positions.length !== 0) {
			artist = this.artistParser(runsArray.slice(0, positions[0]));
		}

		switch (type) {
			case Category.SONG: {
				const song: Partial<Song> = {
					artist,
					album: this.albumParser(runsArray.slice(positions[0] + 1, positions[1])),
					duration: utils.hms2ms(runsArray[runsArray.length - 1].text),
				};
				return song;
			}

			case Category.VIDEO: {
				const Video: Partial<Video> = {
					author: artist,
					views: utils.hms2ms(runsArray[positions[0] + 1].text),
					length: utils.hms2ms(runsArray[runsArray.length - 1].text),
				};
				return Video;
			}

			case Category.EP:
			case Category.SINGLE:
			case Category.ALBUM: {
				const album: Partial<AlbumExtended> = {
					year: parseInt(runsArray[runsArray.length - 1].text, 10),
				};
				return album;
			}

			case Category.PLAYLISTS: {
				const playlists: Partial<Playlist> = {
					trackCount: parseInt(runsArray[runsArray.length - 1].text, 10),
					author: artist,
				};
				return playlists;
			}
			case Category.ARTIST: {
				const artist: Partial<ArtistExtended> = {
					subs: runsArray[runsArray.length - 1].text,
				};
				return artist;
			}
			default:
				break;
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
			browseId: artist.navigationEndpoint.browseEndpoint.browseId,
			url: ConstantURLs.CHANNEL_URL + artist.navigationEndpoint.browseEndpoint.browseId,
		})));
	}

	/**
	 * Parses the album from the Album Array
	 * @param albumRaw
	 */
	static albumParser(albumRaw: PurpleRun[]): Album[] { // return the albumObject only
		return albumRaw.map((album) => (Album.from({
			name: album.text,
			browseId: album.navigationEndpoint.browseEndpoint.browseId,
			url: 'ConstantURLs.CHANNEL_URL' + album.navigationEndpoint.browseEndpoint.browseId,
		})));
	}
}
