[youtube-moosick](../README.md) / [Modules](../modules.md) / [parsers](../modules/parsers.md) / ParsersExtended

# Class: ParsersExtended

[parsers](../modules/parsers.md).ParsersExtended

## Table of contents

### Constructors

- [constructor](parsers.ParsersExtended.md#constructor)

### Methods

- [albumParser](parsers.ParsersExtended.md#albumparser)
- [artistParser](parsers.ParsersExtended.md#artistparser)
- [flexSecondRowComplexParser](parsers.ParsersExtended.md#flexsecondrowcomplexparser)
- [thumbnailParser](parsers.ParsersExtended.md#thumbnailparser)

## Constructors

### constructor

• **new ParsersExtended**()

## Methods

### albumParser

▸ `Static` **albumParser**(`albumRaw`): [`Album`](resources_generalTypes.Album.md)[]

Parses the album from the Album Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `albumRaw` | `Run`[] |

#### Returns

[`Album`](resources_generalTypes.Album.md)[]

#### Defined in

[src/parsers/parsersExtended.ts:93](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L93)

___

### artistParser

▸ `Static` **artistParser**(`artistRaw`): [`Artist`](resources_generalTypes.Artist.md)[]

Parses the artist from the Artist array

#### Parameters

| Name | Type |
| :------ | :------ |
| `artistRaw` | `Run`[] |

#### Returns

[`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/parsers/parsersExtended.ts:78](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L78)

___

### flexSecondRowComplexParser

▸ `Static` **flexSecondRowComplexParser**(`runsArray`, `categoryType`, `trim`): `Pick`<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), ``"subs"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `runsArray` | `Run`[] |
| `categoryType` | [`ARTIST`](../enums/enums.Category.md#artist) |
| `trim` | `boolean` |

#### Returns

`Pick`<[`ArtistExtended`](resources_generalTypes.ArtistExtended.md), ``"subs"``\>

#### Defined in

[src/parsers/parsersExtended.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L14)

▸ `Static` **flexSecondRowComplexParser**(`runsArray`, `categoryType`, `trim`): `Pick`<[`Video`](resources_generalTypes.Video.md), ``"author"`` \| ``"views"`` \| ``"length"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `runsArray` | `Run`[] |
| `categoryType` | [`VIDEO`](../enums/enums.Category.md#video) |
| `trim` | `boolean` |

#### Returns

`Pick`<[`Video`](resources_generalTypes.Video.md), ``"author"`` \| ``"views"`` \| ``"length"``\>

#### Defined in

[src/parsers/parsersExtended.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L15)

▸ `Static` **flexSecondRowComplexParser**(`runsArray`, `categoryType`, `trim`): `Pick`<[`Song`](resources_generalTypes.Song.md), ``"artist"`` \| ``"album"`` \| ``"duration"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `runsArray` | `Run`[] |
| `categoryType` | [`SONG`](../enums/enums.Category.md#song) |
| `trim` | `boolean` |

#### Returns

`Pick`<[`Song`](resources_generalTypes.Song.md), ``"artist"`` \| ``"album"`` \| ``"duration"``\>

#### Defined in

[src/parsers/parsersExtended.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L16)

▸ `Static` **flexSecondRowComplexParser**(`runsArray`, `categoryType`, `trim`): `Pick`<[`AlbumExtended`](resources_generalTypes.AlbumExtended.md), ``"year"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `runsArray` | `Run`[] |
| `categoryType` | [`ALBUM`](../enums/enums.Category.md#album) \| [`EP`](../enums/enums.Category.md#ep) \| [`SINGLE`](../enums/enums.Category.md#single) |
| `trim` | `boolean` |

#### Returns

`Pick`<[`AlbumExtended`](resources_generalTypes.AlbumExtended.md), ``"year"``\>

#### Defined in

[src/parsers/parsersExtended.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L17)

▸ `Static` **flexSecondRowComplexParser**(`runsArray`, `categoryType`, `trim`): `Pick`<[`Playlist`](resources_generalTypes.Playlist.md), ``"author"`` \| ``"trackCount"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `runsArray` | `Run`[] |
| `categoryType` | [`PLAYLIST`](../enums/enums.Category.md#playlist) |
| `trim` | `boolean` |

#### Returns

`Pick`<[`Playlist`](resources_generalTypes.Playlist.md), ``"author"`` \| ``"trackCount"``\>

#### Defined in

[src/parsers/parsersExtended.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L18)

___

### thumbnailParser

▸ `Static` **thumbnailParser**(`sectionContext`): [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

Gets the thumbnail from the sectionList

#### Parameters

| Name | Type |
| :------ | :------ |
| `sectionContext` | `any` |

#### Returns

[`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/parsers/parsersExtended.ts:70](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/parsersExtended.ts#L70)
