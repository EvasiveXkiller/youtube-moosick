[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / VideoSearchResult

# Class: VideoSearchResult

[resources/resultTypes](../modules/resources_resultTypes.md).VideoSearchResult

## Hierarchy

- `Item`

  ↳ **`VideoSearchResult`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.VideoSearchResult.md#constructor)

### Properties

- [author](resources_resultTypes.VideoSearchResult.md#author)
- [duration](resources_resultTypes.VideoSearchResult.md#duration)
- [name](resources_resultTypes.VideoSearchResult.md#name)
- [type](resources_resultTypes.VideoSearchResult.md#type)
- [url](resources_resultTypes.VideoSearchResult.md#url)
- [videoId](resources_resultTypes.VideoSearchResult.md#videoid)
- [views](resources_resultTypes.VideoSearchResult.md#views)

### Methods

- [from](resources_resultTypes.VideoSearchResult.md#from)

## Constructors

### constructor

• **new VideoSearchResult**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L20)

## Properties

### author

• **author**: [`Artist`](resources_generalTypes.Artist.md)[]

#### Defined in

[resources/resultTypes/searchResults.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L27)

___

### duration

• **duration**: `number`

#### Defined in

[resources/resultTypes/searchResults.ts:29](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L29)

___

### name

• **name**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L24)

___

### type

• **type**: [`Category`](../enums/enums.Category.md)

#### Defined in

[resources/resultTypes/searchResults.ts:23](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L23)

___

### url

• **url**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L26)

___

### videoId

• **videoId**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L25)

___

### views

• **views**: `string`

#### Defined in

[resources/resultTypes/searchResults.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/resources/resultTypes/searchResults.ts#L28)

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

[blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/7f55a5e/src/blocks/item.ts#L22)
