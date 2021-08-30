[youtube-moosick](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MooSick

# Class: MooSick

[index](../modules/index.md).MooSick

Main class to interact with methods

## Hierarchy

- `AsyncConstructor`

  ↳ **`MooSick`**

## Table of contents

### Constructors

- [constructor](index.MooSick.md#constructor)

### Properties

- [client](index.MooSick.md#client)
- [config](index.MooSick.md#config)
- [cookies](index.MooSick.md#cookies)

### Methods

- [#createApiRequest](index.MooSick.md##createapirequest)
- [getAlbum](index.MooSick.md#getalbum)
- [getArtist](index.MooSick.md#getartist)
- [getPlaylist](index.MooSick.md#getplaylist)
- [getSearchSuggestions](index.MooSick.md#getsearchsuggestions)
- [new](index.MooSick.md#new)
- [parseAndSetCookie](index.MooSick.md#parseandsetcookie)
- [search](index.MooSick.md#search)
- [brace](index.MooSick.md#brace)
- [new](index.MooSick.md#new)

## Constructors

### constructor

• `Protected` **new MooSick**()

#### Inherited from

AsyncConstructor.constructor

#### Defined in

[blocks/asyncConstructor.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/asyncConstructor.ts#L6)

## Properties

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[index.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L28)

___

### config

• `Private` **config**: `YtCfgMain`

#### Defined in

[index.ts:30](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L30)

___

### cookies

• `Private` **cookies**: `CookieJar`

#### Defined in

[index.ts:29](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L29)

## Methods

### #createApiRequest

▸ `Private` **#createApiRequest**(`endpointName`, `inputVariables?`, `inputQuery?`): `Promise`<`Result`\>

Creates a new api request to the specified endpoint.

**`remarks`** Soonner or later destructure functions into individual files

	TODO: probably define each api req's input vars & input queries,
 then make this func generic so it's type safe

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointName` | [`EndPoint`](../enums/enums.EndPoint.md) | The endpoint name? |
| `inputVariables` | `Object` | Any variable? |
| `inputQuery` | `Object` | Any queries? |

#### Returns

`Promise`<`Result`\>

The result of the endpoint reply

#### Defined in

[index.ts:143](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L143)

___

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

[index.ts:263](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L263)

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

[index.ts:343](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L343)

___

### getPlaylist

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`PlaylistURL`](resources_resultTypes.PlaylistURL.md)\>

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

`Promise`<[`PlaylistURL`](resources_resultTypes.PlaylistURL.md)\>

An object formatted by the parser

Example:
```typescript
const api = await MooSick.new();
const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
```

#### Defined in

[index.ts:295](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L295)

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

[index.ts:193](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L193)

___

### new

▸ `Private` **new**(): `Promise`<[`MooSick`](index.MooSick.md)\>

Creates a new instance of the searcher.

**`remarks`** Required to construct along with the class.

**`internal`**

**`beta`**

#### Returns

`Promise`<[`MooSick`](index.MooSick.md)\>

Adds with the original constructor

#### Defined in

[index.ts:39](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L39)

___

### parseAndSetCookie

▸ `Private` **parseAndSetCookie**(`cookieString`, `baseURL`): `void`

Sets the cookie that is called from the new method

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieString` | `string` | Cookie string |
| `baseURL` | `string` | The base URL of that the cookie should be applied |

#### Returns

`void`

#### Defined in

[index.ts:118](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L118)

___

### search

▸ **search**(`query`, `categoryName?`, `_pageLimit?`): `Promise`<`unknown`\>

Searches for songs using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | String query text to search |
| `categoryName?` | [`Category`](../enums/enums.Category.md) | `undefined` | Type of category to search |
| `_pageLimit` | `number` | `1` | Max pages to obtain |

#### Returns

`Promise`<`unknown`\>

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

[index.ts:237](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L237)

___

### brace

▸ `Static` `Protected` **brace**(): `void`

#### Returns

`void`

#### Inherited from

AsyncConstructor.brace

#### Defined in

[blocks/asyncConstructor.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/asyncConstructor.ts#L20)

___

### new

▸ `Static` **new**<`T`\>(): `Promise`<`T`\>

I have no idea what this method is supposed to do

**`internal`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`MooSick`](index.MooSick.md) |

#### Returns

`Promise`<`T`\>

something?

#### Overrides

AsyncConstructor.new

#### Defined in

[index.ts:106](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/index.ts#L106)
