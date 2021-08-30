[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Playlist

# Class: Playlist

[resources/generalTypes](../modules/resources_generalTypes.md).Playlist

## Hierarchy

- `Item`

  ↳ **`Playlist`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.Playlist.md#constructor)

### Properties

- [author](resources_generalTypes.Playlist.md#author)
- [browseId](resources_generalTypes.Playlist.md#browseid)
- [name](resources_generalTypes.Playlist.md#name)
- [trackCount](resources_generalTypes.Playlist.md#trackcount)

### Methods

- [from](resources_generalTypes.Playlist.md#from)

## Constructors

### constructor

• **new Playlist**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/blocks/item.ts#L20)

## Properties

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[resources/generalTypes/playlist.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/generalTypes/playlist.ts#L7)

___

### browseId

• **browseId**: `string`

#### Defined in

[resources/generalTypes/playlist.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/generalTypes/playlist.ts#L6)

___

### name

• **name**: `string`

#### Defined in

[resources/generalTypes/playlist.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/generalTypes/playlist.ts#L5)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[resources/generalTypes/playlist.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/generalTypes/playlist.ts#L8)

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
