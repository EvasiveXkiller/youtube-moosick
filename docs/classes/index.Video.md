[youtube-moosick](../README.md) / [index](../modules/index.md) / Video

# Class: Video

[index](../modules/index.md).Video

## Hierarchy

- `Item`

  ↳ **`Video`**

## Table of contents

### Properties

- [author](index.Video.md#author)
- [length](index.Video.md#length)
- [name](index.Video.md#name)
- [thumbnails](index.Video.md#thumbnails)
- [url](index.Video.md#url)
- [videoId](index.Video.md#videoid)
- [views](index.Video.md#views)

### Methods

- [from](index.Video.md#from)

## Properties

### author

• **author**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/generalTypes/video.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L9)

___

### length

• **length**: `number`

#### Defined in

[src/resources/generalTypes/video.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L6)

___

### thumbnails

• `Optional` **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/video.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L12)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L8)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L7)

___

### views

• **views**: `number`

#### Defined in

[src/resources/generalTypes/video.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/resources/generalTypes/video.ts#L11)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/b3e1e1b/src/blocks/item.ts#L25)
