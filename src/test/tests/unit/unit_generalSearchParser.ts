import test from 'tape';
import { Category } from '../../../enums.js';
import { GeneralParser } from '../../../parsers/generalParser.js';
import { Album, AlbumExtended } from '../../../resources/generalTypes/album.js';
import { Artist, ArtistExtended } from '../../../resources/generalTypes/artist.js';
import { Playlist } from '../../../resources/generalTypes/playlist.js';
import { Song } from '../../../resources/generalTypes/song.js';
import { Thumbnails } from '../../../resources/generalTypes/thumbnails.js';
import { Video } from '../../../resources/generalTypes/video.js';
import { EitherShape, WalkUtility } from '../../../resources/utilities/walk.utility.js';
import generalSearchFull from '../../dummy/general/generalSearchFull.json';

test('GeneralParser', async (t) => {
	const { result } = GeneralParser.parseSearchResult(generalSearchFull as any);

	const expected = [
		new EitherShape([
			Video.from({
				name: String(),
				url: String(),
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				videoId: String(),
				author: [
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
				views: Number(),
				length: Number(),
			}),
			Song.from({
				name: String(),
				artist: [
					Artist.from({
						browseId: String(),
						name: String(),
						url: String(),
					}),
				],
				playlistId: new EitherShape([String(), undefined]) as unknown as string,
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				videoId: String(),
				url: String(),
				duration: Number(),
				album: [
					Album.from({
						browseId: String(),
						name: String(),
						url: String(),
					}),
				],
				params: String(),
				type: Category.SONG,
			}),
			AlbumExtended.from({
				name: String(),
				url: String(),
				browseId: String(),
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				artist: [
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
				year: new EitherShape([Number(), undefined]) as unknown as number,
			}),
			Playlist.from({
				name: String(),
				browseId: String(),
				author: [
					Artist.from({
						name: String(),
						url: String(),
						browseId: String(),
					}),
				],
				trackCount: Number(),
			}),
			ArtistExtended.from({
				name: String(),
				url: String(),
				browseId: String(),
				thumbnails: [
					Thumbnails.from({
						height: Number(),
						url: String(),
						width: Number(),
					}),
				],
				subs: new EitherShape([String(), undefined]) as unknown as string,
			}),
		]),
	];

	t.true(
		WalkUtility
			.walkAndAssertShape(
				result,
				expected as unknown as typeof result,
			),
		'result has expected shape',
	);

	t.end();
});
