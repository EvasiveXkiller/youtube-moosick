[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistContent

# Class: PlaylistContent

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistContent

## Hierarchy

- `Item`

  ↳ **`PlaylistContent`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.PlaylistContent.md#constructor)

### Properties

- [artist](resources_resultTypes.PlaylistContent.md#artist)
- [thumbnail](resources_resultTypes.PlaylistContent.md#thumbnail)
- [trackId](resources_resultTypes.PlaylistContent.md#trackid)
- [trackTitle](resources_resultTypes.PlaylistContent.md#tracktitle)

### Methods

- [from](resources_resultTypes.PlaylistContent.md#from)

## Constructors

### constructor

• **new PlaylistContent**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/blocks/item.ts#L20)

## Properties

### artist

• **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/resources/resultTypes/playlistURL.ts#L14)

___

### thumbnail

• **thumbnail**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/resources/resultTypes/playlistURL.ts#L15)

___

### trackId

• `Optional` **trackId**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/resources/resultTypes/playlistURL.ts#L13)

___

### trackTitle

• **trackTitle**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/resources/resultTypes/playlistURL.ts#L12)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/e3517b6/src/blocks/item.ts#L22)
