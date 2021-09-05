[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistURL

# Class: PlaylistURL

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistURL

## Hierarchy

- `Item`

  ↳ **`PlaylistURL`**

  ↳↳ [`ContinuablePlaylistURL`](resources_resultTypes.ContinuablePlaylistURL.md)

## Table of contents

### Constructors

- [constructor](resources_resultTypes.PlaylistURL.md#constructor)

### Properties

- [continuation](resources_resultTypes.PlaylistURL.md#continuation)
- [headers](resources_resultTypes.PlaylistURL.md#headers)
- [playlistContents](resources_resultTypes.PlaylistURL.md#playlistcontents)

### Methods

- [from](resources_resultTypes.PlaylistURL.md#from)

## Constructors

### constructor

• **new PlaylistURL**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L20)

## Properties

### continuation

• **continuation**: [`Continuation`](../interfaces/resources_resultTypes.Continuation.md)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L9)

___

### headers

• **headers**: [`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L7)

___

### playlistContents

• **playlistContents**: [`PlaylistContent`](resources_resultTypes.PlaylistContent.md)[]

#### Defined in

[src/resources/resultTypes/playlistURL.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L8)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L22)
