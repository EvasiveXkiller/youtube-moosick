import type { PurpleRun } from '../resources/rawResultTypes/comfirmedInterfaces';
import { CategoryType, ConstantURLs } from '../enums';
import { Artist, ArtistExtended } from '../resources/generalTypes/artist';
import { Video } from '../resources/generalTypes/video';
import { Song } from '../resources/generalTypes/song';
import { Album } from '../resources/generalTypes/album';
import { Playlist } from '../resources/generalTypes/playlist';
import { parseInt } from 'lodash';
import type { Thumbnails } from '../resources/generalTypes/thumbnails';
import objectScan from 'object-scan';

export class ParsersExtension {
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType?: CategoryType.ARTIST): Partial<ArtistExtended>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType?: CategoryType.VIDEO): Partial<Video>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType?: CategoryType.SONG): Partial<Song>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType?: CategoryType.ALBUM | CategoryType.SINGLE | CategoryType.EP): Partial<Album>
	static flexSecondRowComplexParser(runsArray: PurpleRun[], categoryType?: CategoryType.PLAYLISTS): Partial<Playlist> | undefined { // return array of capable stuff
		const delimiter = ' • ';
		const type = categoryType ?? runsArray[0].text as CategoryType;
		let artist: Artist[];
		if (!categoryType) {
			runsArray.splice(0, 2);
		}

		const positions = runsArray.flatMap((text, i) => text.text === delimiter ? i : []);
		if (positions.length !== 0) {
			artist = this.artistParser(runsArray.slice(0, positions[0]));
		}

		switch (type) {
			case CategoryType.SONG:
				return Song.from({
					artist,
					album: this.albumParser(runsArray.slice(positions[0] + 1, positions[1])),
					duration: utils.hms2ms(runsArray[runsArray.length - 1].text),
				});
			case CategoryType.VIDEO:
				return Video.from({
					author: artist,
					views: utils.hms2ms(runsArray[positions[0] + 1].text),
					length = utils.hms2ms(runsArray[runsArray.length - 1].text),
				});
			case CategoryType.EP:
			case CategoryType.SINGLE:
			case CategoryType.ALBUM:
				return Album.from({
					year: parseInt(runsArray[runsArray.length - 1].text, 10),
				});
			case CategoryType.PLAYLISTS:
				return Playlist.from({
					trackCount: parseInt(runsArray[runsArray.length - 1].text, 10),
					author: artist,
				});
			case CategoryType.ARTIST:
				return ArtistExtended.from({
					subs: runsArray[runsArray.length - 1].text,
				});
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
			id: artist.navigationEndpoint.browseEndpoint.browseId,
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
			id: album.navigationEndpoint.browseEndpoint.browseId,
			url: 'ConstantURLs.CHANNEL_URL' + album.navigationEndpoint.browseEndpoint.browseId,
		})));
	}
}
