# youtube-moosick

Unofficial YouTube Music Library, written in TypeScript.

<div>
    <img alt="TypeScript Build Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tscBuild">
    <img alt="Tests Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tests?color=blue&label=tests">
    <img alt="Latest Tag" src="https://img.shields.io/github/v/tag/EvasiveXkiller/youtube-moosick?label=Latest">
</div>
<br>

```ts
import { YoutubeMoosick } from "youtube-moosick";

const ytms = new YoutubeMoosick.new();

// Using async await 
const results = await ytms.search("Never gonna give you up");
console.log(results);

/*
ContinuableUnsorted(16) [
  Video {
    thumbnails: [ [Object] ],
    name: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoId: 'dQw4w9WgXcQ',
    author: [ [Artist] ],
    views: 1000,
    length: 213000
  },
  Song {
    type: 'SONG',
    artist: [ [Artist] ],
    album: [ [Album] ],
    duration: 214000,
    name: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=lYBUbBu4W08',
    videoId: 'lYBUbBu4W08',
    thumbnails: [ [Object], [Object] ],
    playlistId: 'RDAMVMlYBUbBu4W08',
    params: 'wAEB'
  },
  // ...
 ]
*/
```

## Installation

```bash
npm i youtube-moosick
```


## API

* [`search`](#search)
* [`getSearchSuggestions`](#getsearchsuggestions)
* [`getAlbum`](#getalbum)
* [`getArtist`](#getartist)
* [`getPlaylist`](#getplaylist)

### `search`

▸ **search**(`query`, `searchType?`): `Promise`<`unknown`\>

Searches YouTube Music.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | String query text to search |
| `searchType?` | [`Category`](./docs/enums/enums.Category.md) | `undefined` | Type of category to search |

#### Returns

The return of this function depends on the supplied value of `searchType`.


| Category | Return Type |
| :------ | :------ |
| `undefined` | `Promise`<[`ContinuableUnsorted`](./docs/classes/index.ContinuableUnsorted.md)\> |
| [`Category.SONG`](./docs/enums/enums.Category.md#song) | `Promise`<[`ContinuableResult`](./docs/classes/index.ContinuableResult.md)[`<Song>`](./docs/classes/index.Song.md)\> |
| [`Category.VIDEO`](./docs/enums/enums.Category.md#video) | `Promise`<[`ContinuableResult`](./docs/classes/index.ContinuableResult.md)[`<Video>`](./docs/classes/index.Video.md)\> |
| [`Category.ALBUM`](./docs/enums/enums.Category.md#album),[`Category.SINGLE`](./docs/enums/enums.Category.md#single),[`Category.EP`](./docs/enums/enums.Category.md#ep)| `Promise`<[`ContinuableResult`](./docs/classes/index.ContinuableResult.md)[`<Album>`](./docs/classes/index.Album.md)\> |
| [`Category.ARTIST`](./docs/enums/enums.Category.md#artist) | `Promise`<[`ContinuableResult`](./docs/classes/index.ContinuableResult.md)[`<ArtistExtended>`](./docs/classes/index.ArtistExtended.md)\> |
| [`Category.PLAYLIST`](./docs/enums/enums.Category.md#playlist) | `Promise`<[`ContinuableResult`](./docs/classes/index.ContinuableResult.md)[`<Playlist>`](./docs/classes/index.Playlist.md)\> |

For more info, see [here](./docs/modules/index.md).

##### Example

```ts
const ytms = await YoutubeMoosick.new();

// Get the general search results.
const resultsGeneral = await ytms.search('Never gonna give you up');
console.log(resultsGeneral)
/*
ContinuableUnsorted(16) [
  Video {
    thumbnails: [ [Object] ],
    name: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoId: 'dQw4w9WgXcQ',
    author: [ [Artist] ],
    views: 1000,
    length: 213000
  },
  Song {
    type: 'SONG',
    artist: [ [Artist] ],
    album: [ [Album] ],
    duration: 214000,
    name: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=lYBUbBu4W08',
    videoId: 'lYBUbBu4W08',
    thumbnails: [ [Object], [Object] ],
    playlistId: 'RDAMVMlYBUbBu4W08',
    params: 'wAEB'
  },
  // ...
 ]
 */

// Gets a specific category
const resultsSong = await ytms.search('Never gonna give you up', Category.SONG);
console.log(resultsSong)
/*
ContinuableResult(20) [
  Song {
    type: 'SONG',
    artist: [ [Artist] ],
    album: [ [Album] ],
    duration: 214000,
    name: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=lYBUbBu4W08',
    videoId: 'lYBUbBu4W08',
    thumbnails: [ [Object], [Object] ],
    playlistId: 'RDAMVMlYBUbBu4W08',
    params: 'wAEB'
  },
  Song {
    type: 'SONG',
    artist: [ [Artist] ],
    album: [ [Album] ],
    duration: 267000,
    name: 'Never Gonna Give You Up (Rick Astley)',
    url: 'https://www.youtube.com/watch?v=4ywFyK8cCg4',
    videoId: '4ywFyK8cCg4',
    thumbnails: [ [Object], [Object] ],
    playlistId: 'RDAMVM4ywFyK8cCg4',
    params: 'wAEB'
  },
  ....
]
*/
```

<br>

### `getSearchSuggestions`

▸ **getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](./docs/classes/index.SearchSuggestions.md)[]>

Fetches search suggestions from YouTube Music.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](./docs/classes/index.SearchSuggestions.md)[]\>

An object containing data gotten from the search.

##### Example

```ts
const suggestions = ytms.getSearchSuggestions("All We know");
console.log(suggestions);
/*
[
  SearchSuggestions { artist: '', title: 'all we know' },
  SearchSuggestions { artist: ' chainsmokers lyrics', title: 'all we know'},
  SearchSuggestions { artist: ' shy', title: 'all we know' },
  SearchSuggestions { artist: ' slowed', title: 'all we know' },
  SearchSuggestions { artist: ' remix', title: 'all we know' },
  SearchSuggestions { artist: ' nightcore', title: 'all we know' },
  SearchSuggestions { artist: ' paramore', title: 'all we know' }
]
*/
```

<br>

### `getAlbum`

▸ **getAlbum**(`browseId`): `Promise`<[`AlbumURL`](./docs/classes/index.AlbumURL.md)\>

Fetches album details from YouTube Music.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The album Id only, without `https://....` |

#### Returns

`Promise`<[`AlbumURL`](./docs/classes/index.AlbumURL.md)\>

An object containing data of the Album requested.

##### Example

```ts
const ytms = await YoutubeMoosick.new();
const results = await ytms.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
/*
AlbumURL {
  AlbumURLHeader: AlbumURLHeader {
    title: 'Eyes wide open',
    description: `Eyes Wide Open is the second Korean studio album by South Korean girl group Twice. It was released on
October 26, 2020, by JYP Entertainment and Republic Records. It is the group's first ...",
    date: '2020',
    thumbnails: [ [Object], [Object], [Object], [Object] ],
    trackCount: 13,
    totalRuntime: '43 minutes',
    artist: [ [Artist] ]
  },
  tracks: [
    Track {
      lengthMs: 206000,
      title: "I CAN'T STOP ME",
      videoId: 'CM4CkVFmTds',
      playlistId: 'OLAK5uy_nGyCX4aNigDzsvNSRZ63NPiH75wef3lCw',
      url: 'https://www.youtube.com/watch?v=CM4CkVFmTds'
    },
    Track {
      lengthMs: 180000,
      title: 'HELL IN HEAVEN',
      videoId: '0O18GnTW1CU',
      playlistId: 'OLAK5uy_nGyCX4aNigDzsvNSRZ63NPiH75wef3lCw',
      url: 'https://www.youtube.com/watch?v=0O18GnTW1CU'
    },
    Track {
      lengthMs: 215000,
      title: 'UP NO MORE',
      videoId: 'Qgylz1pLFE0',
      playlistId: 'OLAK5uy_nGyCX4aNigDzsvNSRZ63NPiH75wef3lCw',
      url: 'https://www.youtube.com/watch?v=Qgylz1pLFE0'
    },
    ....
  ]
}
*/
```

<br>

### `getArtist`

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](./docs/classes/index.ArtistURL.md)\>

Fetches artist details from YouTube Music.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist `browseId` only, without `https://....` |

#### Returns

`Promise`<[`ArtistURL`](./docs/classes/index.ArtistURL.md)\>

An object containing data of the Artist requested.

##### Example

```ts
const ytms = await YoutubeMoosick.new();
const results = await ytms.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

console.log(results);
/*
ArtistURL {
  headers: ArtistHeader {
    artistName: 'TWICE',
    description: 'Twice, commonly stylized as TWICE, is a South Korean girl grou
p formed by JYP Entertainment. The group is composed of nine members: Nayeon, Je
ongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was ...',
    totalSubscribers: '11.5M',
    thumbnails: [ [Thumbnails], [Thumbnails] ]
  },
  artistContents: ArtistContent {
    albums: [
      [Albums], [Albums],
      [Albums], [Albums],
      [Albums], [Albums],
      [Albums], [Albums],
      [Albums], [Albums]
    ],
    single: [
      [Single], [Single],
      [Single], [Single],
      [Single], [Single],
      [Single], [Single],
      [Single], [Single]
    ],
    videos: [
      [Videos], [Videos],
      [Videos], [Videos],
      [Videos], [Videos],
      [Videos], [Videos],
      [Videos], [Videos]
    ]
  }
}
*/
```

<br>

### `getPlaylist`

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`PlaylistURL`](./docs/classes/index.PlaylistURL.md)\>

Fetches playlist details from YouTube Music.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist `browseId` only, without `https://....` |
| `contentLimit` | `number` | `100` | Maximum amount of contents to get, defaults to 100 |

#### Returns

`Promise`<[`PlaylistURL`](./docs/classes/index.PlaylistURL.md)\>

An object containing data of the Playlist requested.

##### Example

```ts
const ytms = await YoutubeMoosick.new();
const results = await ytms.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
/*
PlaylistURL {
  headers: PlaylistHeader {
    playlistName: 'The Chainsmokers - All We Know ft. Phoebe Ryan',
    owner: 'Jakub Gabryš',
    createdYear: 2021,
    thumbnail: [ [Object], [Object], [Object] ],
    songCount: 38,
    approxRunTime: '1+ hours'
  },
  playlistContents: [
    {
      trackTitle: 'All We Know (feat. Phoebe Ryan)',
      trackId: 'lEi_XBg2Fpk',
      artist: [Array],
      thumbnail: [Array]
    },
    {
      trackTitle: 'The Chainsmokers ft. Phoebe Ryan : All We Know - Lyrics',
      trackId: '4kNcLZ3kcZg',
      artist: [Array],
      thumbnail: [Array]
    },
    ...
  ],
  continuation: {
    continuation: '4qmFsgIwEiRWTFBMWHM5MjFrS244WFQ1X2JxNWtSMmdRX2J************
GtnRURDTTBH',
    clickTrackingParams: 'CBIQybcCIhMI1KHIoI7E8gIVC8***********'
  }
}
 */
```

## Tests

Tests are written in [tape](https://github.com/substack/tape)
```shell
npm run test
```
These tests are real life tests, they actually run a query to simulate a real life situation.

## Contributing

All contributions are welcome. File an [issue](https://github.com/EvasiveXkiller/youtube-moosick/issues) if you find something wrong, & a [pull request](https://github.com/EvasiveXkiller/youtube-moosick/pulls) if you can fix it.

## Authors

- [EvasiveXkiller](https://github.com/EvasiveXkiller)

- [Sxxov](https://github.com/Sxxov)

## License
<!-- markdown-link-check-disable-next-line -->
[MIT](https://opensource.org/licenses/MIT)
