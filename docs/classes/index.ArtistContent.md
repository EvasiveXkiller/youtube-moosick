[youtube-moosick](../README.md) / [index](../modules/index.md) / ArtistContent

# Class: ArtistContent

[index](../modules/index.md).ArtistContent

## Hierarchy

- `Item`

  ↳ **`ArtistContent`**

## Table of contents

### Properties

- [albums](index.ArtistContent.md#albums)
- [single](index.ArtistContent.md#single)
- [videos](index.ArtistContent.md#videos)

### Methods

- [from](index.ArtistContent.md#from)

## Properties

### albums

• **albums**: [`Albums`](index.Albums.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/resultTypes/artistURL.ts#L11)

___

### single

• **single**: [`Single`](index.Single.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/resultTypes/artistURL.ts#L12)

___

### videos

• **videos**: [`Videos`](index.Videos.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/resources/resultTypes/artistURL.ts#L13)

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

Item.from

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/026dabc/src/blocks/item.ts#L25)
