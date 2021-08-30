[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / PlaylistSearchResult

# Class: PlaylistSearchResult

[resources/resultTypes](../modules/resources_resultTypes.md).PlaylistSearchResult

## Hierarchy

- `Item`

  ↳ **`PlaylistSearchResult`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.PlaylistSearchResult.md#constructor)

### Properties

- [author](resources_resultTypes.PlaylistSearchResult.md#author)
- [count](resources_resultTypes.PlaylistSearchResult.md#count)
- [playlistId](resources_resultTypes.PlaylistSearchResult.md#playlistid)
- [title](resources_resultTypes.PlaylistSearchResult.md#title)
- [type](resources_resultTypes.PlaylistSearchResult.md#type)
- [url](resources_resultTypes.PlaylistSearchResult.md#url)

### Methods

- [from](resources_resultTypes.PlaylistSearchResult.md#from)

## Constructors

### constructor

• **new PlaylistSearchResult**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/blocks/item.ts#L20)

## Properties

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[resources/resultTypes/searchResults.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L18)

___

### count

• **count**: `number`

#### Defined in

[resources/resultTypes/searchResults.ts:19](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L19)

___

### playlistId

• **playlistId**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:16](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L16)

___

### title

• **title**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L15)

___

### type

• **type**: [`Category`](../enums/enums.Category.md)

#### Defined in

[resources/resultTypes/searchResults.ts:14](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L14)

___

### url

• **url**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:17](https://github.com/EvasiveXkiller/youtube-moosick/blob/13a57da/src/resources/resultTypes/searchResults.ts#L17)

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
