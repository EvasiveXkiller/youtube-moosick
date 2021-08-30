[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / AlbumExtended

# Class: AlbumExtended

[resources/generalTypes](../modules/resources_generalTypes.md).AlbumExtended

## Hierarchy

- [`Album`](resources_generalTypes.Album.md)

  ↳ **`AlbumExtended`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.AlbumExtended.md#constructor)

### Properties

- [artist](resources_generalTypes.AlbumExtended.md#artist)
- [browseId](resources_generalTypes.AlbumExtended.md#browseid)
- [name](resources_generalTypes.AlbumExtended.md#name)
- [thumbnails](resources_generalTypes.AlbumExtended.md#thumbnails)
- [url](resources_generalTypes.AlbumExtended.md#url)
- [year](resources_generalTypes.AlbumExtended.md#year)

### Methods

- [from](resources_generalTypes.AlbumExtended.md#from)

## Constructors

### constructor

• **new AlbumExtended**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

[Album](resources_generalTypes.Album.md).[constructor](resources_generalTypes.Album.md#constructor)

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### artist

• `Optional` **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[resources/generalTypes/album.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L14)

___

### browseId

• **browseId**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[browseId](resources_generalTypes.Album.md#browseid)

#### Defined in

[resources/generalTypes/album.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L7)

___

### name

• **name**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[name](resources_generalTypes.Album.md#name)

#### Defined in

[resources/generalTypes/album.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L6)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[resources/generalTypes/album.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L12)

___

### url

• **url**: `string`

#### Inherited from

[Album](resources_generalTypes.Album.md).[url](resources_generalTypes.Album.md#url)

#### Defined in

[resources/generalTypes/album.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L8)

___

### year

• `Optional` **year**: `number`

#### Defined in

[resources/generalTypes/album.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/album.ts#L13)

## Methods

### from

▸ `Static` **from**<`T`\>(`options`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ItemOptions`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[Album](resources_generalTypes.Album.md).[from](resources_generalTypes.Album.md#from)

#### Defined in

[blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L22)