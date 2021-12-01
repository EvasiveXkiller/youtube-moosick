[youtube-moosick](../README.md) / [index](../modules/index.md) / Playlist

# Class: Playlist

[index](../modules/index.md).Playlist

## Hierarchy

- `Item`

  ↳ **`Playlist`**

## Table of contents

### Properties

- [author](index.Playlist.md#author)
- [browseId](index.Playlist.md#browseid)
- [name](index.Playlist.md#name)
- [trackCount](index.Playlist.md#trackcount)

### Methods

- [from](index.Playlist.md#from)

## Properties

### author

• **author**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/generalTypes/playlist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/1f57522/src/resources/generalTypes/playlist.ts#L7)

___

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/generalTypes/playlist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/1f57522/src/resources/generalTypes/playlist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/playlist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/1f57522/src/resources/generalTypes/playlist.ts#L5)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[src/resources/generalTypes/playlist.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/1f57522/src/resources/generalTypes/playlist.ts#L8)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/1f57522/src/blocks/item.ts#L25)
