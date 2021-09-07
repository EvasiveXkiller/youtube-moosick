[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Playlist

# Class: Playlist

[resources/generalTypes](../modules/resources_generalTypes.md).Playlist

## Hierarchy

- `Item`

  ↳ **`Playlist`**

## Table of contents

### Properties

- [author](resources_generalTypes.Playlist.md#author)
- [browseId](resources_generalTypes.Playlist.md#browseid)
- [name](resources_generalTypes.Playlist.md#name)
- [trackCount](resources_generalTypes.Playlist.md#trackcount)

### Methods

- [from](resources_generalTypes.Playlist.md#from)

## Properties

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/generalTypes/playlist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/generalTypes/playlist.ts#L7)

___

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/generalTypes/playlist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/generalTypes/playlist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/playlist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/generalTypes/playlist.ts#L5)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[src/resources/generalTypes/playlist.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/generalTypes/playlist.ts#L8)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/blocks/item.ts#L25)
