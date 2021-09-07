# Youtube-MooSick

<div>
    <img alt="TypeScript Build Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tscBuild">
    <img alt="Tests Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tests?color=blue&label=tests">
    <img alt="Latest Tag" src="https://img.shields.io/github/v/tag/EvasiveXkiller/youtube-moosick?label=Latest">
</div>

Unofficial YouTube Music Library, written in TypeScript.

```typescript
import {MooSick} from "MooSick";

const ytms = new MooSick.new();

// Using Async await 
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
  ....
 ]
*/
```

## Installation

```shell
npm install youtube-moosick
```

## API

### ytms.search(query, categoryName?)

▸ **search**(`query`, `searchType?`): `Promise`<`unknown`\>

Searches for songs using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | String query text to search |
| `searchType?` | [`Category`](./docs/enums/enums.Category.md) | `undefined` | Type of category to search |

#### Returns

`Promise`<`unknown`\>

An object formatted by parsers.js

See all available [return types](./docs/modules/resources_resultTypes.md)

Example

```typescript
const ytms = await MooSick.new();

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
  ....
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

### ytms.getSearchSuggestions(query);

▸ **
getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](./docs/classes/resources_resultTypes.SearchSuggestions.md)[]
\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](./docs/classes/resources_resultTypes.SearchSuggestions.md)[]\>

An object formatted with utils class

Example

```typescript
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

### ytms.getAlbum(browseId)

▸ **getAlbum**(`browseId`): `Promise`<[`AlbumURL`](./docs/classes/resources_resultTypes.AlbumURL.md)\>

Gets the album details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The album Id only, without `https://....` |

#### Returns

`Promise`<[`AlbumURL`](./docs/classes/resources_resultTypes.AlbumURL.md)\>

Album URL object

Example:

```typescript
const ytms = await MooSick.new();
const results = await ytms.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
/*
AlbumURL {
  title: 'Eyes wide open',
  trackCount: 13,
  date: ReleaseDate { day: 26, month: 10, year: 2020 },
  duration: 2611000,
  thumbnails: [
    Thumbnails {
      width: 60,
      height: 60,
      url: 'https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_
baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj'
    },
    Thumbnails {
      width: 120,
      height: 120,
      url: 'https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_
baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj'
    },
    ...
  ],
  description: `Eyes Wide Open is the second Korean studio album by South Korean
 girl group Twice. It was released on October 26, 2020, by JYP Entertainment and
 Republic Records. It is the ...",
  artist: [
    ArtistExtended {
      subs: undefined,
      name: 'TWICE',
      browseId: 'UCAq0pFGa2w9SjxOq0ZxKVIw',
      url: 'https://music.youtube.com/channel/UCAq0pFGa2w9SjxOq0ZxKVIw',
      thumbnails: [Array]
    }
  ],
  tracks: [
    Track {
      index: 1,
      lengthMs: 206000,
      title: "I CAN'T STOP ME",
      videoId: 'CM4CkVFmTds'
    },
    Track {
      index: 2,
      lengthMs: 180000,
      title: 'HELL IN HEAVEN',
      videoId: '0O18GnTW1CU'
    },
    ...
  ]
}
 */
```

### ytms.getArtist(browseId)

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](./docs/classes/resources_resultTypes.ArtistURL.md)\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist `browseId` only, without `https://....` |

#### Returns

`Promise`<[`ArtistURL`](./docs/classes/resources_resultTypes.ArtistURL.md)\>

An object formatted by the artist page

Example:

```typescript
const ytms = await MooSick.new();
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

### ytms.getPlaylist(browseId)

▸ **getPlaylist**(`browseId`
, `contentLimit?`): `Promise`<[`PlaylistURL`](./docs/classes/resources_resultTypes.PlaylistURL.md)\>

Gets the playlist using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist `browseId` only, without `https://....` |
| `contentLimit` | `number` | `100` | Maximum amount of contents to get, defaults to 100 |

#### Returns

`Promise`<[`PlaylistURL`](./docs/classes/resources_resultTypes.PlaylistURL.md)\>

An object formatted by the parser

Example:

```typescript
const ytms = await MooSick.new();
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

## Authors

- [EvasiveXkiller](https://github.com/EvasiveXkiller)

- [Sxxov](https://github.com/Sxxov)
