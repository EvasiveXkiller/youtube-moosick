[youtube-moosick](../README.md) / [Modules](../modules.md) / [parsers](../modules/parsers.md) / GetAlbumParser

# Class: GetAlbumParser

[parsers](../modules/parsers.md).GetAlbumParser

## Table of contents

### Constructors

- [constructor](parsers.GetAlbumParser.md#constructor)

### Methods

- [parseAlbumURLPage](parsers.GetAlbumParser.md#parsealbumurlpage)
- [thumbnailParser](parsers.GetAlbumParser.md#thumbnailparser)

## Constructors

### constructor

• **new GetAlbumParser**()

## Methods

### parseAlbumURLPage

▸ `Static` **parseAlbumURLPage**(`context`): [`AlbumURL`](resources_resultTypes.AlbumURL.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `AlbumURLFullResult` |

#### Returns

[`AlbumURL`](resources_resultTypes.AlbumURL.md)

#### Defined in

[src/parsers/getAlbumParser.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getAlbumParser.ts#L17)

___

### thumbnailParser

▸ `Static` `Private` **thumbnailParser**(`thumbnailDetails`): [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `thumbnailDetails` | `ThumbnailDetails` |

#### Returns

[`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/parsers/getAlbumParser.ts:60](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getAlbumParser.ts#L60)
