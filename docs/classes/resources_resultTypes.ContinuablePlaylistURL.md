[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / ContinuablePlaylistURL

# Class: ContinuablePlaylistURL

[resources/resultTypes](../modules/resources_resultTypes.md).ContinuablePlaylistURL

## Hierarchy

- [`PlaylistURL`](resources_resultTypes.PlaylistURL.md)

  ↳ **`ContinuablePlaylistURL`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.ContinuablePlaylistURL.md#constructor)

### Properties

- [continuation](resources_resultTypes.ContinuablePlaylistURL.md#continuation)
- [headers](resources_resultTypes.ContinuablePlaylistURL.md#headers)
- [playlistContents](resources_resultTypes.ContinuablePlaylistURL.md#playlistcontents)

### Methods

- [from](resources_resultTypes.ContinuablePlaylistURL.md#from)

## Constructors

### constructor

• **new ContinuablePlaylistURL**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

[PlaylistURL](resources_resultTypes.PlaylistURL.md).[constructor](resources_resultTypes.PlaylistURL.md#constructor)

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L20)

## Properties

### continuation

• **continuation**: [`Continuation`](../interfaces/resources_resultTypes.Continuation.md)

#### Inherited from

[PlaylistURL](resources_resultTypes.PlaylistURL.md).[continuation](resources_resultTypes.PlaylistURL.md#continuation)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L9)

___

### headers

• **headers**: [`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Inherited from

[PlaylistURL](resources_resultTypes.PlaylistURL.md).[headers](resources_resultTypes.PlaylistURL.md#headers)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L7)

___

### playlistContents

• **playlistContents**: [`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<[`PlaylistContent`](resources_resultTypes.PlaylistContent.md), [`PlaylistURL`](resources_resultTypes.PlaylistURL.md), [`PlaylistContent`](resources_resultTypes.PlaylistContent.md)[]\>

#### Overrides

[PlaylistURL](resources_resultTypes.PlaylistURL.md).[playlistContents](resources_resultTypes.PlaylistURL.md#playlistcontents)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/resources/resultTypes/playlistURL.ts#L13)

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

[PlaylistURL](resources_resultTypes.PlaylistURL.md).[from](resources_resultTypes.PlaylistURL.md#from)

#### Defined in

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/a8c55cd/src/blocks/item.ts#L22)
