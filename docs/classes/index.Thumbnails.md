[youtube-moosick](../README.md) / [index](../modules/index.md) / Thumbnails

# Class: Thumbnails

[index](../modules/index.md).Thumbnails

## Hierarchy

- `Item`

  ↳ **`Thumbnails`**

## Implements

- `ThumbnailElement`

## Table of contents

### Properties

- [height](index.Thumbnails.md#height)
- [url](index.Thumbnails.md#url)
- [width](index.Thumbnails.md#width)

### Methods

- [from](index.Thumbnails.md#from)

## Properties

### height

• **height**: `number`

#### Implementation of

ThumbnailElement.height

#### Defined in

[src/resources/generalTypes/thumbnails.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/generalTypes/thumbnails.ts#L7)

___

### url

• **url**: `string`

#### Implementation of

ThumbnailElement.url

#### Defined in

[src/resources/generalTypes/thumbnails.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/generalTypes/thumbnails.ts#L5)

___

### width

• **width**: `number`

#### Implementation of

ThumbnailElement.width

#### Defined in

[src/resources/generalTypes/thumbnails.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/generalTypes/thumbnails.ts#L6)

## Methods

### from

▸ `Static` **from**<`T`\>(`this`, `options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `options` | `ItemOptions`<() => `T`\> |

#### Returns

`T`

#### Inherited from

Item.from

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/blocks/item.ts#L25)
