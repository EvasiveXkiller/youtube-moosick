[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Album

# Class: Album

[resources/generalTypes](../modules/resources_generalTypes.md).Album

## Hierarchy

- `Item`

  ↳ **`Album`**

  ↳↳ [`AlbumExtended`](resources_generalTypes.AlbumExtended.md)

## Table of contents

### Constructors

- [constructor](resources_generalTypes.Album.md#constructor)

### Properties

- [browseId](resources_generalTypes.Album.md#browseid)
- [name](resources_generalTypes.Album.md#name)
- [url](resources_generalTypes.Album.md#url)

### Methods

- [from](resources_generalTypes.Album.md#from)

## Constructors

### constructor

• **new Album**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/blocks/item.ts#L20)

## Properties

### browseId

• **browseId**: `string`

#### Defined in

[resources/generalTypes/album.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/resources/generalTypes/album.ts#L7)

___

### name

• **name**: `string`

#### Defined in

[resources/generalTypes/album.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/resources/generalTypes/album.ts#L6)

___

### url

• **url**: `string`

#### Defined in

[resources/generalTypes/album.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/resources/generalTypes/album.ts#L8)

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

[blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/blocks/item.ts#L22)
