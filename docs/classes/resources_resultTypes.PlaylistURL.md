[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistURL

# Class: PlaylistURL

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistURL

## Hierarchy

- `Item`

  ↳ **`PlaylistURL`**

  ↳↳ [`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)

## Table of contents

### Properties

- [continuation](resources_resultTypes.PlaylistURL.md#continuation)
- [headers](resources_resultTypes.PlaylistURL.md#headers)
- [playlistContents](resources_resultTypes.PlaylistURL.md#playlistcontents)

### Methods

- [from](resources_resultTypes.PlaylistURL.md#from)

## Properties

### continuation

• **continuation**: [`Continuation`](../interfaces/resources_resultTypes.Continuation.md)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/e1b0fae/src/resources/resultTypes/playlistURL.ts#L9)

___

### headers

• `Optional` **headers**: [`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/e1b0fae/src/resources/resultTypes/playlistURL.ts#L7)

___

### playlistContents

• **playlistContents**: [`PlaylistContent`](resources_resultTypes.PlaylistContent.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/e1b0fae/src/resources/resultTypes/playlistURL.ts#L8)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/e1b0fae/src/blocks/item.ts#L25)
