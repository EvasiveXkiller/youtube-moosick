import _ from './node_modules/lodash/lodash.js';
import { utils } from './utils.js';

class parsers {
    // Make this one global function and call the other stuff
    // Probably other methods should be private
    static parseSearchResult(context, searchType) {
        // Go to the part which i have no idea
        /**
         * Section list is an array of musiclistrenderer

         */
        sectionContext;
        let sectionList = utils.fv(context, 'musicResponsiveListItemRenderer');
        if (!Array.isArray(sectionList))
            sectionList = [sectionList];
        sectionList.forEach((sectionContext) => {
            let flexColumn;
            flexColumn = _.concat(utils.fv(sectionContext, 'musicResponsiveListItemFlexColumnRenderer'));
            searchType ?? _.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 0); //FIXME:  convert this string to enum i guess
            switch (type) {
                case 'Song':
                    /*
                I have no idea is this the best way
                Seperate the process into objects, then build the output then return it
                @type songSearchResults

                type                convert it into enum
                name                just use the value;
                videoID             just get the videoID
                URL                 concat the prefix with videoID
                playlistID          just get the playlistID
                artist              an array of artist objects
                album               an object album
                duration            just get the duration in number miliseconds
                thumbnails          an array of thumbnails objects
                params              have no idea what is this
                 */
                    const type = _.nth(utils.fv(flexColumn[1], 'runs:text'), 0); //FIXME:  convert this string to enum i guess
                    utils.fv(flexColumn[0], "runs:text");
                    utils.fv(sectionContext, 'playNavigationEndpoint:videoId');
                    `https://www.youtube.com/watch?v${utils.fv(sectionContext, 'playNavigationEndpoint:videoId')}`;
                    utils.fv(sectionContext, 'playNavigationEndpoint:playlistId');
                    this.artistParser(flexColumn);
                    this.albumParser(flexColumn);
                    utils.hms2ms(_.nth(utils.fv(_.nth(flexColumn, 1), 'runs:text'), 6));
                    utils.fv(sectionContext, 'musicThumbnailRenderer:thumbnails');
                    utils.fv(sectionContext, 'playNavigationEndpoint:params');
            }
        });
    }
    static artistParser(flexColumn) {
        let a = [];
        let c = utils.fv(flexColumn[1], 'runs')[2];
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
    }
    static albumParser(flexColumn) {
        let c = (_.nth(utils.fv(_.nth(flexColumn[1], 'runs'), 4)));
        if (!Array.isArray(c) && c instanceof Object)
            return {
                name: utils.fv(c, 'text'),
                browseId: utils.fv(c, 'browseEndpoint:browseId')
            };
        return {};
    }
}

export { parsers };
//# sourceMappingURL=parsers.js.map
