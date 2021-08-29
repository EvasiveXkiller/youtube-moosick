[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistURL

# Class: PlaylistURL

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistURL

## Hierarchy

- `Item`

  ↳ **`PlaylistURL`**

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

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/blocks/item.ts#L20)

## Properties

### continuation

• **continuation**: [`Continuation`](../interfaces/resources_resultTypes.Continuation.md)

#### Defined in

[resources/resultTypes/playlistURL.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/playlistURL.ts#L8)

___

### headers

• **headers**: [`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Defined in

[resources/resultTypes/playlistURL.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/playlistURL.ts#L6)

___

### playlistContents

• **playlistContents**: [`PlaylistContent`](resources_resultTypes.PlaylistContent.md)[]

#### Defined in

[resources/resultTypes/playlistURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/playlistURL.ts#L7)

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
