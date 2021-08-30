[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / Videos

# Class: Videos

[resources/resultTypes](../modules/resources_resultTypes.md).Videos

## Hierarchy

- `Item`

  ↳ **`Videos`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.Videos.md#constructor)

### Properties

- [URL](resources_resultTypes.Videos.md#url)
- [author](resources_resultTypes.Videos.md#author)
- [playlistId](resources_resultTypes.Videos.md#playlistid)
- [thumbnails](resources_resultTypes.Videos.md#thumbnails)
- [title](resources_resultTypes.Videos.md#title)
- [videoId](resources_resultTypes.Videos.md#videoid)
- [views](resources_resultTypes.Videos.md#views)

### Methods

- [from](resources_resultTypes.Videos.md#from)

## Constructors

### constructor

• **new Videos**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### URL

• **URL**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:42](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L42)

___

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:45](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L45)

___

### playlistId

• **playlistId**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:43](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L43)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:46](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L46)

___

### title

• **title**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:40](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L40)

___

### videoId

• **videoId**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:41](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L41)

___

### views

• **views**: `number`

#### Defined in

[resources/resultTypes/artistURL.ts:44](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/artistURL.ts#L44)

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
