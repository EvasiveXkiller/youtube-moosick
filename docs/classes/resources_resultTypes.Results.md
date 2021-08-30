[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / Results

# Class: Results

[resources/resultTypes](../modules/resources_resultTypes.md).Results

## Hierarchy

- `Item`

  ↳ **`Results`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.Results.md#constructor)

### Properties

- [continuation](resources_resultTypes.Results.md#continuation)
- [result](resources_resultTypes.Results.md#result)

### Methods

- [from](resources_resultTypes.Results.md#from)

## Constructors

### constructor

• **new Results**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/blocks/item.ts#L20)

## Properties

### continuation

• `Optional` **continuation**: `NextContinuationData`

#### Defined in

[resources/resultTypes/results.ts:13](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/resources/resultTypes/results.ts#L13)

___

### result

• `Optional` **result**: [`VideoSearchResult`](resources_resultTypes.VideoSearchResult.md)[] \| [`AlbumSearchResult`](resources_resultTypes.AlbumSearchResult.md)[] \| [`ArtistSearchResult`](resources_resultTypes.ArtistSearchResult.md)[] \| [`PlaylistSearchResult`](resources_resultTypes.PlaylistSearchResult.md)[] \| (``null`` \| [`Unsorted`](resources_resultTypes.Unsorted.md))[]

#### Defined in

[resources/resultTypes/results.ts:6](https://github.com/EvasiveXkiller/youtube-moosick/blob/ae18783/src/resources/resultTypes/results.ts#L6)

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
