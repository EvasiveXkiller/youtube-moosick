[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/errors](../modules/resources_errors.md) / ClientError

# Class: ClientError

[resources/errors](../modules/resources_errors.md).ClientError

## Hierarchy

- `Error`

  ↳ **`ClientError`**

  ↳↳ [`IllegalArgumentError`](resources_errors.IllegalArgumentError.md)

  ↳↳ [`IllegalCategoryError`](resources_errors.IllegalCategoryError.md)

  ↳↳ [`IllegalInvocationError`](resources_errors.IllegalInvocationError.md)

  ↳↳ [`IllegalStateError`](resources_errors.IllegalStateError.md)

## Table of contents

### Constructors

- [constructor](resources_errors.ClientError.md#constructor)

### Properties

- [message](resources_errors.ClientError.md#message)
- [name](resources_errors.ClientError.md#name)
- [stack](resources_errors.ClientError.md#stack)
- [prepareStackTrace](resources_errors.ClientError.md#preparestacktrace)
- [stackTraceLimit](resources_errors.ClientError.md#stacktracelimit)

### Methods

- [toPlainObject](resources_errors.ClientError.md#toplainobject)
- [captureStackTrace](resources_errors.ClientError.md#capturestacktrace)
- [from](resources_errors.ClientError.md#from)

## Constructors

### constructor

• **new ClientError**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'No message provided, an error with errors?'` |

#### Overrides

Error.constructor

#### Defined in

[src/resources/errors/client.error.ts:2](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/errors/client.error.ts#L2)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### toPlainObject

▸ **toPlainObject**(): [`PlainErrorObject`](../interfaces/resources_errors.PlainErrorObject.md)

#### Returns

[`PlainErrorObject`](../interfaces/resources_errors.PlainErrorObject.md)

#### Defined in

[src/resources/errors/client.error.ts:21](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/errors/client.error.ts#L21)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### from

▸ `Static` **from**<`T`\>(`obj`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClientError`](resources_errors.ClientError.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`PlainErrorObject`](../interfaces/resources_errors.PlainErrorObject.md) \| `Error` |

#### Returns

`T`

#### Defined in

[src/resources/errors/client.error.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/errors/client.error.ts#L11)
