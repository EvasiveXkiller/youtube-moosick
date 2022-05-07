[youtube-moosick](../README.md) / [index](../modules/index.md) / PlaylistContent

# Class: PlaylistContent

[index](../modules/index.md).PlaylistContent

## Hierarchy

- `Item`

  ↳ **`PlaylistContent`**

## Table of contents

### Properties

- [artist](index.PlaylistContent.md#artist)
- [duration](index.PlaylistContent.md#duration)
- [thumbnail](index.PlaylistContent.md#thumbnail)
- [trackId](index.PlaylistContent.md#trackid)
- [trackTitle](index.PlaylistContent.md#tracktitle)

### Methods

- [from](index.PlaylistContent.md#from)

## Properties

### artist

• **artist**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/resources/resultTypes/playlistURL.ts#L19)

___

### duration

• **duration**: `number`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:21](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/resources/resultTypes/playlistURL.ts#L21)

___

### thumbnail

• **thumbnail**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/resources/resultTypes/playlistURL.ts#L20)

___

### trackId

• `Optional` **trackId**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/resources/resultTypes/playlistURL.ts#L18)

___

### trackTitle

• **trackTitle**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/resources/resultTypes/playlistURL.ts#L17)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/78493f9/src/blocks/item.ts#L25)
