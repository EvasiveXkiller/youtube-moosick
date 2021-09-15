[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / AlbumURLHeader

# Class: AlbumURLHeader

[resources/resultTypes](../modules/resources_resultTypes.md).AlbumURLHeader

## Hierarchy

- `Item`

  ↳ **`AlbumURLHeader`**

## Table of contents

### Properties

- [artist](resources_resultTypes.AlbumURLHeader.md#artist)
- [date](resources_resultTypes.AlbumURLHeader.md#date)
- [description](resources_resultTypes.AlbumURLHeader.md#description)
- [thumbnails](resources_resultTypes.AlbumURLHeader.md#thumbnails)
- [title](resources_resultTypes.AlbumURLHeader.md#title)
- [totalRuntime](resources_resultTypes.AlbumURLHeader.md#totalruntime)
- [trackCount](resources_resultTypes.AlbumURLHeader.md#trackcount)

### Methods

- [from](resources_resultTypes.AlbumURLHeader.md#from)

## Properties

### artist

• **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L16)

___

### date

• **date**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L14)

___

### description

• **description**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L11)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L13)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L10)

___

### totalRuntime

• **totalRuntime**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L15)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/resources/resultTypes/albumURL.ts#L12)

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

Item.from

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6e6546/src/blocks/item.ts#L25)
