[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistContent

# Class: PlaylistContent

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistContent

## Hierarchy

- `Item`

  ↳ **`PlaylistContent`**

## Table of contents

### Properties

- [artist](resources_resultTypes.PlaylistContent.md#artist)
- [thumbnail](resources_resultTypes.PlaylistContent.md#thumbnail)
- [trackId](resources_resultTypes.PlaylistContent.md#trackid)
- [trackTitle](resources_resultTypes.PlaylistContent.md#tracktitle)

### Methods

- [from](resources_resultTypes.PlaylistContent.md#from)

## Properties

### artist

• **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/2a6686e/src/resources/resultTypes/playlistURL.ts#L19)

___

### thumbnail

• **thumbnail**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/2a6686e/src/resources/resultTypes/playlistURL.ts#L20)

___

### trackId

• `Optional` **trackId**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/2a6686e/src/resources/resultTypes/playlistURL.ts#L18)

___

### trackTitle

• **trackTitle**: `string`

#### Defined in

[src/resources/resultTypes/playlistURL.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/2a6686e/src/resources/resultTypes/playlistURL.ts#L17)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/2a6686e/src/blocks/item.ts#L25)
