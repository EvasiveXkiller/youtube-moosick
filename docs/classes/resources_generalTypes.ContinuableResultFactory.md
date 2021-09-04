[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / ContinuableResultFactory

# Class: ContinuableResultFactory<T, ParserResult, GetContentResult, R\>

[resources/generalTypes](../modules/resources_generalTypes.md).ContinuableResultFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item` |
| `ParserResult` | [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<`T`\> |
| `GetContentResult` | extends `any`[]`T`[] |
| `R` | extends [`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `ParserResult`, `GetContentResult`\>[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `ParserResult`, `GetContentResult`\> |

## Hierarchy

- `Factory`<`R`, `Object`\>

  ↳ **`ContinuableResultFactory`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.ContinuableResultFactory.md#constructor)

### Methods

- [create](resources_generalTypes.ContinuableResultFactory.md#create)

## Constructors

### constructor

• **new ContinuableResultFactory**<`T`, `ParserResult`, `GetContentResult`, `R`\>(`ContinuableResultClass?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item`<`T`\> |
| `ParserResult` | [`ContinuableResultBlueprint`](../interfaces/resources_generalTypes.ContinuableResultBlueprint.md)<`T`\> |
| `GetContentResult` | extends `any`[]`T`[] |
| `R` | extends [`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `ParserResult`, `GetContentResult`, `R`\>[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `ParserResult`, `GetContentResult`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ContinuableResultClass?` | () => `R` |

#### Overrides

Factory&lt;
	R,
	{
		ctx: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;ctx&#x27;];
		parser: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;parser&#x27;];
		getContent: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;getContent&#x27;];
		getContinuation: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;getContinuation&#x27;];
		isDone?: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;isDone&#x27;];
		continuation?: ContinuableResult&lt;T, ParserResult, GetContentResult\&gt;[&#x27;continuation&#x27;];
	}
\&gt;.constructor

#### Defined in

[src/resources/generalTypes/continuableResult.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/73cf5e6/src/resources/generalTypes/continuableResult.ts#L28)

## Methods

### create

▸ **create**(`options`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.continuation?` | `NextContinuationData` |
| `options.ctx` | [`MooSick`](index.MooSick.md) |
| `options.getContent` | (`context`: `ParserResult`) => `GetContentResult` |
| `options.getContinuation` | (`context`: `ParserResult`) => `undefined` \| `NextContinuationData` |
| `options.isDone?` | (`content`: `GetContentResult`) => `boolean` |
| `options.parser` | (`context`: `Result`) => `ParserResult` |

#### Returns

`R`

#### Inherited from

Factory.create

#### Defined in

[src/blocks/item.ts:39](https://github.com/EvasiveXkiller/youtube-moosick/blob/73cf5e6/src/blocks/item.ts#L39)
