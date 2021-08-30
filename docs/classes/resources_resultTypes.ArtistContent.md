[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ArtistContent

# Class: ArtistContent

[resources/resultTypes](../modules/resources_resultTypes.md).ArtistContent

## Hierarchy

- `Item`

  ↳ **`ArtistContent`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.ArtistContent.md#constructor)

### Properties

- [albums](resources_resultTypes.ArtistContent.md#albums)
- [single](resources_resultTypes.ArtistContent.md#single)
- [videos](resources_resultTypes.ArtistContent.md#videos)

### Methods

- [from](resources_resultTypes.ArtistContent.md#from)

## Constructors

### constructor

• **new ArtistContent**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### albums

• **albums**: [`Albums`](resources_resultTypes.Albums.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L11)

___

### single

• **single**: [`Single`](resources_resultTypes.Single.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L12)

___

### videos

• **videos**: [`Videos`](resources_resultTypes.Videos.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L13)

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