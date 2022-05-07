import test from 'tape';
import rawGetArtistURL from '../../dummy/rawGetArtistURL.json' assert { type: 'json' };
import { GetArtistParser } from '../../../parsers/getArtistParser.js';
import { WalkUtility } from '../../../resources/utilities/index.js';
import { Albums, ArtistContent, ArtistHeader, ArtistURL, Single, Videos } from '../../../resources/resultTypes/index.js';
import { Artist, Thumbnails } from '../../../resources/generalTypes/index.js';
test('unit_getArtistURLParser', (t) => {
    const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL);
    const expected = [
        ArtistURL.from({
            artistContents: ArtistContent.from({
                albums: [
                    Albums.from({
                        browseId: String(),
                        thumbnails: [
                            Thumbnails.from({
                                height: Number(),
                                url: String(),
                                width: Number(),
                            }),
                        ],
                        year: Number(),
                        URL: String(),
                        title: String(),
                    }),
                ],
                videos: [Videos.from({
                        title: String(),
                        URL: String(),
                        thumbnails: [
                            Thumbnails.from({
                                height: Number(),
                                url: String(),
                                width: Number(),
                            }),
                        ],
                        author: [
                            Artist.from({
                                name: String(),
                                url: String(),
                                browseId: String(),
                            }),
                        ],
                        videoId: String(),
                        playlistId: String(),
                        views: Number(),
                    })],
                single: [
                    Single.from({
                        browseId: String(),
                        thumbnails: [
                            Thumbnails.from({
                                height: Number(),
                                url: String(),
                                width: Number(),
                            }),
                        ],
                        year: Number(),
                        URL: String(),
                        title: String(),
                    }),
                ],
            }),
            headers: ArtistHeader.from({
                thumbnails: [
                    Thumbnails.from({
                        height: Number(),
                        url: String(),
                        width: Number(),
                    }),
                ],
                totalSubscribers: String(),
                description: String(),
                artistName: String(),
            }),
        }),
    ];
    t.true(WalkUtility
        .walkAndAssertShape(result, expected[0]), 'unit_getArtistURLParser result has expected shape');
    t.equals(result.headers.artistName, 'TWICE', 'title match');
    t.equals(result.headers.thumbnails[1].url, 'https://lh3.googleusercontent.com/lmbgcqGRdQLWqjyPgk7239RFd7bB2CRxf4JpS4ndFkZZzcVt1Ia6FHs6Kd4mbWwZQx6DLwHJVDRz3UrZ=w120-h120-l90-rj', 'thumbnails match');
    t.equals(result.artistContents.single[5].browseId, 'MPREb_AvQIOJGBHLA', 'random videoId check pass');
    t.end();
});
//# sourceMappingURL=unit_getArtistURLParser.js.map