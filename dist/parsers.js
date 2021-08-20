import _ from './node_modules/lodash/lodash.js';
import { utils } from './utils.js';
import { results } from './resources/resultTypes/results.js';

class parsers {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        const result = new results();
        // Go to the part which i have no idea
        let sectionList = utils.fv(context, 'musicResponsiveListItemRenderer');
        if (!Array.isArray(sectionList)) {
            sectionList = [sectionList];
        }
        sectionList.forEach((sectionContext) => {
            const flexColumn = _.concat(utils.fv(sectionContext, 'musicResponsiveListItemFlexColumnRenderer'));
            const type = searchType ?? _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0);
            switch (type) {
                case 'Song':
                    // @ts-ignore
                    result.content.push(Object.freeze({
                        type: _.lowerCase(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0)),
                        videoId: utils.fv(sectionContext, 'playNavigationEndpoint:videoId'),
                        playlistId: utils.fv(sectionContext, 'playNavigationEndpoint:playlistId'),
                        name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
                        artist: (function () {
                            var a = [], c = (_.nth(utils.fv(_.nth(flexColumn, 1), 'runs'), 2));
                            if (Array.isArray(c)) {
                                c = _.filter(c, function (o) {
                                    return o.navigationEndpoint;
                                });
                                for (var i = 0; i < c.length; i++) {
                                    a.push({
                                        name: utils.fv(c[i], 'text'),
                                        browseId: utils.fv(c[i], 'browseEndpoint:browseId')
                                    });
                                }
                            }
                            else {
                                a.push({
                                    name: utils.fv(c, 'text'),
                                    browseId: utils.fv(c, 'browseEndpoint:browseId')
                                });
                            }
                            return 1 < a.length ? a : 0 < a.length ? a[0] : a;
                        })(),
                        album: (function () {
                            var c = (_.nth(utils.fv(_.nth(flexColumn, 1), 'runs'), 4));
                            if (!Array.isArray(c) && c instanceof Object)
                                return {
                                    name: utils.fv(c, 'text'),
                                    browseId: utils.fv(c, 'browseEndpoint:browseId')
                                };
                            return {};
                        })(),
                        duration: utils.hms2ms(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 6)),
                        thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails'),
                        params: utils.fv(sectionContext, 'playNavigationEndpoint:params')
                    }));
                    break;
                case 'Video':
                    result.content.push(Object.freeze({
                        type: _.lowerCase(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0)),
                        videoId: utils.fv(sectionContext, 'playNavigationEndpoint:videoId'),
                        playlistId: utils.fv(sectionContext, 'playNavigationEndpoint:playlistId'),
                        name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
                        author: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 2),
                        views: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 4),
                        duration: utils.hms2ms(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 6)),
                        thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails'),
                        params: utils.fv(sectionContext, 'playNavigationEndpoint:params'),
                    }));
                    break;
                case 'Artist':
                    result.content.push(Object.freeze({
                        type: _.lowerCase(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0)),
                        browseId: utils.fv(_.at(sectionContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
                        name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
                        thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails')
                    }));
                    break;
                case 'EP':
                case 'Single':
                case 'Album':
                    result.content.push(Object.freeze({
                        type: _.lowerCase(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0)),
                        browseId: utils.fv(_.at(sectionContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
                        playlistId: utils.fv(sectionContext, 'playNavigationEndpoint:playlistId'),
                        name: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
                        artist: (_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 2)),
                        year: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 4),
                        thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails')
                    }));
                    break;
                case 'Playlist':
                    result.content.push(Object.freeze({
                        type: _.lowerCase(utils.fv(_.nth(flexColumn, 1), 'runs:text')),
                        browseId: utils.fv(_.at(sectionContext, 'navigationEndpoint'), 'browseEndpoint:browseId'),
                        title: utils.fv(_.nth(flexColumn, 0), 'runs:text'),
                        author: _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 3),
                        count: _.toNumber(_.nth(_.words(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 5)), 0)),
                        thumbnails: utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails')
                    }));
                    break;
            }
        });
        return result;
    }
}

export { parsers };
//# sourceMappingURL=parsers.js.map
