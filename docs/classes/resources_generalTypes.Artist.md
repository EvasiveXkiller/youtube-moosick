[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Artist

# Class: Artist

[resources/generalTypes](../modules/resources_generalTypes.md).Artist

## Hierarchy

- `Item`

  ↳ **`Artist`**

  ↳↳ [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)

## Table of contents

### Constructors

- [constructor](resources_generalTypes.Artist.md#constructor)

### Properties

- [browseId](resources_generalTypes.Artist.md#browseid)
- [name](resources_generalTypes.Artist.md#name)
- [url](resources_generalTypes.Artist.md#url)

### Methods

- [from](resources_generalTypes.Artist.md#from)

## Constructors

### constructor

• **new Artist**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L20)

## Properties

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/artist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/generalTypes/artist.ts#L5)

___

### url

• **url**: `string`

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

Item.from

#### Defined in

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L22)
