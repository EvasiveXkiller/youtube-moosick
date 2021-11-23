[youtube-moosick](../README.md) / [index](../modules/index.md) / Single

# Class: Single

[index](../modules/index.md).Single

## Hierarchy

- `Item`

  ↳ **`Single`**

## Table of contents

### Properties

- [URL](index.Single.md#url)
- [browseId](index.Single.md#browseid)
- [thumbnails](index.Single.md#thumbnails)
- [title](index.Single.md#title)
- [year](index.Single.md#year)

### Methods

- [from](index.Single.md#from)

## Properties

### URL

• **URL**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:34](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/resources/resultTypes/artistURL.ts#L34)

___

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:33](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/resources/resultTypes/artistURL.ts#L33)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:36](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/resources/resultTypes/artistURL.ts#L36)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:32](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/resources/resultTypes/artistURL.ts#L32)

___

### year

• **year**: `number`

#### Defined in

[src/resources/resultTypes/artistURL.ts:35](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/resources/resultTypes/artistURL.ts#L35)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/09e3313/src/blocks/item.ts#L25)
