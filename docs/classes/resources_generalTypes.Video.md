[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Video

# Class: Video

[resources/generalTypes](../modules/resources_generalTypes.md).Video

## Hierarchy

- `Item`

  ↳ **`Video`**

## Table of contents

### Properties

- [author](resources_generalTypes.Video.md#author)
- [length](resources_generalTypes.Video.md#length)
- [name](resources_generalTypes.Video.md#name)
- [thumbnails](resources_generalTypes.Video.md#thumbnails)
- [url](resources_generalTypes.Video.md#url)
- [videoId](resources_generalTypes.Video.md#videoid)
- [views](resources_generalTypes.Video.md#views)

### Methods

- [from](resources_generalTypes.Video.md#from)

## Properties

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/generalTypes/video.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L9)

___

### length

• **length**: `number`

#### Defined in

[src/resources/generalTypes/video.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L6)

___

### thumbnails

• `Optional` **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/video.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L12)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L8)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/generalTypes/video.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L7)

___

### views

• **views**: `number`

#### Defined in

[src/resources/generalTypes/video.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/resources/generalTypes/video.ts#L11)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/e19b17f/src/blocks/item.ts#L25)
