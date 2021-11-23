[youtube-moosick](../README.md) / [index](../modules/index.md) / Track

# Class: Track

[index](../modules/index.md).Track

## Hierarchy

- `Item`

  ↳ **`Track`**

## Table of contents

### Properties

- [lengthMs](index.Track.md#lengthms)
- [playlistId](index.Track.md#playlistid)
- [title](index.Track.md#title)
- [url](index.Track.md#url)
- [videoId](index.Track.md#videoid)

### Methods

- [from](index.Track.md#from)

## Properties

### lengthMs

• **lengthMs**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L24)

___

### playlistId

• **playlistId**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:23](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L23)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L20)

___

### url

• **url**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L22)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:21](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/resultTypes/albumURL.ts#L21)

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
