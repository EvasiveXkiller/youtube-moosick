[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / AlbumURL

# Class: AlbumURL

[resources/resultTypes](../modules/resources_resultTypes.md).AlbumURL

## Hierarchy

- `Item`

  ↳ **`AlbumURL`**

## Table of contents

### Properties

- [artist](resources_resultTypes.AlbumURL.md#artist)
- [date](resources_resultTypes.AlbumURL.md#date)
- [description](resources_resultTypes.AlbumURL.md#description)
- [duration](resources_resultTypes.AlbumURL.md#duration)
- [thumbnails](resources_resultTypes.AlbumURL.md#thumbnails)
- [title](resources_resultTypes.AlbumURL.md#title)
- [trackCount](resources_resultTypes.AlbumURL.md#trackcount)
- [tracks](resources_resultTypes.AlbumURL.md#tracks)

### Methods

- [from](resources_resultTypes.AlbumURL.md#from)

## Properties

### artist

• **artist**: [`ArtistExtended`](resources_generalTypes.ArtistExtended.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L11)

___

### date

• **date**: [`ReleaseDate`](resources_resultTypes.ReleaseDate.md)

#### Defined in

[src/resources/resultTypes/albumURL.ts:9](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L9)

___

### description

• **description**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:7](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L7)

___

### duration

• **duration**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:10](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L10)

___

### thumbnails

• **thumbnails**: [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L13)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/albumURL.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L6)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[src/resources/resultTypes/albumURL.ts:8](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L8)

___

### tracks

• **tracks**: [`Track`](resources_resultTypes.Track.md)[]

#### Defined in

[src/resources/resultTypes/albumURL.ts:12](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/resources/resultTypes/albumURL.ts#L12)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/1b16ec0/src/blocks/item.ts#L25)
