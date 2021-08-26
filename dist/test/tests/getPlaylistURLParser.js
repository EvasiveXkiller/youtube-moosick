import test from 'tape';
import rawGetPlaylistURL from '../dummy/rawGetPlaylistURL.json';
import { GetPlaylistParser } from '../../parsers/getPlaylistParser.js';
test('getAlbumURLParser', (t) => {
    const result = GetPlaylistParser.parsePlaylistURL(rawGetPlaylistURL);
    console.log(result);
    t.end();
});
//# sourceMappingURL=getPlaylistURLParser.js.map