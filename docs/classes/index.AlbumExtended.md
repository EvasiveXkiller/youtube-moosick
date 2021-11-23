[youtube-moosick](../README.md) / [index](../modules/index.md) / AlbumExtended

# Class: AlbumExtended

[index](../modules/index.md).AlbumExtended

## Hierarchy

- [`Album`](index.Album.md)

  ↳ **`AlbumExtended`**

## Table of contents

### Properties

- [artist](index.AlbumExtended.md#artist)
- [browseId](index.AlbumExtended.md#browseid)
- [name](index.AlbumExtended.md#name)
- [thumbnails](index.AlbumExtended.md#thumbnails)
- [url](index.AlbumExtended.md#url)
- [year](index.AlbumExtended.md#year)

### Methods

- [from](index.AlbumExtended.md#from)

## Properties

### artist

• `Optional` **artist**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/generalTypes/album.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L14)

___

### browseId

• **browseId**: `string`

#### Inherited from

[Album](index.Album.md).[browseId](index.Album.md#browseid)

#### Defined in

[src/resources/generalTypes/album.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L7)

___

### name

• **name**: `string`

#### Inherited from

[Album](index.Album.md).[name](index.Album.md#name)

#### Defined in

[src/resources/generalTypes/album.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L6)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/album.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L12)

___

### url

• **url**: `string`

#### Inherited from

[Album](index.Album.md).[url](index.Album.md#url)

#### Defined in

[src/resources/generalTypes/album.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L8)

___

### year

• `Optional` **year**: `number`

#### Defined in

[src/resources/generalTypes/album.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/album.ts#L13)

## Methods

### from

▸ `Static` **from**<`T`\>(`options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ItemOptions`<() => `T`\> |

#### Returns

`T`

#### Inherited from

[Album](index.Album.md).[from](index.Album.md#from)

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/blocks/item.ts#L25)
