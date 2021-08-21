import _ from 'lodash';
import { SongSearchResult } from './resources/resultTypes/songSearchResult';

import { utils } from './utils';
import { results } from './resources/resultTypes/results';
import { categoryType } from './enums';
import type { MusicResponsiveListItemFlexColumnRenderer } from './songresultRaw';
import type { Artist } from './resources/generalTypes/artist';
import type { Thumbnails } from './resources/generalTypes/thumbnails';
import type { Album } from './resources/generalTypes/album';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import objectScan from 'object-scan';
import type { Run } from './resources/resultTypes/sectionList';

export class parsers {
	// Make this one global function and call the other stuff
	// Probably other methods should be private
	static parseSearchResult(context: any, searchType?: categoryType): any {
		// Go to the part which i have no idea
		/**
         * Section list is an array of musiclistrenderer
         */
		let sectionList = utils.fv(context, 'musicResponsiveListItemRenderer');

		if (!Array.isArray(sectionList)) {
			sectionList = [sectionList];
		}

		sectionList.forEach((sectionContext: MusicListRenderer) => {
			const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
				rtn: 'parent',
				reverse: false,
			})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];
			// probably insert a type here
			const type = searchType ?? flexColumn[1].musicResponsiveListItemRenderer.text.runs[1].text as categoryType;
			switch (type) {
				case categoryType.SONG:
					parsers.parseSongSearchResult(sectionContext);
				case 'Song':
					// @frozen
					/*
                    I have no idea is this the best way
                    Seperate the process into objects, then build the output then return it
                    @type songSearchResults

                    type                convert it into enum
                    name                just use the value;
                    videoID             just get the videoID
                    URL                 concat the prefix with videoID
                    playlistID          just get the playlistID (if its a song then what the hell is this)
                    artist              an array of artist objects
                    Album               an object Album
                    duration            just get the duration in number miliseconds
                    Thumbnails          an array of Thumbnails objects
                    params              have no idea what is this
                     */

					// new parser
                // const type = _.nth(utils.fv(flexColumn[1], 'runs:text'), 0) as categoryType; // FIXME:  convert this string to enum i guess
                // const name = utils.fv(flexColumn[0], 'runs:text') as unknown as string;
                // const videoID = utils.fv(sectionContext, 'playNavigationEndpoint:videoId') as unknown as string;
                // const URL = `https://www.youtube.com/watch?v${utils.fv(sectionContext, 'playNavigationEndpoint:videoId')}` as unknown as string;
                // const playlistID = utils.fv(sectionContext, 'playNavigationEndpoint:playlistId') as unknown as string;
                // const artist = this.artistParser(flexColumn) as unknown as Artist;
                // const Album = this.albumParser(flexColumn) as unknown as Album;
                // const duration = utils.hms2ms(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 6))!;
                // const thumbnail = utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails') as unknown as Thumbnails;
                // const params = utils.fv(sectionContext, 'playNavigationEndpoint:params') as unknown;
                //
                // return new SongSearchResult(type, name, videoID, URL, playlistID, artist, Album, duration, thumbnail, params);
			}
		});
	}

	/**
	 * Build the song item
	 * @private
	 * @param sectionContext
	 */
	private static parseSongSearchResult(sectionContext: MusicResponsiveListItemFlexColumnRenderer[]) {
		const flexColumn = objectScan(['**.musicResponsiveListItemFlexColumnRenderer'], {
			rtn: 'parent',
			reverse: false,
		})(sectionContext) as MusicResponsiveListItemFlexColumnRenderer[];

		// eslint-disable-next-line no-warning-comments
		/*
	    FIXME objectScan has no ts typings so error everywhere
	    FIXME shove the stuff into a song object
	     */
		const type = categoryType.SONG;
		const name = objectScan(['**.text'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]) as string;
		const id = objectScan(['**.videoId'], { rtn: 'value', reverse: false, abort: true })(flexColumn[0]) as string;
		const url = `https://www.youtube.com/watch?v=${id}`;
		// const playlistId (have no idea do we need it or not, seems like the auto suggestion feature on normal browsers)
		const artist = utils.artistParser(flexColumn[1] as Run[]);
		const album = utils.albumParser(flexColumn[1] as Run[]);
		const duration = utils.hms2ms((flexColumn[flexColumn.length - 1].text) as string);
		const thumbnail = utils.thumbnailParser(sectionContext);
		// What is this supposed to do?
		// const params = ??
	}

// static parseSongSearchResult(context: any): Array<SongSearchResult> {
//     const result = {
//         content: [],
//         continuation: utils.fv(
//             context, 'nextContinuationData', true
//         )
//     }
//
//     let sectionList = utils.fv(
//         context, 'musicResponsiveListItemRenderer', true
//     )
//
//     if (!Array.isArray(sectionList)) {
//         sectionList = [sectionList]
//     }
//     sectionList.forEach(sectionContext => {
//         const flexColumn = utils.fv(
//             sectionContext, 'musicResponsiveListItemFlexColumnRenderer', true
//         )
//         result.content.push({
//             type: 'song',
//             videoId: utils.fv(sectionContext, 'playNavigationEndpoint:videoId', true),
//             playlistId: utils.fv(sectionContext, 'playNavigationEndpoint:playlistId'),
//             name: utils.fv(flexColumn[0], 'runs:text', true),
//             artist: (function () {
//                 var a = [],
//                     c = (utils.fv(flexColumn[1], 'runs'))
//                 if (Array.isArray(c)) {
//                     c = _.filter(c, function (o) {
//                         return o.navigationEndpoint
//                     })
//                     for (var i = 0; i < c.length; i++) {
//                         let browseId = utils.fv(c[i], 'browseEndpoint:browseId', true)
//                         if (browseId.startsWith('UC')) {
//                             a.push({
//                                 name: utils.fv(c[i], 'text', true),
//                                 browseId
//                             })
//                         }
//                     }
//                 } else {
//                     let browseId = utils.fv(c, 'browseEndpoint:browseId', true)
//                     if (browseId.startsWith('UC')) {
//                         a.push({
//                             name: utils.fv(c, 'text', true),
//                             browseId
//                         })
//                     }
//                 }
//                 return 1 < a.length ? a : 0 < a.length ? a[0] : a
//             })(),
//             Album: (function () {
//                 var c = _.first(utils.fv(flexColumn[1], 'runs', true))
//                 if (!Array.isArray(c) && c instanceof Object) return {
//                     name: utils.fv(c, 'text'),
//                     browseId: utils.fv(c, 'browseEndpoint:browseId', true)
//                 }
//                 return {}
//             })(),
//             duration: utils.hms2ms(_.last(utils.fv(flexColumn[1], 'runs:text', true))),
//             Thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails', true),
//             params: utils.fv(sectionContext, 'playNavigationEndpoint:params')
//         })
//
//     })
//     return result
// }
//
// static parseVideoSearchResult(context: any): any {
//     const result = {
//         content: [],
//         contination: utils.fv(
//             context, 'nextContinuationData'
//         )
//     }
//
//     var sectionList = utils.fv(
//         context, 'musicResponsiveListItemRenderer'
//     )
//     if (!Array.isArray(sectionList)) {
//         sectionList = [sectionList]
//     }
//     sectionList.forEach(sectionContext => {
//         const flexColumn = _.concat(utils.fv(
//             sectionContext, 'musicResponsiveListItemFlexColumnRenderer'
//         ))
//         result.content.push(Object.freeze({
//             type: 'video',
//             videoId: utils.fv(sectionContext, 'playNavigationEndpoint:videoId'),
//             playlistId: utils.fv(sectionContext, 'playNavigationEndpoint:playlistId'),
//             name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             author: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0),
//             views: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 2),
//             duration: utils.hms2ms(_.last(utils.fv(_.nth(flexColumn, 1), 'runs:text'))),
//             Thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails'),
//             params: utils.fv(sectionContext, 'playNavigationEndpoint:params')
//         }))
//     })
//     return result
// }
//
// static parseAlbumSearchResult(context: any): any {
//     const result = {
//         content: [],
//         contination: utils.fv(
//             context, 'nextContinuationData'
//         )
//     }
//
//     var sectionList = utils.fv(
//         context, 'musicResponsiveListItemRenderer'
//     )
//     if (!Array.isArray(sectionList)) {
//         sectionList = [sectionList]
//     }
//     sectionList.forEach(sectionContext => {
//         const flexColumn = _.concat(utils.fv(
//             sectionContext, 'musicResponsiveListItemFlexColumnRenderer'
//         ))
//         result.content.push(Object.freeze({
//             type: _.lowerCase(_.first(utils.fv(_.nth(flexColumn, 1), 'runs:text'))),
//             browseId: utils.fv(
//                 _.at(
//                     sectionContext, 'navigationEndpoint'
//                 ),
//                 'browseEndpoint:browseId'
//             ),
//             playlistId: utils.fv(sectionContext, 'toggledServiceEndpoint:playlistId', true),
//             name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             artist: _.join(_.filter(utils.fv(_.nth(flexColumn, 1), 'runs:text').slice(1, -1), v => ' • ' != v && true), ''),
//             year: _.last(utils.fv(_.nth(flexColumn, 1), 'runs:text')),
//             Thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails'),
//         }))
//     })
//     return result
// }
//
// static parseArtistSearchResult(context: any): any {
//     const result = {
//         content: [],
//         contination: utils.fv(
//             context, 'nextContinuationData'
//         )
//     }
//
//     var sectionList = utils.fv(
//         context, 'sectionListRenderer:musicResponsiveListItemRenderer'
//     )
//     if (!Array.isArray(sectionList)) {
//         sectionList = [sectionList]
//     }
//     sectionList.forEach(sectionContext => {
//         const flexColumn = _.concat(utils.fv(
//             sectionContext, 'musicResponsiveListItemFlexColumnRenderer'
//         ))
//         result.content.push(Object.freeze({
//             type: _.lowerCase(_.first(utils.fv(_.nth(flexColumn, 1), 'runs:text'))),
//             browseId: utils.fv(_.at(sectionContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
//             name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             Thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails')
//         }))
//     })
//     return result
// }
//
// static parsePlaylistSearchResult(context: any): any {
//     const result = {
//         content: [],
//         contination: utils.fv(
//             context, 'nextContinuationData'
//         )
//     }
//
//     var sectionList = utils.fv(
//         context, 'musicResponsiveListItemRenderer'
//     )
//     if (!Array.isArray(sectionList)) {
//         sectionList = [sectionList]
//     }
//     sectionList.forEach(sectionContext => {
//         const flexColumn = _.concat(utils.fv(
//             sectionContext, 'musicResponsiveListItemFlexColumnRenderer'
//         ))
//         result.content.push(Object.freeze({
//             type: 'playlist',
//             browseId: utils.fv(
//                 _.at(
//                     sectionContext, 'navigationEndpoint'
//                 ),
//                 'browseEndpoint:browseId'
//             ),
//             title: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             author: _.first(utils.fv(_.nth(flexColumn, 1), 'runs:text')),
//             trackCount: _.toNumber(
//                 _.nth(
//                     _.words(
//                         _.last(utils.fv(_.nth(flexColumn, 1), 'runs:text'))
//                     ),
//                     0
//                 )
//             ),
//             Thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:Thumbnails')
//         }))
//     })
//     return result
// }
//
// static parseArtistPage(context: any): any {
//     const result = {
//         name: '',
//         description: '',
//         views: '',
//         products: {},
//         Thumbnails: []
//     }
//
//     const headerContext = utils.fv(
//         context, 'musicImmersiveHeaderRenderer'
//     )
//     result.name = utils.fv(_.at(headerContext, 'title'), 'text')
//     result.Thumbnails = utils.fv(_.at(headerContext, 'thumbnail'), 'musicThumbnailRenderer:Thumbnails')
//
//     const descriptionContext = utils.fv(
//         context, 'musicDescriptionShelfRenderer'
//     )
//     if (!Array.isArray(descriptionContext)) {
//         result.description = utils.fv(_.at(descriptionContext, 'description'), 'text')
//         result.views = _.parseInt(
//             _.replace(
//                 _.nth(
//                     _.split(utils.fv(
//                             _.at(descriptionContext, 'subheader'),
//                             'text'
//                         ),
//                         ' '
//                     ),
//                     0
//                 ),
//                 /,/g, ''
//             ))
//     }
//
//     const nextMusicNavigation = utils.fv(context, 'musicShelfRenderer:bottomEndpoint:browseEndpoint')
//     if (!Array.isArray(nextMusicNavigation)) {
//         result.products.songs = {
//             content: [],
//             browseId: nextMusicNavigation.browseId,
//             params: nextMusicNavigation.params,
//         }
//     } else {
//         result.products.songs = {
//             content: []
//         }
//     }
//     utils.fv(context, 'musicShelfRenderer:musicResponsiveListItemRenderer').forEach(itemContext => {
//         const flexColumn = _.concat(utils.fv(
//             itemContext, 'musicResponsiveListItemFlexColumnRenderer'
//         ))
//         result.products.songs.content.push({
//             name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             Album: (function () {
//                 var c = (utils.fv(_.nth(flexColumn, 2), 'runs'))
//                 if (!Array.isArray(c) && c instanceof Object) return {
//                     name: utils.fv(c, 'text'),
//                     browseId: utils.fv(c, 'browseEndpoint:browseId')
//                 }
//                 return {}
//             })(),
//             artist: (function () {
//                 var a = [],
//                     c = (utils.fv(_.nth(flexColumn, 1), 'runs'))
//                 if (Array.isArray(c)) {
//                     c = _.filter(c, function (o) {
//                         return o.navigationEndpoint
//                     })
//                     for (var i = 0; i < c.length; i++) {
//                         a.push({
//                             name: utils.fv(c[i], 'text'),
//                             browseId: utils.fv(c[i], 'browseEndpoint:browseId')
//                         })
//                     }
//                 } else {
//                     a.push({
//                         name: utils.fv(c, 'text'),
//                         browseId: utils.fv(c, 'browseEndpoint:browseId')
//                     })
//                 }
//                 return 1 < a.length ? a : 0 < a.length ? a[0] : a
//             })()
//         })
//     })
//     utils.fv(context, 'musicCarouselShelfRenderer').forEach(carouselContext => {
//         const carouselName = _.lowerCase(utils.fv(carouselContext, 'musicCarouselShelfBasicHeaderRenderer:title:text'))
//
//         if (['albums', 'singles', 'videos'].includes(carouselName)) {
//             const nextCarouselNavigation = utils.fv(carouselContext, 'musicCarouselShelfBasicHeaderRenderer:title:navigationEndpoint:browseEndpoint')
//             if (!Array.isArray(nextCarouselNavigation)) {
//                 result.products[carouselName] = {
//                     content: [],
//                     browseId: nextCarouselNavigation.browseId,
//                     params: nextCarouselNavigation.params,
//                 }
//             } else {
//                 result.products[carouselName] = {
//                     content: []
//                 }
//             }
//
//             const itemContext = utils.fv(carouselContext, 'musicTwoRowItemRenderer')
//             if (Array.isArray(itemContext)) {
//                 for (let i = 0; i < itemContext.length; i++) {
//                     switch (carouselName) {
//                         case 'singles':
//                             result.products[carouselName].content.push({
//                                 type: 'single',
//                                 browseId: utils.fv(_.at(itemContext[i], 'navigationEndpoint'), 'browseEndpoint:browseId'),
//                                 name: utils.fv(_.at(itemContext[i], 'title'), 'text'),
//                                 year: utils.fv(_.at(itemContext[i], 'subtitle'), 'text'),
//                                 Thumbnails: utils.fv(itemContext[i], 'musicThumbnailRenderer:Thumbnails')
//                             })
//                             break
//                         case 'albums':
//                             result.products[carouselName].content.push({
//                                 type: _.nth(utils.fv(_.at(itemContext[i], 'subtitle'), 'text'), 0),
//                                 browseId: utils.fv(_.at(itemContext[i], 'navigationEndpoint'), 'browseEndpoint:browseId'),
//                                 name: utils.fv(_.at(itemContext[i], 'title'), 'text'),
//                                 year: _.nth(utils.fv(_.at(itemContext[i], 'subtitle'), 'text'), 2),
//                                 Thumbnails: utils.fv(itemContext[i], 'musicThumbnailRenderer:Thumbnails')
//                             })
//                             break
//                         case 'videos':
//                             result.products[carouselName].content.push({
//                                 type: 'video',
//                                 videoId: utils.fv(_.at(itemContext[i], 'title'), 'watchEndpoint:videoId'),
//                                 playlistId: utils.fv(_.at(itemContext[i], 'title'), 'watchEndpoint:playlistId'),
//                                 name: utils.fv(_.at(itemContext[i], 'title'), 'text'),
//                                 author: _.join(_.dropRight(utils.fv(_.at(itemContext[i], 'subtitle'), 'text'), 2), ''),
//                                 views: _.nth(utils.fv(_.at(itemContext[i], 'subtitle'), 'text'), 2),
//                                 Thumbnails: utils.fv(itemContext[i], 'musicThumbnailRenderer:Thumbnails')
//                             })
//                             break
//                     }
//                 }
//             } else if (itemContext instanceof Object) {
//                 switch (carouselName) {
//                     case 'singles':
//                         result.products[carouselName].content.push({
//                             type: 'single',
//                             browseId: utils.fv(_.at(itemContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
//                             name: utils.fv(_.at(itemContext, 'title'), 'text'),
//                             year: utils.fv(_.at(itemContext, 'subtitle'), 'text'),
//                             Thumbnails: utils.fv(itemContext, 'musicThumbnailRenderer:Thumbnails')
//                         })
//                         break
//                     case 'albums':
//                         result.products[carouselName].content.push({
//                             type: _.nth(utils.fv(_.at(itemContext, 'subtitle'), 'text'), 0),
//                             browseId: utils.fv(_.at(itemContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
//                             name: utils.fv(_.at(itemContext, 'title'), 'text'),
//                             year: _.nth(utils.fv(_.at(itemContext, 'subtitle'), 'text'), 2),
//                             Thumbnails: utils.fv(itemContext, 'musicThumbnailRenderer:Thumbnails')
//                         })
//                         break
//                     case 'videos':
//                         result.products[carouselName].content.push({
//                             type: 'video',
//                             videoId: utils.fv(_.at(itemContext, 'title'), 'watchEndpoint:videoId'),
//                             playlistId: utils.fv(_.at(itemContext, 'title'), 'watchEndpoint:playlistId'),
//                             name: utils.fv(_.at(itemContext, 'title'), 'text'),
//                             author: _.join(_.dropRight(utils.fv(_.at(itemContext, 'subtitle'), 'text'), 2), ''),
//                             views: _.nth(utils.fv(_.at(itemContext, 'subtitle'), 'text'), 2),
//                             Thumbnails: utils.fv(itemContext, 'musicThumbnailRenderer:Thumbnails')
//                         })
//                         break
//                 }
//             }
//         }
//     })
//     return result
// }
//
// static parsePlaylistPage = (context: any): any => {
//     const result = {
//         title: '',
//         owner: '',
//         trackCount: 0,
//         dateYear: '',
//         content: [],
//         Thumbnails: [],
//         continuation: utils.fv(
//             context, 'nextContinuationData', true
//         )
//     }
//
//     if (!_.has(context, 'continuationContents')) {
//         const pageHeader = utils.fv(
//             context, 'musicDetailHeaderRenderer'
//         )
//         result.title = utils.fv(_.at(pageHeader, 'title'), 'runs:text')
//         result.owner = _.nth(utils.fv(_.at(pageHeader, 'subtitle'), 'runs:text'), 2)
//         result.trackCount = parseInt(_.words(_.nth(utils.fv(_.at(pageHeader, 'secondSubtitle'), 'runs:text'), 0)))
//         result.dateYear = _.nth(utils.fv(_.at(pageHeader, 'subtitle'), 'runs:text'), 4)
//         result.Thumbnails = utils.fv(pageHeader, 'croppedSquareThumbnailRenderer:Thumbnails')
//     }
//
//     const itemContext = utils.fv(
//         context, 'musicResponsiveListItemRenderer'
//     )
//     if (Array.isArray(itemContext)) {
//         for (let i = 0; i < itemContext.length; i++) {
//             const flexColumn = utils.fv(
//                 itemContext[i], 'musicResponsiveListItemFlexColumnRenderer', true
//             )
//             result.content.push({
//                 videoId: utils.fv(itemContext[i], 'playNavigationEndpoint:videoId'),
//                 name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//                 author: (function () {
//                     var a = [],
//                         c = (utils.fv(_.nth(flexColumn, 1), 'runs'))
//                     if (Array.isArray(c)) {
//                         c = _.filter(c, function (o) {
//                             return o.navigationEndpoint
//                         })
//                         for (var i = 0; i < c.length; i++) {
//                             a.push({
//                                 name: utils.fv(c[i], 'text'),
//                                 browseId: utils.fv(c[i], 'browseEndpoint:browseId')
//                             })
//                         }
//                     } else {
//                         a.push({
//                             name: utils.fv(c, 'text'),
//                             browseId: utils.fv(c, 'browseEndpoint:browseId')
//                         })
//                     }
//                     return 1 < a.length ? a : 0 < a.length ? a[0] : a
//                 })(),
//                 duration: utils.hms2ms(utils.fv(itemContext[i], 'musicResponsiveListItemFixedColumnRenderer:runs:text', true)),
//                 Thumbnails: utils.fv(itemContext[i], 'musicThumbnailRenderer:Thumbnails')
//             })
//         }
//     } else {
//         const flexColumn = utils.fv(
//             itemContext, 'musicResponsiveListItemFlexColumnRenderer', true
//         )
//         result.content.push({
//             videoId: utils.fv(itemContext, 'playNavigationEndpoint:videoId'),
//             name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
//             author: (function () {
//                 var a = [],
//                     c = (utils.fv(_.nth(flexColumn, 1), 'runs'))
//                 if (Array.isArray(c)) {
//                     c = _.filter(c, function (o) {
//                         return o.navigationEndpoint
//                     })
//                     for (var i = 0; i < c.length; i++) {
//                         a.push({
//                             name: utils.fv(c[i], 'text'),
//                             browseId: utils.fv(c[i], 'browseEndpoint:browseId')
//                         })
//                     }
//                 } else {
//                     a.push({
//                         name: utils.fv(c, 'text'),
//                         browseId: utils.fv(c, 'browseEndpoint:browseId')
//                     })
//                 }
//                 return 1 < a.length ? a : 0 < a.length ? a[0] : a
//             })(),
//             duration: utils.hms2ms(utils.fv(itemContext, 'musicResponsiveListItemFixedColumnRenderer:runs:text', true)),
//             Thumbnails: utils.fv(itemContext, 'musicThumbnailRenderer:Thumbnails', true)
//         })
//     }
//     return result
// }
//
// static parseAlbumPage(context: any): any {
//     const result = {
//         title: '',
//         description: '',
//         trackCount: 0,
//         date: {
//             year: 0,
//             month: 0,
//             day: 0
//         },
//         duration: 0,
//         artist: [],
//         tracks: [],
//         Thumbnails: []
//     }
//
//     const albumRelease = utils.fv(
//         context, 'musicAlbumRelease'
//     )
//     result.title = albumRelease.title
//     result.trackCount = parseInt(albumRelease.trackCount)
//     result.date = albumRelease.releaseDate
//     result.duration = parseInt(albumRelease.durationMs)
//     result.playlistId = albumRelease.audioPlaylistId
//     result.Thumbnails = utils.fv(albumRelease, 'thumbnailDetails:Thumbnails')
//
//     const albumReleaseDetail = utils.fv(
//         context, 'musicAlbumReleaseDetail'
//     )
//     result.description = albumReleaseDetail.description
//
//     const albumArtist = utils.fv(
//         context, 'musicArtist'
//     )
//     if (albumArtist instanceof Array) {
//         for (let i = 0; i < albumArtist.length; i++) {
//             result.artist.push({
//                 name: albumArtist[i].name,
//                 browseId: albumArtist[i].externalChannelId,
//                 Thumbnails: utils.fv(albumArtist[i], 'thumbnailDetails:Thumbnails')
//             })
//         }
//     } else if (albumArtist instanceof Object) {
//         result.artist.push({
//             name: albumArtist.name,
//             browseId: albumArtist.externalChannelId,
//             Thumbnails: utils.fv(albumArtist, 'thumbnailDetails:Thumbnails')
//         })
//     }
//
//     const albumTrack = utils.fv(
//         context, 'musicTrack'
//     )
//     if (albumTrack instanceof Array) {
//         for (let i = 0; i < albumTrack.length; i++) {
//             result.tracks.push({
//                 name: albumTrack[i].title,
//                 videoId: albumTrack[i].videoId,
//                 artistNames: albumTrack[i].artistNames,
//                 duration: parseInt(albumTrack[i].lengthMs),
//                 Thumbnails: utils.fv(albumTrack[i], 'thumbnailDetails:Thumbnails')
//             })
//         }
//     } else if (albumTrack instanceof Object) {
//         result.tracks.push({
//             name: albumTrack.title,
//             videoId: albumTrack.videoId,
//             artistNames: albumTrack.artistNames,
//             duration: parseInt(albumTrack.lengthMs),
//             Thumbnails: utils.fv(albumTrack, 'thumbnailDetails:Thumbnails')
//         })
//     }
//     return result
// }
//
// static parseNextPanel(context: any): any {
//     const result = {
//         title: '',
//         playlistId: '',
//         content: [],
//         currentIndex: 0,
//         contination: utils.fv(
//             context, 'nextContinuationData'
//         )
//     }
//
//     const panelContext = utils.fv(context, "playlistPanelRenderer")
//     result.title = panelContext.title
//     result.playlistId = panelContext.playlistId
//     result.currentIndex = panelContext.currentIndex
//
//     utils.fv(panelContext, 'playlistPanelVideoRenderer').forEach(itemContext => {
//         result.content.push({
//             index: _.nth(_.at(itemContext, 'navigationEndpoint.watchEndpoint.index'), 0),
//             selected: _.nth(_.at(itemContext, 'selected'), 0),
//             videoId: _.nth(_.at(itemContext, 'videoId'), 0),
//             playlistId: _.nth(_.at(itemContext, 'navigationEndpoint.watchEndpoint.playlistId'), 0),
//             params: _.nth(_.at(itemContext, 'navigationEndpoint.watchEndpoint.params'), 0)
//         })
//     })
//     return result
//
// }
}
