[youtube-moosick](../README.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / SearchSuggestions

# Class: SearchSuggestions

[resources/resultTypes](../modules/resources_resultTypes.md).SearchSuggestions

## Hierarchy

- `Item`

  ↳ **`SearchSuggestions`**

## Table of contents

### Constructors

- [constructor](resources_resultTypes.SearchSuggestions.md#constructor)

### Properties

- [artist](resources_resultTypes.SearchSuggestions.md#artist)
- [title](resources_resultTypes.SearchSuggestions.md#title)

### Methods

- [from](resources_resultTypes.SearchSuggestions.md#from)

## Constructors

### constructor

• **new SearchSuggestions**()

**`deprecated`** You're probably looking for `Item.from()`

#### Inherited from

Item.constructor

#### Defined in

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/42733e8/src/blocks/item.ts#L20)

## Properties

### artist

• `Optional` **artist**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/42733e8/src/resources/resultTypes/searchSuggestions.ts#L5)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:4](https://github.com/EvasiveXkiller/youtube-moosick/blob/42733e8/src/resources/resultTypes/searchSuggestions.ts#L4)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/42733e8/src/blocks/item.ts#L22)
