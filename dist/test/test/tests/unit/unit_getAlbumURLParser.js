import test from 'tape';
import rawGetAlbumURL from '../../dummy/rawGetAlbumURL.json' assert { type: 'json' };
import { GetAlbumParser } from '../../../parsers/getAlbumParser.js';
import { AlbumURL, AlbumURLHeader, Track } from '../../../resources/resultTypes/index.js';
import { Artist, Thumbnails } from '../../../resources/generalTypes/index.js';
import { WalkUtility } from '../../../resources/utilities/index.js';
test('unit_getAlbumURLParser', (t) => {
    const result = GetAlbumParser.parseAlbumURLPage(rawGetAlbumURL);
    const expected = [
        AlbumURL.from({
            AlbumURLHeader: AlbumURLHeader.from({
                artist: [Artist.from({
                        name: String(),
                        url: String(),
                        browseId: String(),
                    })],
                description: String(),
                title: String(),
                thumbnails: [
                    Thumbnails.from({
                        height: Number(),
                        url: String(),
                        width: Number(),
                    }),
                ],
                trackCount: Number(),
                totalRuntime: String(),
                date: String(),
            }),
            tracks: [
                Track.from({
                    title: String(),
                    videoId: String(),
                    playlistId: String(),
                    lengthMs: Number(),
                    url: String(),
                }),
            ],
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected[0]), 'result has expected shape');
    t.equals(result.AlbumURLHeader.title, 'Eyes wide open', 'title match');
    t.equals(result.tracks.length, 13, 'track count match');
    t.equals(result.AlbumURLHeader.thumbnails[0].url, 'https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj', 'thumbnails match');
    t.equals(result.tracks[9].videoId, 'nNTZw8yvMn8', 'random videoId check pass');
    t.end();
});
//# sourceMappingURL=unit_getAlbumURLParser.js.map