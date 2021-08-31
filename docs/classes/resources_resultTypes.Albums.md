[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / Albums

# Class: Albums

[resources/resultTypes](../modules/resources_resultTypes.md).Albums

## Hierarchy

- `Item`

  ↳ **`Albums`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.Albums.md#constructor)

### Properties

- [URL](resources_resultTypes.Albums.md#url)
- [browseId](resources_resultTypes.Albums.md#browseid)
- [thumbnails](resources_resultTypes.Albums.md#thumbnails)
- [title](resources_resultTypes.Albums.md#title)
- [year](resources_resultTypes.Albums.md#year)

### Methods

- [from](resources_resultTypes.Albums.md#from)

## Constructors

### constructor

• **new Albums**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/blocks/item.ts#L20)

## Properties

### URL

• **URL**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/resources/resultTypes/artistURL.ts#L26)

___

### browseId

• **browseId**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/resources/resultTypes/artistURL.ts#L25)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/artistURL.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/resources/resultTypes/artistURL.ts#L28)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/artistURL.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/resources/resultTypes/artistURL.ts#L24)

___

### year

• **year**: `number`

#### Defined in

[src/resources/resultTypes/artistURL.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/resources/resultTypes/artistURL.ts#L27)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/0121919/src/blocks/item.ts#L22)
