import objectScan from 'object-scan';
import { Thumbnails } from '../resources/generalTypes/thumbnails.js';
import { Artist } from '../resources/generalTypes/artist.js';
import {ConstantURLs, flexColumnType, flexSecondRowOffset} from '../enums.js';
import { Albums, ArtistContent, ArtistHeader, ArtistURL, Single, Videos } from '../resources/resultTypes/artistURL.js';
import type { MusicThumbnailRenderer } from '../resources/rawResultTypes/common.js';
import type {
	ArtistURLFullResult,
	MusicDescriptionShelfRenderer,
	MusicTwoRowItemRenderer,
	MusicCarouselShelfRenderer, SubtitleRun,
} from '../resources/rawResultTypes/rawGetArtistURL.js';
import { $, $$ } from '../resources/utilities/objectScan.utility.js';

export class GetArtistParser {
	public static parseArtistURLPage(context: ArtistURLFullResult): ArtistURL {
		const subHeader = $('.musicDescriptionShelfRenderer')(context) as MusicDescriptionShelfRenderer;

		// Builds the header
		const header = ArtistHeader.from({
			artistName: context.header.musicImmersiveHeaderRenderer.title.runs[flexColumnType.ONLYRUN].text,
			description: subHeader.description.runs[flexColumnType.ONLYRUN].text,
			// probably reduce the length of this access
			totalSubscribers: context.header.musicImmersiveHeaderRenderer.subscriptionButton.subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[flexColumnType.ONLYRUN].text,
			thumbnails: this.parseMusicThumbnailRenderer($('.musicThumbnailRenderer')(context) as MusicThumbnailRenderer),
		});
		const albums: Albums[] = [];
		const singles: Single[] = [];
		const videos: Videos[] = [];
		// Gets the carousel, there should be 5 of them
		const twoRowRenderer = $$('.musicCarouselShelfRenderer')(context) as MusicCarouselShelfRenderer[];

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

			for (const blockRenderer of musicItemRenderer) {
				const runsInternal = blockRenderer.title.runs[flexColumnType.ONLYRUN].text;

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
		return thumbnailsProcessed;
	}

	private static parseArtistFromVideos(subtitleRenderer: SubtitleRun[]): Artist[] {
		const delimiter = ' • ';
		const positions = subtitleRenderer.flatMap((text, i) => text.text === delimiter ? i : []);
		const artistOnly = subtitleRenderer.slice(0, positions[flexSecondRowOffset.ARTIST]);
		return artistOnly.map((element) => (Artist.from({
			name: element.text,
			browseId: element.navigationEndpoint?.browseEndpoint?.browseId ?? '',
			url: `${ConstantURLs.CHANNEL_URL}${element.navigationEndpoint?.browseEndpoint?.browseId ?? ''}`,
		})));
	}
}
