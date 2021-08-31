import { $, $$ } from '../resources/utilities/objectScan.utility.js';
import { Thumbnails } from '../resources/generalTypes/thumbnails.js';
import { Artist } from '../resources/generalTypes/artist.js';
import { ConstantURLs, FlexColumnOffset, FlexSecondRowOffset } from '../enums.js';
import { Albums, ArtistContent, ArtistHeader, ArtistURL, Single, Videos } from '../resources/resultTypes/artistURL.js';
export class GetArtistParser {
    static parseArtistURLPage(context) {
        const subHeader = $('.musicDescriptionShelfRenderer')(context);
        // Builds the header
        const header = ArtistHeader.from({
            artistName: context.header.musicImmersiveHeaderRenderer.title.runs[FlexColumnOffset.ONLYRUN].text,
            description: subHeader.description.runs[FlexColumnOffset.ONLYRUN].text,
            // probably reduce the length of this access
            totalSubscribers: context.header.musicImmersiveHeaderRenderer.subscriptionButton.subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[FlexColumnOffset.ONLYRUN].text,
            thumbnails: this.parseMusicThumbnailRenderer($('.musicThumbnailRenderer')(context)),
        });
        const albums = [];
        const singles = [];
        const videos = [];
        // Gets the carousel, there should be 5 of them
        const twoRowRenderer = $$('.musicCarouselShelfRenderer')(context);
        for (const itemRenderer of twoRowRenderer) {
            // Gets the row name type
            const rowName = $$('.header .title .text')(itemRenderer)[0].toLowerCase();
            // Only parse the following, the others are not useful
            const validRows = ['albums', 'singles', 'videos'];
            if (!(validRows.includes(rowName))) {
                break;
            }
            // Gets the items in the carousel
            const musicItemRenderer = $$('.musicTwoRowItemRenderer')(itemRenderer);
            for (const blockRenderer of musicItemRenderer) {
                const runsInternal = blockRenderer.title.runs[FlexColumnOffset.ONLYRUN].text;
                // eslint-disable-next-line default-case
                switch (rowName) {
                    case 'albums': {
                        albums.push(Albums.from({
                            title: runsInternal,
                            browseId: blockRenderer.navigationEndpoint.browseEndpoint.browseId,
                            URL: `${ConstantURLs.CHANNEL_URL}${blockRenderer.navigationEndpoint.browseEndpoint.browseId}`,
                            year: parseInt(blockRenderer.subtitle.runs[blockRenderer.subtitle.runs.length - 1].text, 10),
                            thumbnails: this.parseMusicThumbnailRenderer(blockRenderer.thumbnailRenderer.musicThumbnailRenderer),
                        }));
                        break;
                    }
                    case 'singles': {
                        singles.push(Single.from({
                            title: runsInternal,
                            browseId: blockRenderer.navigationEndpoint.browseEndpoint.browseId,
                            URL: `${ConstantURLs.CHANNEL_URL}${blockRenderer.navigationEndpoint.browseEndpoint.browseId}`,
                            year: parseInt(blockRenderer.subtitle.runs[blockRenderer.subtitle.runs.length - 1].text, 10),
                            thumbnails: this.parseMusicThumbnailRenderer(blockRenderer.thumbnailRenderer.musicThumbnailRenderer),
                        }));
                        break;
                    }
                    case 'videos': {
                        videos.push(Videos.from({
                            title: runsInternal,
                            videoId: blockRenderer.navigationEndpoint?.watchEndpoint?.videoId ?? '',
                            URL: `${ConstantURLs.VIDEOLINK}${blockRenderer.navigationEndpoint?.watchEndpoint?.videoId ?? ''}`,
                            playlistId: blockRenderer.navigationEndpoint.watchEndpoint?.playlistId ?? '',
                            views: parseInt(blockRenderer.subtitle.runs[blockRenderer.subtitle.runs.length - 1].text, 10),
                            thumbnails: this.parseMusicThumbnailRenderer(blockRenderer.thumbnailRenderer.musicThumbnailRenderer),
                            author: this.parseArtistFromVideos(blockRenderer.subtitle.runs),
                        }));
                        break;
                    }
                }
            }
        }
        const artistContent = ArtistContent.from({
            albums,
            single: singles,
            videos,
        });
        return ArtistURL.from({
            headers: header,
            artistContents: artistContent,
        });
    }
    static parseMusicThumbnailRenderer(musicThumbnailRenderer) {
        const thumbnailsProcessed = [];
        musicThumbnailRenderer.thumbnail.thumbnails.forEach((item) => {
            thumbnailsProcessed.push(Thumbnails.from({
                url: item.url,
                width: item.width,
                height: item.height,
            }));
        });
        return thumbnailsProcessed;
    }
    static parseArtistFromVideos(subtitleRenderer) {
        const delimiter = ' • ';
        const positions = subtitleRenderer.flatMap((text, i) => text.text === delimiter ? i : []);
        const artistOnly = subtitleRenderer.slice(0, positions[FlexSecondRowOffset.ARTIST]);
        return artistOnly.map((element) => (Artist.from({
            name: element.text,
            browseId: element.navigationEndpoint?.browseEndpoint?.browseId ?? '',
            url: `${ConstantURLs.CHANNEL_URL}${element.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
        })));
    }
}
//# sourceMappingURL=getArtistParser.js.map