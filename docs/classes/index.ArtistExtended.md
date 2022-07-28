[youtube-moosick](../README.md) / [index](../modules/index.md) / ArtistExtended

# Class: ArtistExtended

[index](../modules/index.md).ArtistExtended

## Hierarchy

- [`Artist`](index.Artist.md)

  ↳ **`ArtistExtended`**

## Table of contents

### Properties

- [browseId](index.ArtistExtended.md#browseid)
- [name](index.ArtistExtended.md#name)
- [subs](index.ArtistExtended.md#subs)
- [thumbnails](index.ArtistExtended.md#thumbnails)
- [url](index.ArtistExtended.md#url)

### Methods

- [from](index.ArtistExtended.md#from)

## Properties

### browseId

• **browseId**: `string`

#### Inherited from

[Artist](index.Artist.md).[browseId](index.Artist.md#browseid)

#### Defined in

[src/resources/generalTypes/artist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/artist.ts#L6)

___

### name

• **name**: `string`

#### Inherited from

[Artist](index.Artist.md).[name](index.Artist.md#name)

#### Defined in

[src/resources/generalTypes/artist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/artist.ts#L5)

___

### subs

• `Optional` **subs**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/artist.ts#L12)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/artist.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/artist.ts#L11)

___

### url

• **url**: `string`

#### Inherited from

[Artist](index.Artist.md).[url](index.Artist.md#url)

#### Defined in

[src/resources/generalTypes/artist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/artist.ts#L7)

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

[Artist](index.Artist.md).[from](index.Artist.md#from)

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/blocks/item.ts#L25)
