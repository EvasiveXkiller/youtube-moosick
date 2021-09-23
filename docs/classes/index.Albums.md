[youtube-moosick](../README.md) / [index](../modules/index.md) / Albums

# Class: Albums

[index](../modules/index.md).Albums

## Hierarchy

- `Item`

  ↳ **`Albums`**

## Table of contents

### Properties

- [URL](index.Albums.md#url)
- [browseId](index.Albums.md#browseid)
- [thumbnails](index.Albums.md#thumbnails)
- [title](index.Albums.md#title)
- [year](index.Albums.md#year)

### Methods

- [from](index.Albums.md#from)

## Properties

### URL

• **URL**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L26)

___

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L25)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L28)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L24)

___

### year

• **year**: `number`

#### Defined in

[src/resources/resultTypes/artistURL.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/resources/resultTypes/artistURL.ts#L27)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/03ff0d5/src/blocks/item.ts#L25)
