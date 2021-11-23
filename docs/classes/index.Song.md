[youtube-moosick](../README.md) / [index](../modules/index.md) / Song

# Class: Song

[index](../modules/index.md).Song

## Hierarchy

- `Item`

  ↳ **`Song`**

## Table of contents

### Properties

- [album](index.Song.md#album)
- [artist](index.Song.md#artist)
- [duration](index.Song.md#duration)
- [name](index.Song.md#name)
- [params](index.Song.md#params)
- [playlistId](index.Song.md#playlistid)
- [thumbnails](index.Song.md#thumbnails)
- [type](index.Song.md#type)
- [url](index.Song.md#url)
- [videoId](index.Song.md#videoid)

### Methods

- [from](index.Song.md#from)

## Properties

### album

• **album**: [`Album`](index.Album.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L14)

___

### artist

• **artist**: [`Artist`](index.Artist.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L13)

___

### duration

• **duration**: `number`

#### Defined in

[src/resources/generalTypes/song.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L9)

___

### params

• **params**: `any`

#### Defined in

[src/resources/generalTypes/song.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L17)

___

### playlistId

• `Optional` **playlistId**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L12)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](index.Thumbnails.md)[]

#### Defined in

[src/resources/generalTypes/song.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L16)

___

### type

• `Optional` **type**: [`Category`](../enums/enums.Category.md) = `Category.SONG`

#### Defined in

[src/resources/generalTypes/song.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L8)

___

### url

• **url**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L11)

___

### videoId

• **videoId**: `string`

#### Defined in

[src/resources/generalTypes/song.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/resources/generalTypes/song.ts#L10)

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
| `options` | `ItemOptions`<() => `T`\> |

#### Returns

`T`

#### Inherited from

Item.from

#### Defined in

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/941fb25/src/blocks/item.ts#L25)
