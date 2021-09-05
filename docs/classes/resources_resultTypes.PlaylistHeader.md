[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistHeader

# Class: PlaylistHeader

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistHeader

## Hierarchy

- `Item`

  ↳ **`PlaylistHeader`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.PlaylistHeader.md#constructor)

### Properties

- [approxRunTime](resources_resultTypes.PlaylistHeader.md#approxruntime)
- [createdYear](resources_resultTypes.PlaylistHeader.md#createdyear)
- [owner](resources_resultTypes.PlaylistHeader.md#owner)
- [playlistName](resources_resultTypes.PlaylistHeader.md#playlistname)
- [songCount](resources_resultTypes.PlaylistHeader.md#songcount)
- [thumbnail](resources_resultTypes.PlaylistHeader.md#thumbnail)

### Methods

- [from](resources_resultTypes.PlaylistHeader.md#from)

## Constructors

### constructor

• **new PlaylistHeader**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/blocks/item.ts#L20)

## Properties

### approxRunTime

• **approxRunTime**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:29](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L29)

___

### createdYear

• **createdYear**: `number`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L26)

___

### owner

• **owner**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L25)

___

### playlistName

• **playlistName**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L24)

___

### songCount

• **songCount**: `number`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L28)

___

### thumbnail

• **thumbnail**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/8fb67f1/src/resources/resultTypes/playlistURL.ts#L27)

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
