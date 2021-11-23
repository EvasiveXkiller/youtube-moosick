[youtube-moosick](../README.md) / [index](../modules/index.md) / ArtistHeader

# Class: ArtistHeader

[index](../modules/index.md).ArtistHeader

## Hierarchy

- `Item`

  ↳ **`ArtistHeader`**

## Table of contents

### Properties

- [artistName](index.ArtistHeader.md#artistname)
- [description](index.ArtistHeader.md#description)
- [thumbnails](index.ArtistHeader.md#thumbnails)
- [totalSubscribers](index.ArtistHeader.md#totalsubscribers)

### Methods

- [from](index.ArtistHeader.md#from)

## Properties

### artistName

• **artistName**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L17)

___

### description

• **description**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L19)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L20)

___

### totalSubscribers

• **totalSubscribers**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L18)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/blocks/item.ts#L25)
