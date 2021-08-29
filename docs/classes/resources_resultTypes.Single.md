[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / Single

# Class: Single

[resources/resultTypes](../modules/resources_resultTypes.md).Single

## Hierarchy

- `Item`

  ↳ **`Single`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.Single.md#constructor)

### Properties

- [URL](resources_resultTypes.Single.md#url)
- [browseId](resources_resultTypes.Single.md#browseid)
- [thumbnails](resources_resultTypes.Single.md#thumbnails)
- [title](resources_resultTypes.Single.md#title)
- [year](resources_resultTypes.Single.md#year)

### Methods

- [from](resources_resultTypes.Single.md#from)

## Constructors

### constructor

• **new Single**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/blocks/item.ts#L20)

## Properties

### URL

• **URL**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:34](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/artistURL.ts#L34)

___

### browseId

• **browseId**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:33](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/artistURL.ts#L33)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[resources/resultTypes/artistURL.ts:36](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/artistURL.ts#L36)

___

### title

• **title**: `string`

#### Defined in

[resources/resultTypes/artistURL.ts:32](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/artistURL.ts#L32)

___

### year

• **year**: `number`

#### Defined in

[resources/resultTypes/artistURL.ts:35](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/artistURL.ts#L35)

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

[blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/blocks/item.ts#L22)
