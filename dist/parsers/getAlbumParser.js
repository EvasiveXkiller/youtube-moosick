import { AlbumURL, ReleaseDate, ArtistExtended, Track } from '../resources/resultTypes/albumURL.js';
import lib from '../node_modules/object-scan/lib/index.js';
import { ConstantURLs } from '../enums.js';
import { Thumbnails } from '../resources/generalTypes/thumbnails.js';

class GetAlbumParser {
    static parseAlbumURLPage(context) {
        // Overview of the albums
        const albumOverview = lib(['**.musicAlbumRelease'], {
            rtn: 'value',
            reverse: false,
        })(context)[0];
        // For description
        const { description } = lib(['**.musicAlbumReleaseDetail'], {
            rtn: 'value',
            reverse: false,
        })(context)[0];
        // Gets the artist, if there is multiple
        const musicArtist = lib(['**.musicArtist'], {
            rtn: 'value',
            reverse: false,
        })(context);
        const artist = [];
        for (const eachArtist of musicArtist) {
            artist.push(ArtistExtended.from({
                name: eachArtist.name,
                id: eachArtist.externalChannelId,
                url: ConstantURLs.CHANNEL_URL + eachArtist.externalChannelId,
                thumbnails: this.thumbnailParser(lib(['**.thumbnailDetails'], {
                    reverse: false,
                    rtn: 'value',
                })(eachArtist)),
            }));
        }
        // Gets the tracks
        const musicTracks = lib(['**.musicTrack'], {
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

export { GetAlbumParser };
//# sourceMappingURL=getAlbumParser.js.map
