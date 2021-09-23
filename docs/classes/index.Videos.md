[youtube-moosick](../README.md) / [index](../modules/index.md) / Videos

# Class: Videos

[index](../modules/index.md).Videos

## Hierarchy

- `Item`

  ↳ **`Videos`**

## Table of contents

### Properties

- [URL](index.Videos.md#url)
- [author](index.Videos.md#author)
- [playlistId](index.Videos.md#playlistid)
- [thumbnails](index.Videos.md#thumbnails)
- [title](index.Videos.md#title)
- [videoId](index.Videos.md#videoid)
- [views](index.Videos.md#views)

### Methods

- [from](index.Videos.md#from)

## Properties

### URL

• **URL**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:42](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L42)

___

### author

• **author**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:45](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L45)

___

### playlistId

• **playlistId**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:43](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L43)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:46](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L46)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:40](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L40)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:41](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L41)

___

### views

• **views**: `number`

#### Defined in

[src/resources/resultTypes/artistURL.ts:44](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L44)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/blocks/item.ts#L25)
