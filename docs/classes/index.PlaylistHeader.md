[youtube-moosick](../README.md) / [index](../modules/index.md) / PlaylistHeader

# Class: PlaylistHeader

[index](../modules/index.md).PlaylistHeader

## Hierarchy

- `Item`

  ↳ **`PlaylistHeader`**

## Table of contents

### Properties

- [approxRunTime](index.PlaylistHeader.md#approxruntime)
- [createdYear](index.PlaylistHeader.md#createdyear)
- [owner](index.PlaylistHeader.md#owner)
- [playlistName](index.PlaylistHeader.md#playlistname)
- [songCount](index.PlaylistHeader.md#songcount)
- [thumbnail](index.PlaylistHeader.md#thumbnail)

### Methods

- [from](index.PlaylistHeader.md#from)

## Properties

### approxRunTime

• **approxRunTime**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:30](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L30)

___

### createdYear

• **createdYear**: `number`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L27)

___

### owner

• **owner**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L26)

___

### playlistName

• **playlistName**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L25)

___

### songCount

• **songCount**: `number`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:29](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L29)

___

### thumbnail

• **thumbnail**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/resources/resultTypes/playlistURL.ts#L28)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/b2fb5c5/src/blocks/item.ts#L25)
