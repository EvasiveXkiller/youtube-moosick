[youtube-moosick](../README.md) / [index](../modules/index.md) / MooSick

# Class: MooSick

[index](../modules/index.md).MooSick

Main class to interact with methods

## Hierarchy

- `AsyncConstructor`

  ↳ **`MooSick`**

## Table of contents

### Methods

- [getAlbum](index.MooSick.md#getalbum)
- [getArtist](index.MooSick.md#getartist)
- [getPlaylist](index.MooSick.md#getplaylist)
- [getSearchSuggestions](index.MooSick.md#getsearchsuggestions)
- [search](index.MooSick.md#search)

## Methods

### getAlbum

▸ **getAlbum**(`browseId`): `Promise`<[`AlbumURL`](resources_resultTypes.AlbumURL.md)\>

Gets the album details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The album Id only, without `https://....` |

#### Returns

`Promise`<[`AlbumURL`](resources_resultTypes.AlbumURL.md)\>

AlbumURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
```

#### Defined in

[src/index.ts:304](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L304)

___

### getArtist

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](resources_resultTypes.ArtistURL.md)\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist `browseId` only, without `https://....` |

#### Returns

`Promise`<[`ArtistURL`](resources_resultTypes.ArtistURL.md)\>

ArtistURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

console.log(results);
```

#### Defined in

[src/index.ts:381](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L381)

___

### getPlaylist

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)\>

Gets the playlist using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist `browseId` only, without `https://....` |
| `contentLimit` | `number` | `100` | Maximum amount of contents to get, defaults to 100 |

#### Returns

`Promise`<[`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)\>

PlaylistURL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
```

#### Defined in

[src/index.ts:331](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L331)

___

### getSearchSuggestions

▸ **getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](resources_resultTypes.SearchSuggestions.md)[]\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](resources_resultTypes.SearchSuggestions.md)[]\>

An object formatted by parsers.js

Example
```typescript
const suggestions = api.getSearchSuggestions("All We know");
console.log(suggestions);
```

#### Defined in

[src/index.ts:209](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L209)

___

### search

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableUnsorted`](resources_generalTypes.ContinuableUnsorted.md)\>

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

`Promise`<[`ContinuableUnsorted`](resources_generalTypes.ContinuableUnsorted.md)\>

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

[src/index.ts:252](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L252)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md), `ContinuableResultBlueprint`<[`Video`](resources_generalTypes.Video.md)\>, [`Video`](resources_generalTypes.Video.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md), `ContinuableResultBlueprint`<[`Video`](resources_generalTypes.Video.md)\>, [`Video`](resources_generalTypes.Video.md)[]\>\>

#### Defined in

[src/index.ts:253](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L253)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Song`](resources_generalTypes.Song.md), `ContinuableResultBlueprint`<[`Song`](resources_generalTypes.Song.md)\>, [`Song`](resources_generalTypes.Song.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Song`](resources_generalTypes.Song.md), `ContinuableResultBlueprint`<[`Song`](resources_generalTypes.Song.md)\>, [`Song`](resources_generalTypes.Song.md)[]\>\>

#### Defined in

[src/index.ts:254](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L254)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Playlist`](resources_generalTypes.Playlist.md), `ContinuableResultBlueprint`<[`Playlist`](resources_generalTypes.Playlist.md)\>, [`Playlist`](resources_generalTypes.Playlist.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Playlist`](resources_generalTypes.Playlist.md), `ContinuableResultBlueprint`<[`Playlist`](resources_generalTypes.Playlist.md)\>, [`Playlist`](resources_generalTypes.Playlist.md)[]\>\>

#### Defined in

[src/index.ts:255](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L255)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), `ContinuableResultBlueprint`<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md)\>, [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), `ContinuableResultBlueprint`<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md)\>, [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)[]\>\>

#### Defined in

[src/index.ts:256](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L256)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Album`](resources_generalTypes.Album.md), `ContinuableResultBlueprint`<[`Album`](resources_generalTypes.Album.md)\>, [`Album`](resources_generalTypes.Album.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Album`](resources_generalTypes.Album.md), `ContinuableResultBlueprint`<[`Album`](resources_generalTypes.Album.md)\>, [`Album`](resources_generalTypes.Album.md)[]\>\>

#### Defined in

[src/index.ts:257](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L257)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md), `ContinuableResultBlueprint`<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md)\>, ([`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md))[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md), `ContinuableResultBlueprint`<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md)\>, ([`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md))[]\>\>

#### Defined in

[src/index.ts:258](https://github.com/EvasiveXkiller/youtube-moosick/blob/966afc3/src/index.ts#L258)
