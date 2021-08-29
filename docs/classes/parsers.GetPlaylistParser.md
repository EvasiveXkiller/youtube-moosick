[youtube-moosick](../README.md) / [Modules](../modules.md) / [parsers](../modules/parsers.md) / GetPlaylistParser

# Class: GetPlaylistParser

[parsers](../modules/parsers.md).GetPlaylistParser

Used for getPlaylistURL function ONLY

## Table of contents

### Constructors

- [constructor](parsers.GetPlaylistParser.md#constructor)

### Methods

- [parsePlaylistURL](parsers.GetPlaylistParser.md#parseplaylisturl)
- [playlistURLHeaderParser](parsers.GetPlaylistParser.md#playlisturlheaderparser)

## Constructors

### constructor

• **new GetPlaylistParser**()

## Methods

### parsePlaylistURL

▸ `Static` **parsePlaylistURL**(`context`): [`PlaylistURL`](resources_resultTypes.PlaylistURL.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `any` |

#### Returns

[`PlaylistURL`](resources_resultTypes.PlaylistURL.md)

#### Defined in

[src/parsers/getPlaylistParser.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getPlaylistParser.ts#L13)

___

### playlistURLHeaderParser

▸ `Static` `Private` **playlistURLHeaderParser**(`header`): [`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `MusicDetailHeaderRenderer`[] |

#### Returns

[`PlaylistHeader`](resources_resultTypes.PlaylistHeader.md)

#### Defined in

[src/parsers/getPlaylistParser.ts:39](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/parsers/getPlaylistParser.ts#L39)
