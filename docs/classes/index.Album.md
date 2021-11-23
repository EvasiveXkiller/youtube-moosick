[youtube-moosick](../README.md) / [index](../modules/index.md) / Album

# Class: Album

[index](../modules/index.md).Album

## Hierarchy

- `Item`

  ↳ **`Album`**

  ↳↳ [`AlbumExtended`](index.AlbumExtended.md)

## Table of contents

### Properties

- [browseId](index.Album.md#browseid)
- [name](index.Album.md#name)
- [url](index.Album.md#url)

### Methods

- [from](index.Album.md#from)

## Properties

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/generalTypes/album.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/1fd45d4/src/resources/generalTypes/album.ts#L7)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/album.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/1fd45d4/src/resources/generalTypes/album.ts#L6)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/album.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/1fd45d4/src/resources/generalTypes/album.ts#L8)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/1fd45d4/src/blocks/item.ts#L25)
