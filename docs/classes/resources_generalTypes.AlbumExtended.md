[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / AlbumExtended

# Class: AlbumExtended

[resources/generalTypes](../modules/resources_generalTypes.md).AlbumExtended

## Hierarchy

- [`Album`](resources_generalTypes.Album.md)

  ↳ **`AlbumExtended`**

## Table of contents

### Properties

- [artist](resources_generalTypes.AlbumExtended.md#artist)
- [browseId](resources_generalTypes.AlbumExtended.md#browseid)
- [name](resources_generalTypes.AlbumExtended.md#name)
- [thumbnails](resources_generalTypes.AlbumExtended.md#thumbnails)
- [url](resources_generalTypes.AlbumExtended.md#url)
- [year](resources_generalTypes.AlbumExtended.md#year)

### Methods

- [from](resources_generalTypes.AlbumExtended.md#from)

## Properties

### artist

• `Optional` **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/generalTypes/album.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L14)

___

### browseId

• **browseId**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[browseId](resources_generalTypes.Album.md#browseid)

#### Defined in

[src/resources/generalTypes/album.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L7)

___

### name

• **name**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[name](resources_generalTypes.Album.md#name)

#### Defined in

[src/resources/generalTypes/album.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L6)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/album.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L12)

___

### url

• **url**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[url](resources_generalTypes.Album.md#url)

#### Defined in

[src/resources/generalTypes/album.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L8)

___

### year

• `Optional` **year**: `number`

#### Defined in

[src/resources/generalTypes/album.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/resources/generalTypes/album.ts#L13)

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
| `options` | `ItemOptions`<`fn`\> |

#### Returns

`T`

#### Inherited from

[Album](resources_generalTypes.Album.md).[from](resources_generalTypes.Album.md#from)

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/3cced14/src/blocks/item.ts#L25)
