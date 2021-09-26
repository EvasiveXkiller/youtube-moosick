[youtube-moosick](../README.md) / [index](../modules/index.md) / ContinuablePlaylistURL

# Class: ContinuablePlaylistURL

[index](../modules/index.md).ContinuablePlaylistURL

## Hierarchy

- [`PlaylistURL`](index.PlaylistURL.md)

  ↳ **`ContinuablePlaylistURL`**

## Table of contents

### Properties

- [continuation](index.ContinuablePlaylistURL.md#continuation)
- [headers](index.ContinuablePlaylistURL.md#headers)
- [playlistContents](index.ContinuablePlaylistURL.md#playlistcontents)

### Methods

- [from](index.ContinuablePlaylistURL.md#from)

## Properties

### continuation

• **continuation**: [`Continuation`](../interfaces/index.Continuation.md)

#### Inherited from

[PlaylistURL](index.PlaylistURL.md).[continuation](index.PlaylistURL.md#continuation)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/fb05789/src/resources/resultTypes/playlistURL.ts#L9)

___

### headers

• `Optional` **headers**: [`PlaylistHeader`](index.PlaylistHeader.md)

#### Inherited from

[PlaylistURL](index.PlaylistURL.md).[headers](index.PlaylistURL.md#headers)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/fb05789/src/resources/resultTypes/playlistURL.ts#L7)

___

### playlistContents

• **playlistContents**: [`ContinuableResult`](index.ContinuableResult.md)<[`PlaylistContent`](index.PlaylistContent.md), [`PlaylistURL`](index.PlaylistURL.md), [`PlaylistContent`](index.PlaylistContent.md)[]\>

#### Overrides

[PlaylistURL](index.PlaylistURL.md).[playlistContents](index.PlaylistURL.md#playlistcontents)

#### Defined in

[src/resources/resultTypes/playlistURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/fb05789/src/resources/resultTypes/playlistURL.ts#L13)

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

[PlaylistURL](index.PlaylistURL.md).[from](index.PlaylistURL.md#from)

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/fb05789/src/blocks/item.ts#L25)
