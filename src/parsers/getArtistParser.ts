import objectScan from 'object-scan';
import { Thumbnails } from '../resources/generalTypes/thumbnails';
import { Artist } from '../resources/generalTypes/artist';
import { ConstantURLs } from '../enums';
import { Albums, ArtistContent, ArtistHeader, ArtistURL, Single, Videos } from '../resources/resultTypes/artistURL';
import type { MusicThumbnailRenderer } from '../resources/rawResultTypes/comfirmedInterfaces';
import type {
	ArtistURLFullResult,
	MusicDescriptionShelfRenderer,
	MusicTwoRowItemRenderer,
	MusicCarouselShelfRenderer, SubtitleRun,
} from '../resources/rawResultTypes/rawGetArtistURL';

export class GetArtistParser {
	public static parseArtistURLPage(context: ArtistURLFullResult): ArtistURL {
		const subHeader = (objectScan(['**.musicDescriptionShelfRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context) as MusicDescriptionShelfRenderer[])[0];

		// Builds the header
		const header = ArtistHeader.from({
			artistName: context.header.musicImmersiveHeaderRenderer.title.runs[0].text,
			description: subHeader.description.runs[0].text,
			// probably reduce the length of this access
			totalSubscribers: context.header.musicImmersiveHeaderRenderer.subscriptionButton.subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[0].text,
			thumbnails: this.parseMusicThumbnailRenderer(objectScan(['**.musicThumbnailRenderer'], {
				rtn: 'value',
				reverse: false,
			})(subHeader) as MusicThumbnailRenderer),
		});
		const albums: Albums[] = [];
		const singles: Single[] = [];
		const videos: Videos[] = [];
		// Gets the carousel, there should be 5 of them
		const twoRowRenderer = (objectScan(['**.musicCarouselShelfRenderer'], {
			rtn: 'value',
			reverse: false,
		})(context)) as MusicCarouselShelfRenderer[];

		for (const itemRenderer of twoRowRenderer) {
			// Gets the row name type
			const rowName = (objectScan(['header.**.title.**.text'], {
				rtn: 'value',
				reverse: false,
			})(itemRenderer) as string[])[0].toLowerCase()!;
			// Only parse the following, the others are not useful
			const validRows = ['albums', 'singles', 'videos'];
			if (!(validRows.includes(rowName))) {
				break;
			}

			// Gets the items in the carousel
			const musicItemRenderer = (objectScan(['**.musicTwoRowItemRenderer'], {
				rtn: 'value',
				reverse: false,
			})(itemRenderer) as MusicTwoRowItemRenderer[]);
			console.log(musicItemRenderer);
			for (const blockRenderer of musicItemRenderer) {
				const runsInternal = blockRenderer.title.runs[0].text;

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
							views: parseInt(blockRenderer.subtitle.runs[blockRenderer.subtitle.runs.length - 1].text, 10)!,
							thumbnails: this.parseMusicThumbnailRenderer(blockRenderer.thumbnailRenderer.musicThumbnailRenderer),
							author: this.parseArtistFromVideos(blockRenderer.subtitle.runs),
						}));
						break;
					}
				}
			}
		}

		// wtf is not used here
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

	private static parseMusicThumbnailRenderer(musicThumbnailRenderer: MusicThumbnailRenderer): Thumbnails[] {
		const thumbnailsProcessed: Thumbnails[] = [];
		musicThumbnailRenderer.thumbnail.thumbnails.forEach((item: Thumbnails) => {
			thumbnailsProcessed.push(Thumbnails.from({
				url: item.url,
				width: item.width,
				height: item.height,
			}));
		});
		// har?
		return thumbnailsProcessed;
	}

	private static parseArtistFromVideos(subtitleRenderer: SubtitleRun[]): Artist[] {
		const delimiter = ' • ';
		const positions = subtitleRenderer.flatMap((text, i) => text.text === delimiter ? i : []);
		const artistOnly = subtitleRenderer.slice(0, positions[0]);
		return artistOnly.map((element) => (Artist.from({
			name: element.text,
			browseId: element.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: `${ConstantURLs.CHANNEL_URL}${element.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
		})));
	}
}
