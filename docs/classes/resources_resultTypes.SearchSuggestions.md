[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/resultTypes](../modules/resources_resultTypes.md) / SearchSuggestions

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

[src/blocks/item.ts:20](https://github.com/EvasiveXkiller/youtube-moosick/blob/35a8b78/src/blocks/item.ts#L20)

## Properties

### artist

• `Optional` **artist**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:5](https://github.com/EvasiveXkiller/youtube-moosick/blob/35a8b78/src/resources/resultTypes/searchSuggestions.ts#L5)

___

### title

• **title**: `string`

#### Defined in

[src/resources/resultTypes/searchSuggestions.ts:4](https://github.com/EvasiveXkiller/youtube-moosick/blob/35a8b78/src/resources/resultTypes/searchSuggestions.ts#L4)

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

[src/blocks/item.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/35a8b78/src/blocks/item.ts#L22)
