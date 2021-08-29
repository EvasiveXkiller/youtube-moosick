[youtube-moosick](../README.md) / [Modules](../modules.md) / [resources/errors](../modules/resources_errors.md) / IllegalStateError

# Class: IllegalStateError

[resources/errors](../modules/resources_errors.md).IllegalStateError

## Hierarchy

- [`ClientError`](resources_errors.ClientError.md)

  ↳ **`IllegalStateError`**

## Table of contents

### Constructors

- [constructor](resources_errors.IllegalStateError.md#constructor)

### Properties

- [message](resources_errors.IllegalStateError.md#message)
- [name](resources_errors.IllegalStateError.md#name)
- [stack](resources_errors.IllegalStateError.md#stack)
- [prepareStackTrace](resources_errors.IllegalStateError.md#preparestacktrace)
- [stackTraceLimit](resources_errors.IllegalStateError.md#stacktracelimit)

### Methods

- [toPlainObject](resources_errors.IllegalStateError.md#toplainobject)
- [captureStackTrace](resources_errors.IllegalStateError.md#capturestacktrace)
- [from](resources_errors.IllegalStateError.md#from)

## Constructors

### constructor

• **new IllegalStateError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

[ClientError](resources_errors.ClientError.md).[constructor](resources_errors.ClientError.md#constructor)

#### Defined in

[src/resources/errors/illegalState.error.ts:4](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/errors/illegalState.error.ts#L4)

## Properties

### message

• **message**: `string`

#### Inherited from

[ClientError](resources_errors.ClientError.md).[message](resources_errors.ClientError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[ClientError](resources_errors.ClientError.md).[name](resources_errors.ClientError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ClientError](resources_errors.ClientError.md).[stack](resources_errors.ClientError.md#stack)

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

[ClientError](resources_errors.ClientError.md).[prepareStackTrace](resources_errors.ClientError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ClientError](resources_errors.ClientError.md).[stackTraceLimit](resources_errors.ClientError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### toPlainObject

▸ **toPlainObject**(): [`PlainErrorObject`](../interfaces/resources_errors.PlainErrorObject.md)

#### Returns

[`PlainErrorObject`](../interfaces/resources_errors.PlainErrorObject.md)

#### Inherited from

[ClientError](resources_errors.ClientError.md).[toPlainObject](resources_errors.ClientError.md#toplainobject)

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

[ClientError](resources_errors.ClientError.md).[captureStackTrace](resources_errors.ClientError.md#capturestacktrace)

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

#### Inherited from

[ClientError](resources_errors.ClientError.md).[from](resources_errors.ClientError.md#from)

#### Defined in

[src/resources/errors/client.error.ts:11](https://github.com/EvasiveXkiller/youtube-moosick/blob/d55cf42/src/resources/errors/client.error.ts#L11)
