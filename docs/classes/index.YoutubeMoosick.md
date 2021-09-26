[youtube-moosick](../README.md) / [index](../modules/index.md) / YoutubeMoosick

# Class: YoutubeMoosick

[index](../modules/index.md).YoutubeMoosick

Main class to interact with methods

## Hierarchy

- `AsyncConstructor`

  ↳ **`YoutubeMoosick`**

## Table of contents

### Methods

- [getAlbum](index.YoutubeMoosick.md#getalbum)
- [getArtist](index.YoutubeMoosick.md#getartist)
- [getPlaylist](index.YoutubeMoosick.md#getplaylist)
- [getSearchSuggestions](index.YoutubeMoosick.md#getsearchsuggestions)
- [search](index.YoutubeMoosick.md#search)

## Methods

### getAlbum

▸ **getAlbum**(`browseId`): `Promise`<[`AlbumURL`](index.AlbumURL.md)\>

Gets the album details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The album Id only, without `https://....` |

#### Returns

`Promise`<[`AlbumURL`](index.AlbumURL.md)\>

AlbumURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
```

#### Defined in

[src/YoutubeMoosick.ts:306](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L306)

___

### getArtist

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](index.ArtistURL.md)\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist `browseId` only, without `https://....` |

#### Returns

`Promise`<[`ArtistURL`](index.ArtistURL.md)\>

ArtistURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

console.log(results);
```

#### Defined in

[src/YoutubeMoosick.ts:383](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L383)

___

### getPlaylist

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`ContinuablePlaylistURL`](index.ContinuablePlaylistURL.md)\>

Gets the playlist using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist `browseId` only, without `https://....` |
| `contentLimit` | `number` | `100` | Maximum amount of contents to get, defaults to 100 |

#### Returns

`Promise`<[`ContinuablePlaylistURL`](index.ContinuablePlaylistURL.md)\>

PlaylistURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
```

#### Defined in

[src/YoutubeMoosick.ts:333](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L333)

___

### getSearchSuggestions

▸ **getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](index.SearchSuggestions.md)[]\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](index.SearchSuggestions.md)[]\>

An object formatted by parsers.js

Example
```typescript
const suggestions = api.getSearchSuggestions("All We know");
console.log(suggestions);
```

#### Defined in

[src/YoutubeMoosick.ts:212](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L212)

___

### search

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableUnsorted`](index.ContinuableUnsorted.md)\>

Searches for songs using the Youtube Music API

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |
| `searchType?` | `T` | Type of category to search |

#### Returns

`Promise`<[`ContinuableUnsorted`](index.ContinuableUnsorted.md)\>

An object formatted by parsers.js

Example
```typescript
const api = await MooSick.new();

// Get the general search results.
const resultsGeneral = await api.search('Never gonna give you up');
console.log(resultsGeneral)

// Gets a specific category
const resultsSong = await api.search('Never gonna give you up', Category.SONG);
console.log(resultsSong)
```

#### Defined in

[src/YoutubeMoosick.ts:255](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L255)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Video`](index.Video.md), `ContinuableResultBlueprint`<[`Video`](index.Video.md)\>, [`Video`](index.Video.md)[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`VIDEO`](../enums/enums.Category.md#video) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Video`](index.Video.md), `ContinuableResultBlueprint`<[`Video`](index.Video.md)\>, [`Video`](index.Video.md)[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:256](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L256)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Song`](index.Song.md), `ContinuableResultBlueprint`<[`Song`](index.Song.md)\>, [`Song`](index.Song.md)[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SONG`](../enums/enums.Category.md#song) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Song`](index.Song.md), `ContinuableResultBlueprint`<[`Song`](index.Song.md)\>, [`Song`](index.Song.md)[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:257](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L257)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Playlist`](index.Playlist.md), `ContinuableResultBlueprint`<[`Playlist`](index.Playlist.md)\>, [`Playlist`](index.Playlist.md)[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PLAYLIST`](../enums/enums.Category.md#playlist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Playlist`](index.Playlist.md), `ContinuableResultBlueprint`<[`Playlist`](index.Playlist.md)\>, [`Playlist`](index.Playlist.md)[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:258](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L258)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`ArtistExtended`](index.ArtistExtended.md), `ContinuableResultBlueprint`<[`ArtistExtended`](index.ArtistExtended.md)\>, [`ArtistExtended`](index.ArtistExtended.md)[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ARTIST`](../enums/enums.Category.md#artist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`ArtistExtended`](index.ArtistExtended.md), `ContinuableResultBlueprint`<[`ArtistExtended`](index.ArtistExtended.md)\>, [`ArtistExtended`](index.ArtistExtended.md)[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:259](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L259)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Album`](index.Album.md), `ContinuableResultBlueprint`<[`Album`](index.Album.md)\>, [`Album`](index.Album.md)[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ALBUM`](../enums/enums.Category.md#album) \| [`EP`](../enums/enums.Category.md#ep) \| [`SINGLE`](../enums/enums.Category.md#single) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Album`](index.Album.md), `ContinuableResultBlueprint`<[`Album`](index.Album.md)\>, [`Album`](index.Album.md)[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:260](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L260)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md), `ContinuableResultBlueprint`<[`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md)\>, ([`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md))[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Category`](../enums/enums.Category.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `searchType?` | `T` |

#### Returns

`Promise`<[`ContinuableResult`](index.ContinuableResult.md)<[`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md), `ContinuableResultBlueprint`<[`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md)\>, ([`Video`](index.Video.md) \| [`Song`](index.Song.md) \| [`Playlist`](index.Playlist.md) \| [`Album`](index.Album.md) \| [`Artist`](index.Artist.md))[]\>\>

#### Defined in

[src/YoutubeMoosick.ts:261](https://github.com/EvasiveXkiller/youtube-moosick/blob/f150e01/src/YoutubeMoosick.ts#L261)
