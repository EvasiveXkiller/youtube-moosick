[youtube-moosick](../README.md) / [resources/generalTypes](../modules/resources_generalTypes.md) / UnsortedFactory

# Class: UnsortedFactory

[resources/generalTypes](../modules/resources_generalTypes.md).UnsortedFactory

## Hierarchy

- `Factory`<[`Unsorted`](resources_generalTypes.Unsorted.md), `Pick`<[`Unsorted`](resources_generalTypes.Unsorted.md), `Exclude`<keyof [`Unsorted`](resources_generalTypes.Unsorted.md), keyof `any`[]\>\>\>

  ↳ **`UnsortedFactory`**

## Table of contents

### Constructors

- [constructor](resources_generalTypes.UnsortedFactory.md#constructor)

### Methods

- [create](resources_generalTypes.UnsortedFactory.md#create)

## Constructors

### constructor

• **new UnsortedFactory**()

#### Overrides

Factory&lt;
	Unsorted,
	Pick&lt;Unsorted, Exclude&lt;keyof Unsorted, keyof any[]\&gt;\&gt;
\&gt;.constructor

#### Defined in

[src/resources/generalTypes/unsorted.ts:15](https://github.com/EvasiveXkiller/youtube-moosick/blob/b45b69f/src/resources/generalTypes/unsorted.ts#L15)

## Methods

### create

▸ **create**(`options`): [`Unsorted`](resources_generalTypes.Unsorted.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Pick`<[`Unsorted`](resources_generalTypes.Unsorted.md), ``"albums"`` \| ``"videos"`` \| ``"playlists"`` \| ``"artist"`` \| ``"songs"``\> |

#### Returns

[`Unsorted`](resources_generalTypes.Unsorted.md)

#### Inherited from

Factory.create

#### Defined in

[src/blocks/item.ts:39](https://github.com/EvasiveXkiller/youtube-moosick/blob/b45b69f/src/blocks/item.ts#L39)
