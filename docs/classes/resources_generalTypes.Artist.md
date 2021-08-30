[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Artist

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

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### browseId

• **browseId**: `string`

#### Defined in

[resources/generalTypes/artist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/artist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[resources/generalTypes/artist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/artist.ts#L5)

___

### url

• **url**: `string`

#### Defined in

[resources/generalTypes/artist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/generalTypes/artist.ts#L7)

## Methods

### from

▸ `Static` **from**<`T`\>(`options`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ItemOptions`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Item.from

#### Defined in

[blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L22)
