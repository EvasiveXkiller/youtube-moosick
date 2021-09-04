[youtube-moosick](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MooSick

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
| `browseId` | `string` | The ID of the album, without `https` infront |

#### Returns

`Promise`<[`AlbumURL`](resources_resultTypes.AlbumURL.md)\>

Album URL object

Example:
```typescript
const api = await MooSick.new();
const results = await api.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
```

#### Defined in

[src/index.ts:297](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L297)

___

### getArtist

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](resources_resultTypes.ArtistURL.md)\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist ID, sanitized |

#### Returns

`Promise`<[`ArtistURL`](resources_resultTypes.ArtistURL.md)\>

An object formatted by the artist page

Example:
```typescript
const api = await MooSick.new();
const results = await api.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

console.log(results);
```

#### Defined in

[src/index.ts:377](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L377)

___

### getPlaylist

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)\>

Gets the playlist using the Youtube Music API

**`remarks`**
FIXME: in stale/index.js, they reference `.content` instead. is this a conscious change?
I think i forgotten to change it, but i dont have faith on this system working,
it relies on the old structure which i have modified

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist ID, sanitized |
| `contentLimit` | `number` | `100` | Maximum content to get |

#### Returns

`Promise`<[`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)\>

An object formatted by the parser

Example:
```typescript
const api = await MooSick.new();
const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
```

#### Defined in

[src/index.ts:329](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L329)

___

### getSearchSuggestions

▸ **getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](resources_resultTypes.SearchSuggestions.md)[]\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | query String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](resources_resultTypes.SearchSuggestions.md)[]\>

An object formatted with utils class

Example
```typescript
const suggestions = api.getSearchSuggestions("All We know");
console.log(suggestions);
```

#### Defined in

[src/index.ts:200](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L200)

___

### search

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<`ContinuableUnsorted`\>

Searches for songs using the Youtube Music API

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |
| `searchType?` | `T` | - |

#### Returns

`Promise`<`ContinuableUnsorted`\>

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

[src/index.ts:243](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L243)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Video`](resources_generalTypes.Video.md)\>, [`Video`](resources_generalTypes.Video.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Video`](resources_generalTypes.Video.md)\>, [`Video`](resources_generalTypes.Video.md)[]\>\>

#### Defined in

[src/index.ts:244](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L244)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Song`](resources_generalTypes.Song.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Song`](resources_generalTypes.Song.md)\>, [`Song`](resources_generalTypes.Song.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Song`](resources_generalTypes.Song.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Song`](resources_generalTypes.Song.md)\>, [`Song`](resources_generalTypes.Song.md)[]\>\>

#### Defined in

[src/index.ts:245](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L245)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Playlist`](resources_generalTypes.Playlist.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Playlist`](resources_generalTypes.Playlist.md)\>, [`Playlist`](resources_generalTypes.Playlist.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Playlist`](resources_generalTypes.Playlist.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Playlist`](resources_generalTypes.Playlist.md)\>, [`Playlist`](resources_generalTypes.Playlist.md)[]\>\>

#### Defined in

[src/index.ts:246](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L246)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md)\>, [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md)\>, [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)[]\>\>

#### Defined in

[src/index.ts:247](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L247)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Album`](resources_generalTypes.Album.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Album`](resources_generalTypes.Album.md)\>, [`Album`](resources_generalTypes.Album.md)[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Album`](resources_generalTypes.Album.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Album`](resources_generalTypes.Album.md)\>, [`Album`](resources_generalTypes.Album.md)[]\>\>

#### Defined in

[src/index.ts:248](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L248)

▸ **search**<`T`\>(`query`, `searchType?`): `Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md)\>, ([`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md))[]\>\>

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

`Promise`<[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md), [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<[`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md)\>, ([`Video`](resources_generalTypes.Video.md) \| [`Song`](resources_generalTypes.Song.md) \| [`Playlist`](resources_generalTypes.Playlist.md) \| [`Album`](resources_generalTypes.Album.md) \| [`Artist`](resources_generalTypes.Artist.md))[]\>\>

#### Defined in

[src/index.ts:249](https://github.com/EvasiveXkiller/youtube-moosick/blob/8c1f1d1/src/index.ts#L249)
