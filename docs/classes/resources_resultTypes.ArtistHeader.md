[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ArtistHeader

# Class: ArtistHeader

[resources/resultTypes](../modules/resources_resultTypes.md).ArtistHeader

## Hierarchy

- `Item`

  ↳ **`ArtistHeader`**

## Table of contents

### Properties

- [artistName](resources_resultTypes.ArtistHeader.md#artistname)
- [description](resources_resultTypes.ArtistHeader.md#description)
- [thumbnails](resources_resultTypes.ArtistHeader.md#thumbnails)
- [totalSubscribers](resources_resultTypes.ArtistHeader.md#totalsubscribers)

### Methods

- [from](resources_resultTypes.ArtistHeader.md#from)

## Properties

### artistName

• **artistName**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/dd71f98/src/resources/resultTypes/artistURL.ts#L17)

___

### description

• **description**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/dd71f98/src/resources/resultTypes/artistURL.ts#L19)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/dd71f98/src/resources/resultTypes/artistURL.ts#L20)

___

### totalSubscribers

• **totalSubscribers**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/dd71f98/src/resources/resultTypes/artistURL.ts#L18)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/dd71f98/src/blocks/item.ts#L25)
