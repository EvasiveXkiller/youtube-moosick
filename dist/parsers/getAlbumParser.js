import objectScan from 'object-scan';
import { AlbumURL, ReleaseDate, Track } from '../resources/resultTypes/albumURL.js';
import { ConstantURLs } from '../enums.js';
import { ArtistExtended } from '../resources/generalTypes/artist.js';
import { Thumbnails } from '../resources/generalTypes/thumbnails.js';
export class GetAlbumParser {
    static parseAlbumURLPage(context) {
        // Overview of the albums
        const albumOverview = objectScan(['**.musicAlbumRelease'], {
            rtn: 'value',
            reverse: false,
        })(context)[0];
        // For description
        const { description } = objectScan(['**.musicAlbumReleaseDetail'], {
            rtn: 'value',
            reverse: false,
        })(context)[0];
        // Gets the artist, if there is multiple
        const musicArtist = objectScan(['**.musicArtist'], {
            rtn: 'value',
            reverse: false,
        })(context);
        const artist = [];
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
        const musicTracks = objectScan(['**.musicTrack'], {
            rtn: 'value',
            reverse: false,
        })(context);
        const tracks = [];
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
    static thumbnailParser(thumbnailDetails) {
        const thumbnails = [];
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
//# sourceMappingURL=getAlbumParser.js.map