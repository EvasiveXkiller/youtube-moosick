import { AlbumURL, ReleaseDate, Track } from '../resources/resultTypes/albumURL';
import objectScan from 'object-scan';
import type {
	MusicAlbumRelease,
	MusicAlbumReleaseDetail, MusicArtist, MusicTrack,
	RawGetAlbumURL, ThumbnailDetails,
} from '../resources/rawResultTypes/rawGetAlbumURL';
import { ConstantURLs } from '../enums';
import type { ThumbnailElement } from '../resources/rawResultTypes/comfirmedInterfaces';
import { Thumbnails } from '../resources/generalTypes/thumbnails';
import { ArtistExtended } from '../resources/generalTypes/artist';

export class GetAlbumParser {
	public static parseAlbumURLPage(context: RawGetAlbumURL): AlbumURL {
		// Overview of the albums
		const albumOverview = (objectScan(['**.musicAlbumRelease'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicAlbumRelease[])[0]!;
		// For description
		const { description } = (objectScan(['**.musicAlbumReleaseDetail'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicAlbumReleaseDetail[])[0];

		// Gets the artist, if there is multiple
		const musicArtist = (objectScan(['**.musicArtist'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicArtist[]);
		const artist: ArtistExtended[] = [];
		for (const eachArtist of musicArtist) {
			artist.push(ArtistExtended.from({
				name: eachArtist.name,
				browseId: eachArtist.externalChannelId,
				url: ConstantURLs.CHANNEL_URL + eachArtist.externalChannelId,
				thumbnails: this.thumbnailParser(objectScan(['**.thumbnailDetails'], {
					reverse: false,
					rtn: 'value',
				})(eachArtist)),
			}));
		}

		// Gets the tracks
		const musicTracks = (objectScan(['**.musicTrack'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicTrack[]);
		const tracks: Track[] = [];
		for (const track of musicTracks) {
			tracks.push(Track.from({
				index: parseInt(track.albumTrackIndex, 10),
				lengthMs: parseInt(track.lengthMs, 10),
				title: track.title,
				videoId: track.videoId,
			}));
		}

		return AlbumURL.from({
			title: albumOverview.title,
			trackCount: parseInt(albumOverview.trackCount, 10),
			date: ReleaseDate.from({
				day: albumOverview.releaseDate.day,
				month: albumOverview.releaseDate.month,
				year: albumOverview.releaseDate.year,
			}),
			duration: parseInt(albumOverview.durationMs, 10),
			thumbnails: this.thumbnailParser(albumOverview.thumbnailDetails),
			description, artist, tracks,
		});
	}

	private static thumbnailParser(thumbnailDetails: ThumbnailDetails): Thumbnails[] {
		const thumbnails: ThumbnailElement[] = [];
		thumbnailDetails.thumbnails.forEach((item) => {
			thumbnails.push(Thumbnails.from({
				width: item.width,
				height: item.height,
				url: item.url,
			}));
		});
		return thumbnails;
	}
}
