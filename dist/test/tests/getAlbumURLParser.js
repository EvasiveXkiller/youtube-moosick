import test from 'tape';
import rawGetAlbumURL from '../dummy/rawGetAlbumURL.json';
import { GetAlbumParser } from '../../parsers/getAlbumParser.js';
test('getAlbumURLParser', (t) => {
    const result = GetAlbumParser.parseAlbumURLPage(rawGetAlbumURL);
    console.log(result);
    t.end();
});
//# sourceMappingURL=getAlbumURLParser.js.map