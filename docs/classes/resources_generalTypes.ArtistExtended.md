[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / ArtistExtended

# Class: ArtistExtended

[resources/generalTypes](../modules/resources_generalTypes.md).ArtistExtended

## Hierarchy

- [`Artist`](resources_generalTypes.Artist.md)

  ↳ **`ArtistExtended`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.ArtistExtended.md#constructor)

### Properties

- [browseId](resources_generalTypes.ArtistExtended.md#browseid)
- [name](resources_generalTypes.ArtistExtended.md#name)
- [subs](resources_generalTypes.ArtistExtended.md#subs)
- [thumbnails](resources_generalTypes.ArtistExtended.md#thumbnails)
- [url](resources_generalTypes.ArtistExtended.md#url)

### Methods

- [from](resources_generalTypes.ArtistExtended.md#from)

## Constructors

### constructor

• **new ArtistExtended**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

[Artist](resources_generalTypes.Artist.md).[constructor](resources_generalTypes.Artist.md#constructor)

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L20)

## Properties

### browseId

• **browseId**: `string`

#### Inherited from

[Artist](resources_generalTypes.Artist.md).[browseId](resources_generalTypes.Artist.md#browseid)

#### Defined in

[src/resources/generalTypes/artist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L6)

___

### name

• **name**: `string`

#### Inherited from

[Artist](resources_generalTypes.Artist.md).[name](resources_generalTypes.Artist.md#name)

#### Defined in

[src/resources/generalTypes/artist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L5)

___

### subs

• `Optional` **subs**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L12)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/artist.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L11)

___

### url

• **url**: `string`

#### Inherited from

[Artist](resources_generalTypes.Artist.md).[url](resources_generalTypes.Artist.md#url)

#### Defined in

[src/resources/generalTypes/artist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L7)

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

[Artist](resources_generalTypes.Artist.md).[from](resources_generalTypes.Artist.md#from)

#### Defined in

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L22)
