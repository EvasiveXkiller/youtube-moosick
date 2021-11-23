[youtube-moosick](../README.md) / [index](../modules/index.md) / AlbumURLHeader

# Class: AlbumURLHeader

[index](../modules/index.md).AlbumURLHeader

## Hierarchy

- `Item`

  ↳ **`AlbumURLHeader`**

## Table of contents

### Properties

- [artist](index.AlbumURLHeader.md#artist)
- [date](index.AlbumURLHeader.md#date)
- [description](index.AlbumURLHeader.md#description)
- [thumbnails](index.AlbumURLHeader.md#thumbnails)
- [title](index.AlbumURLHeader.md#title)
- [totalRuntime](index.AlbumURLHeader.md#totalruntime)
- [trackCount](index.AlbumURLHeader.md#trackcount)

### Methods

- [from](index.AlbumURLHeader.md#from)

## Properties

### artist

• **artist**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L16)

___

### date

• **date**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L14)

___

### description

• **description**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L11)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L13)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L10)

___

### totalRuntime

• **totalRuntime**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L15)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L12)

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

Item.from

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/blocks/item.ts#L25)
