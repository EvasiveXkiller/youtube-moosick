[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Thumbnails

# Class: Thumbnails

[resources/generalTypes](../modules/resources_generalTypes.md).Thumbnails

## Hierarchy

- `Item`

  ↳ **`Thumbnails`**

## Implements

- `ThumbnailElement`

## Table of contents

### Constructors

- [constructor](resources_generalTypes.Thumbnails.md#constructor)

### Properties

- [height](resources_generalTypes.Thumbnails.md#height)
- [url](resources_generalTypes.Thumbnails.md#url)
- [width](resources_generalTypes.Thumbnails.md#width)

### Methods

- [from](resources_generalTypes.Thumbnails.md#from)

## Constructors

### constructor

• **new Thumbnails**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/blocks/item.ts#L20)

## Properties

### height

• **height**: `number`

#### Implementation of

ThumbnailElement.height

#### Defined in

[src/resources/generalTypes/thumbnails.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/generalTypes/thumbnails.ts#L7)

___

### url

• **url**: `string`

#### Implementation of

ThumbnailElement.url

#### Defined in

[src/resources/generalTypes/thumbnails.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/generalTypes/thumbnails.ts#L5)

___

### width

• **width**: `number`

#### Implementation of

ThumbnailElement.width

#### Defined in

[src/resources/generalTypes/thumbnails.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/generalTypes/thumbnails.ts#L6)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/blocks/item.ts#L22)
