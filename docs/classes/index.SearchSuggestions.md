[youtube-moosick](../README.md) / [index](../modules/index.md) / SearchSuggestions

# Class: SearchSuggestions

[index](../modules/index.md).SearchSuggestions

## Hierarchy

- `Item`

  ↳ **`SearchSuggestions`**

## Table of contents

### Properties

- [artist](index.SearchSuggestions.md#artist)
- [title](index.SearchSuggestions.md#title)

### Methods

- [from](index.SearchSuggestions.md#from)

## Properties

### artist

• `Optional` **artist**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/f01b3ac/src/resources/resultTypes/searchSuggestions.ts#L5)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:4](https://github.com/EvasiveXkiller/youtube-moosick/blob/f01b3ac/src/resources/resultTypes/searchSuggestions.ts#L4)

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

[src/blocks/item.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/f01b3ac/src/blocks/item.ts#L25)
