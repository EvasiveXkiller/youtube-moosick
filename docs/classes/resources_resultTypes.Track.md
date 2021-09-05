[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / Track

# Class: Track

[resources/resultTypes](../modules/resources_resultTypes.md).Track

## Hierarchy

- `Item`

  ↳ **`Track`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.Track.md#constructor)

### Properties

- [index](resources_resultTypes.Track.md#index)
- [lengthMs](resources_resultTypes.Track.md#lengthms)
- [title](resources_resultTypes.Track.md#title)
- [videoId](resources_resultTypes.Track.md#videoid)

### Methods

- [from](resources_resultTypes.Track.md#from)

## Constructors

### constructor

• **new Track**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/blocks/item.ts#L20)

## Properties

### index

• **index**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:23](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/albumURL.ts#L23)

___

### lengthMs

• **lengthMs**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/albumURL.ts#L26)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/albumURL.ts#L24)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/albumURL.ts#L25)

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
