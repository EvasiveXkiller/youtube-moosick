[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ArtistHeader

# Class: ArtistHeader

[resources/resultTypes](../modules/resources_resultTypes.md).ArtistHeader

## Hierarchy

- `Item`

  ↳ **`ArtistHeader`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.ArtistHeader.md#constructor)

### Properties

- [artistName](resources_resultTypes.ArtistHeader.md#artistname)
- [description](resources_resultTypes.ArtistHeader.md#description)
- [thumbnails](resources_resultTypes.ArtistHeader.md#thumbnails)
- [totalSubscribers](resources_resultTypes.ArtistHeader.md#totalsubscribers)

### Methods

- [from](resources_resultTypes.ArtistHeader.md#from)

## Constructors

### constructor

• **new ArtistHeader**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### artistName

• **artistName**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L17)

___

### description

• **description**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L19)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L20)

___

### totalSubscribers

• **totalSubscribers**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L18)

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