[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / Song

# Class: Song

[resources/generalTypes](../modules/resources_generalTypes.md).Song

## Hierarchy

- `Item`

  ↳ **`Song`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.Song.md#constructor)

### Properties

- [album](resources_generalTypes.Song.md#album)
- [artist](resources_generalTypes.Song.md#artist)
- [duration](resources_generalTypes.Song.md#duration)
- [name](resources_generalTypes.Song.md#name)
- [params](resources_generalTypes.Song.md#params)
- [playlistId](resources_generalTypes.Song.md#playlistid)
- [thumbnails](resources_generalTypes.Song.md#thumbnails)
- [type](resources_generalTypes.Song.md#type)
- [url](resources_generalTypes.Song.md#url)
- [videoId](resources_generalTypes.Song.md#videoid)

### Methods

- [from](resources_generalTypes.Song.md#from)

## Constructors

### constructor

• **new Song**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/blocks/item.ts#L20)

## Properties

### album

• **album**: [`Album`](resources_generalTypes.Album.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L14)

___

### artist

• **artist**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L13)

___

### duration

• **duration**: `number`

#### Defined in

[src/resources/generalTypes/song.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L9)

___

### params

• **params**: `any`

#### Defined in

[src/resources/generalTypes/song.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L17)

___

### playlistId

• **playlistId**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L12)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L16)

___

### type

• `Optional` **type**: [`Category`](../enums/enums.Category.md)

#### Defined in

[src/resources/generalTypes/song.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L8)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L11)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/resources/generalTypes/song.ts#L10)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/a80887d/src/blocks/item.ts#L22)
