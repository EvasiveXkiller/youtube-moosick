[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / ContinuableResultBuilder

# Class: ContinuableResultBuilder<T, V\>

[resources/generalTypes](../modules/resources_generalTypes.md).ContinuableResultBuilder

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item` |
| `V` | `any` |

## Table of contents

### Constructors

- [constructor](resources_generalTypes.ContinuableResultBuilder.md#constructor)

### Methods

- [build](resources_generalTypes.ContinuableResultBuilder.md#build)
- [push](resources_generalTypes.ContinuableResultBuilder.md#push)
- [setContinuation](resources_generalTypes.ContinuableResultBuilder.md#setcontinuation)
- [setGetContent](resources_generalTypes.ContinuableResultBuilder.md#setgetcontent)
- [setIsDone](resources_generalTypes.ContinuableResultBuilder.md#setisdone)
- [setParser](resources_generalTypes.ContinuableResultBuilder.md#setparser)

## Constructors

### constructor

• **new ContinuableResultBuilder**<`T`, `V`\>(`ctx`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Item`<`T`\> |
| `V` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`MooSick`](index.MooSick.md) |

#### Defined in

[src/resources/generalTypes/result.ts:18](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L18)

## Methods

### build

▸ **build**(): [`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `V`\>

#### Returns

[`ContinuableResult`](resources_generalTypes.ContinuableResult.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:52](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L52)

___

### push

▸ **push**(...`items`): [`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Returns

[`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:22](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L22)

___

### setContinuation

▸ **setContinuation**(`continuation?`): [`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation?` | `NextContinuationData` |

#### Returns

[`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:46](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L46)

___

### setGetContent

▸ **setGetContent**(`getContent`): [`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getContent` | (`context`: `V`) => `any` |

#### Returns

[`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:34](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L34)

___

### setIsDone

▸ **setIsDone**(`isDone`): [`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDone` | (`content`: `any`) => `boolean` |

#### Returns

[`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:40](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L40)

___

### setParser

▸ **setParser**(`parser`): [`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | (`context`: `Result`) => `V` |

#### Returns

[`ContinuableResultBuilder`](resources_generalTypes.ContinuableResultBuilder.md)<`T`, `V`\>

#### Defined in

[src/resources/generalTypes/result.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/769bf26/src/resources/generalTypes/result.ts#L28)
