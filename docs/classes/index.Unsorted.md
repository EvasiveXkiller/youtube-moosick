[youtube-moosick](../README.md) / [index](../modules/index.md) / Unsorted

# Class: Unsorted

[index](../modules/index.md).Unsorted

## Hierarchy

- `Array`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>

  ↳ **`Unsorted`**

  ↳↳ [`ContinuableUnsorted`](index.ContinuableUnsorted.md)

## Table of contents

### Constructors

- [constructor](index.Unsorted.md#constructor)

### Properties

- [albums](index.Unsorted.md#albums)
- [artist](index.Unsorted.md#artist)
- [length](index.Unsorted.md#length)
- [playlists](index.Unsorted.md#playlists)
- [songs](index.Unsorted.md#songs)
- [videos](index.Unsorted.md#videos)
- [[species]](index.Unsorted.md#[species])

### Methods

- [[iterator]](index.Unsorted.md#[iterator])
- [[unscopables]](index.Unsorted.md#[unscopables])
- [at](index.Unsorted.md#at)
- [concat](index.Unsorted.md#concat)
- [copyWithin](index.Unsorted.md#copywithin)
- [entries](index.Unsorted.md#entries)
- [every](index.Unsorted.md#every)
- [fill](index.Unsorted.md#fill)
- [filter](index.Unsorted.md#filter)
- [find](index.Unsorted.md#find)
- [findIndex](index.Unsorted.md#findindex)
- [flat](index.Unsorted.md#flat)
- [flatMap](index.Unsorted.md#flatmap)
- [forEach](index.Unsorted.md#foreach)
- [includes](index.Unsorted.md#includes)
- [indexOf](index.Unsorted.md#indexof)
- [join](index.Unsorted.md#join)
- [keys](index.Unsorted.md#keys)
- [lastIndexOf](index.Unsorted.md#lastindexof)
- [map](index.Unsorted.md#map)
- [pop](index.Unsorted.md#pop)
- [push](index.Unsorted.md#push)
- [reduce](index.Unsorted.md#reduce)
- [reduceRight](index.Unsorted.md#reduceright)
- [reverse](index.Unsorted.md#reverse)
- [shift](index.Unsorted.md#shift)
- [slice](index.Unsorted.md#slice)
- [some](index.Unsorted.md#some)
- [sort](index.Unsorted.md#sort)
- [splice](index.Unsorted.md#splice)
- [toLocaleString](index.Unsorted.md#tolocalestring)
- [toString](index.Unsorted.md#tostring)
- [unshift](index.Unsorted.md#unshift)
- [values](index.Unsorted.md#values)
- [from](index.Unsorted.md#from)
- [isArray](index.Unsorted.md#isarray)
- [of](index.Unsorted.md#of)

## Constructors

### constructor

• **new Unsorted**(`arrayLength`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLength` | `number` |

#### Inherited from

Array<UnsortedSubTypes\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1461

• **new Unsorted**(...`items`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[] |

#### Inherited from

Array<UnsortedSubTypes\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1462

## Properties

### albums

• **albums**: [`AlbumExtended`](index.AlbumExtended.md)[]

#### Defined in

[src/resources/generalTypes/unsorted.ts:24](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/unsorted.ts#L24)

___

### artist

• **artist**: [`ArtistExtended`](index.ArtistExtended.md)[]

#### Defined in

[src/resources/generalTypes/unsorted.ts:27](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/unsorted.ts#L27)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1279

___

### playlists

• **playlists**: [`Playlist`](index.Playlist.md)[]

#### Defined in

[src/resources/generalTypes/unsorted.ts:26](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/unsorted.ts#L26)

___

### songs

• **songs**: [`Song`](index.Song.md)[]

#### Defined in

[src/resources/generalTypes/unsorted.ts:28](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/unsorted.ts#L28)

___

### videos

• **videos**: [`Video`](index.Video.md)[]

#### Defined in

[src/resources/generalTypes/unsorted.ts:25](https://github.com/EvasiveXkiller/youtube-moosick/blob/a6f8007/src/resources/generalTypes/unsorted.ts#L25)

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.\_\_@species@369

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>

Iterator

#### Returns

`IterableIterator`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>

#### Inherited from

Array.\_\_@iterator@299

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@318

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:26

___

### concat

▸ **concat**(...`items`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1303

▸ **concat**(...`items`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) \| `ConcatArray`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1309

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`Unsorted`](index.Unsorted.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the  length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it  is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`Unsorted`](index.Unsorted.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => value is S | A function that accepts up to three arguments. The every method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1386

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `unknown` | A function that accepts up to three arguments. The every method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1395

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`Unsorted`](index.Unsorted.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as  length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as  length+end. |

#### Returns

[`Unsorted`](index.Unsorted.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1422

▸ **filter**(`predicate`, `thisArg?`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1428

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `obj`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => value is S | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found, find  immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `obj`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `obj`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `unknown` | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found,  findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the  callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If  thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1314

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

___

### pop

▸ **pop**(): `undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1292

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

___

### reduce

▸ **reduce**(`callbackfn`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1434

▸ **reduce**(`callbackfn`, `initialValue`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |
| `initialValue` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1447

▸ **reduceRight**(`callbackfn`, `initialValue`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |
| `initialValue` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes) |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `currentIndex`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1454

___

### reverse

▸ **reverse**(): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1319

___

### shift

▸ **shift**(): `undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1324

___

### slice

▸ **slice**(`start?`, `end?`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array.  If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.  If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `index`: `number`, `array`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]) => `unknown` | A function that accepts up to three arguments. The some method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### sort

▸ **sort**(`compareFn?`): [`Unsorted`](index.Unsorted.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes), `b`: [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)) => `number` | Function used to determine the order of the elements. It is expected to return  a negative value if the first argument is less than the second argument, zero if they're equal, and a positive  value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.  ```ts  [11,2,22,1].sort((a, b) => a - b)  ``` |

#### Returns

[`Unsorted`](index.Unsorted.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1345

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1352

▸ **splice**(`start`, `deleteCount`, ...`items`): [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1360

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1287

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1283

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

___

### values

▸ **values**(): `IterableIterator`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<[`UnsortedSubTypes`](../modules/index.md#unsortedsubtypes)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1466

___

### of

▸ `Static` **of**<`T`\>(...`items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86
