[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ArtistContent

# Class: ArtistContent

[resources/resultTypes](../modules/resources_resultTypes.md).ArtistContent

## Hierarchy

- `Item`

  ↳ **`ArtistContent`**

## Table of contents

### Properties

- [albums](resources_resultTypes.ArtistContent.md#albums)
- [single](resources_resultTypes.ArtistContent.md#single)
- [videos](resources_resultTypes.ArtistContent.md#videos)

### Methods

- [from](resources_resultTypes.ArtistContent.md#from)

## Properties

### albums

• **albums**: [`Albums`](resources_resultTypes.Albums.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/336d09f/src/resources/resultTypes/artistURL.ts#L11)

___

### single

• **single**: [`Single`](resources_resultTypes.Single.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/336d09f/src/resources/resultTypes/artistURL.ts#L12)

___

### videos

• **videos**: [`Videos`](resources_resultTypes.Videos.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/336d09f/src/resources/resultTypes/artistURL.ts#L13)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/336d09f/src/blocks/item.ts#L25)
