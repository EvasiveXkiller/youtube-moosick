[youtube-moosick](../README.md) / [index](../modules/index.md) / Artist

# Class: Artist

[index](../modules/index.md).Artist

## Hierarchy

- `Item`

  ↳ **`Artist`**

  ↳↳ [`ArtistExtended`](index.ArtistExtended.md)

## Table of contents

### Properties

- [browseId](index.Artist.md#browseid)
- [name](index.Artist.md#name)
- [url](index.Artist.md#url)

### Methods

- [from](index.Artist.md#from)

## Properties

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/artist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/artist.ts#L5)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/resources/generalTypes/artist.ts#L7)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/239aede/src/blocks/item.ts#L25)
