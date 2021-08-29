[youtube-moosick](../README.md) / [Exports](../modules.md) / MooSick

# Class: MooSick

Main class to interact with methods

## Hierarchy

- `AsyncConstructor`

  ↳ **`MooSick`**

## Table of contents

### Constructors

- [constructor](MooSick.md#constructor)

### Properties

- [client](MooSick.md#client)
- [config](MooSick.md#config)
- [cookies](MooSick.md#cookies)

### Methods

- [#createApiRequest](MooSick.md##createapirequest)
- [getAlbum](MooSick.md#getalbum)
- [getArtist](MooSick.md#getartist)
- [getPlaylist](MooSick.md#getplaylist)
- [getSearchSuggestions](MooSick.md#getsearchsuggestions)
- [new](MooSick.md#new)
- [parseAndSetCookie](MooSick.md#parseandsetcookie)
- [search](MooSick.md#search)
- [brace](MooSick.md#brace)
- [new](MooSick.md#new)

## Constructors

### constructor

• `Protected` **new MooSick**()

#### Inherited from

AsyncConstructor.constructor

#### Defined in

[blocks/asyncConstructor.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/blocks/asyncConstructor.ts#L6)

## Properties

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[index.ts:34](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L34)

___

### config

• `Private` **config**: `YtCfgMain`

#### Defined in

[index.ts:36](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L36)

___

### cookies

• `Private` **cookies**: `CookieJar`

#### Defined in

[index.ts:35](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L35)

## Methods

### #createApiRequest

▸ `Private` **#createApiRequest**(`endpointName`, `inputVariables?`, `inputQuery?`): `Promise`<`Result`\>

Creates a new api request to the specified endpoint.

**`remarks`**
	Soonner or later destructure functions into individual files

	TODO: probably define each api req's input vars & input queries,
 then make this func generic so it's type safe

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointName` | `EndPoint` | The endpoint name? |
| `inputVariables` | `Object` | Any variable? |
| `inputQuery` | `Object` | Any queries? |

#### Returns

`Promise`<`Result`\>

The result of the endpoint reply

#### Defined in

[index.ts:152](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L152)

___

### getAlbum

▸ **getAlbum**(`browseId`): `Promise`<`AlbumURL`\>

Gets the album details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The ID of the album, without `https` infront |

#### Returns

`Promise`<`AlbumURL`\>

Album URL object

#### Defined in

[index.ts:245](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L245)

___

### getArtist

▸ **getArtist**(`browseId`): `Promise`<`ArtistURL`\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist ID, sanitized |

#### Returns

`Promise`<`ArtistURL`\>

An object formatted by the artist page

#### Defined in

[index.ts:309](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L309)

___

### getPlaylist

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<`PlaylistURL`\>

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

`Promise`<`PlaylistURL`\>

An object formatted by the parser

#### Defined in

[index.ts:269](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L269)

___

### getSearchSuggestions

▸ **getSearchSuggestions**(`query`): `Promise`<`SearchSuggestions`[]\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | query String query text to search |

#### Returns

`Promise`<`SearchSuggestions`[]\>

An object formatted with utils class

#### Defined in

[index.ts:196](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L196)

___

### new

▸ `Private` **new**(): `Promise`<[`MooSick`](MooSick.md)\>

Creates a new instance of the searcher.

**`remarks`**
Required to construct along with the class.

**`beta`**

#### Returns

`Promise`<[`MooSick`](MooSick.md)\>

Adds with the original constructor

#### Defined in

[index.ts:47](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L47)

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

[index.ts:126](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L126)

___

### search

▸ **search**(`query`, `categoryName?`, `_pageLimit?`): `Promise`<`unknown`\>

Searches for songs using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | String query text to search |
| `categoryName?` | `Category` | `undefined` | Type of category to search |
| `_pageLimit` | `number` | `1` | Max pages to obtain |

#### Returns

`Promise`<`unknown`\>

An object formatted by parsers.js

#### Defined in

[index.ts:227](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L227)

___

### brace

▸ `Static` `Protected` **brace**(): `void`

#### Returns

`void`

#### Inherited from

AsyncConstructor.brace

#### Defined in

[blocks/asyncConstructor.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/blocks/asyncConstructor.ts#L20)

___

### new

▸ `Static` **new**<`T`\>(): `Promise`<`T`\>

I have no idea what this method is supposed to do

**`internal`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`MooSick`](MooSick.md) |

#### Returns

`Promise`<`T`\>

something?

#### Overrides

AsyncConstructor.new

#### Defined in

[index.ts:114](https://github.com/EvasiveXkiller/youtube-moosick/blob/c8bf682/src/index.ts#L114)
