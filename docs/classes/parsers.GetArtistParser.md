[youtube-moosick](../README.md) / [Modules](../modules.md) / [parsers](../modules/parsers.md) / GetArtistParser

# Class: GetArtistParser

[parsers](../modules/parsers.md).GetArtistParser

## Table of contents

### Constructors

- [constructor](parsers.GetArtistParser.md#constructor)

### Methods

- [parseArtistFromVideos](parsers.GetArtistParser.md#parseartistfromvideos)
- [parseArtistURLPage](parsers.GetArtistParser.md#parseartisturlpage)
- [parseMusicThumbnailRenderer](parsers.GetArtistParser.md#parsemusicthumbnailrenderer)

## Constructors

### constructor

• **new GetArtistParser**()

## Methods

### parseArtistFromVideos

▸ `Static` `Private` **parseArtistFromVideos**(`subtitleRenderer`): [`Artist`](resources_generalTypes.Artist.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtitleRenderer` | `SubtitleRun`[] |

#### Returns

[`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[src/parsers/getArtistParser.ts:109](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getArtistParser.ts#L109)

___

### parseArtistURLPage

▸ `Static` **parseArtistURLPage**(`context`): [`ArtistURL`](resources_resultTypes.ArtistURL.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ArtistURLFullResult` |

#### Returns

[`ArtistURL`](resources_resultTypes.ArtistURL.md)

#### Defined in

[src/parsers/getArtistParser.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getArtistParser.ts#L15)

___

### parseMusicThumbnailRenderer

▸ `Static` `Private` **parseMusicThumbnailRenderer**(`musicThumbnailRenderer`): [`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `musicThumbnailRenderer` | `MusicThumbnailRenderer` |

#### Returns

[`Thumbnails`](resources_generalTypes.Thumbnails.md)[]

#### Defined in

[src/parsers/getArtistParser.ts:97](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getArtistParser.ts#L97)
