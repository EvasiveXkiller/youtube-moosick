import test from 'tape';
import rawGetArtistURL from '../dummy/rawGetArtistURL.json';
import { GetArtistParser } from '../../parsers/getArtistParser.js';
test('getArtistPlaylistParser', (t) => {
    const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL);
    // console.log(result);
    t.end();
});
//# sourceMappingURL=getArtistURLParser.js.map