[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ArtistURL

# Class: ArtistURL

[resources/resultTypes](../modules/resources_resultTypes.md).ArtistURL

## Hierarchy

- `Item`

  ↳ **`ArtistURL`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.ArtistURL.md#constructor)

### Properties

- [artistContents](resources_resultTypes.ArtistURL.md#artistcontents)
- [headers](resources_resultTypes.ArtistURL.md#headers)

### Methods

- [from](resources_resultTypes.ArtistURL.md#from)

## Constructors

### constructor

• **new ArtistURL**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/blocks/item.ts#L20)

## Properties

### artistContents

• **artistContents**: [`ArtistContent`](resources_resultTypes.ArtistContent.md)

#### Defined in

[src/resources/resultTypes/artistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/artistURL.ts#L7)

___

### headers

• **headers**: [`ArtistHeader`](resources_resultTypes.ArtistHeader.md)

#### Defined in

[src/resources/resultTypes/artistURL.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/artistURL.ts#L6)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/blocks/item.ts#L22)
