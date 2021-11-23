[youtube-moosick](../README.md) / [index](../modules/index.md) / ArtistURL

# Class: ArtistURL

[index](../modules/index.md).ArtistURL

## Hierarchy

- `Item`

  ↳ **`ArtistURL`**

## Table of contents

### Properties

- [artistContents](index.ArtistURL.md#artistcontents)
- [headers](index.ArtistURL.md#headers)

### Methods

- [from](index.ArtistURL.md#from)

## Properties

### artistContents

• **artistContents**: [`ArtistContent`](index.ArtistContent.md)

#### Defined in

[src/resources/resultTypes/artistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L7)

___

### headers

• **headers**: [`ArtistHeader`](index.ArtistHeader.md)

#### Defined in

[src/resources/resultTypes/artistURL.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/resources/resultTypes/artistURL.ts#L6)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/f5f31ec/src/blocks/item.ts#L25)
