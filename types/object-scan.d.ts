namespace ObjectScan {
	interface Context<K extends string | number | symbol = string, V = unknown> {
		/**key that callback is invoked for (respects joined option). */
		key: K | K[];
		/**value for key. */
		value: V;
		/**entry consisting of [key, value]. */
		entry: [key: K, value: V];
		/**current parent property. */
		property: string;
		/**current grandparent property. */
		gproperty: string;
		/**current parent. */
		parent: Record<K, V>;
		/**current grandparent. */
		gparent: Record<K, V>;
		/**array of form [parent, grandparent, ...]. */
		parents: Record<K, V>[];
		/**true iff last targeting needle exists and is non-excluding. */
		isMatch: boolean;
		/**all non-excluding needles targeting key. */
		matchedBy: string[];
		/**all excluding needles targeting key. */
		excludedBy: string[];
		/**all needles involved in traversing key. */
		traversedBy: string[];
		/**true iff value contained in parents */
		isCircular: boolean;
		/**true iff value can not be traversed */
		isLeaf: boolean;
		/**length of key */
		depth: number;
		/**intermittent result as defined by rtn */
		result:
			| Context<K, V>['key']
			| keyof Context<K, V> | 'bool' | 'count'
			| (Exclude<keyof Context<K, V>, 'context'>)[];
		/**function that returns key */
		getKey: () => Context<K, V>['key'];
		/**function that returns value */
		getValue: () => Context<K, V>['value'];
		/**function that returns entry */
		getEntry: () => Context<K, V>['entry'];
		/**function that returns property */
		getProperty: () => Context<K, V>['property'];
		/**function that returns gproperty */
		getGproperty: () => Context<K, V>['gproperty'];
		/**function that returns parent */
		getParent: () => Context<K, V>['parent'];
		/**function that returns gparent */
		getGparent: () => Context<K, V>['gparent'];
		/**function that returns parents */
		getParents: () => Context<K, V>['parents'];
		/**function that returns isMatch */
		getIsMatch: () => Context<K, V>['isMatch'];
		/**function that returns matchedBy */
		getMatchedBy: () => Context<K, V>['matchedBy'];
		/**function that returns excludedBy */
		getExcludedBy: () => Context<K, V>['excludedBy'];
		/**function that returns traversedBy */
		getTraversedBy: () => Context<K, V>['traversedBy'];
		/**function that returns isCircular */
		getIsCircular: () => Context<K, V>['isCircular'];
		/**function that returns isLeaf */
		getIsLeaf: () => Context<K, V>['isLeaf'];
		/**function that returns depth */
		getDepth: () => Context<K, V>['depth'];
		/**function that returns result */
		getResult: () => Context<K, V>['result'];
		/**as passed into the search */
		context: () => Context<K, V>['context'];
	}

	interface Options<C extends Context = Context> {
		/**
		 * Keys are returned as a string when set to `true` instead of as a list.

			Setting this option to `true` will negatively impact performance.

			Note that [_.get](https://lodash.com/docs/#get) and [_.set](https://lodash.com/docs/#set) fully support lists.

			_Examples_:
			```js
			const haystack = [0, 1, { foo: 'bar' }];
			objectScan(['[*]', '[*].foo'], { joined: true })(haystack);
			// => [ '[2].foo', '[2]', '[1]', '[0]' ]
			```
		 */
		joined?: boolean;
		/**
		 * When defined, this callback is invoked for every match. If `false`
			is returned, the current key is excluded from the result.

			The return value of this callback has no effect when a search context is provided.

			Can be used to do processing as matching keys are traversed.

			Invoked in same order as matches would appear in result.

			This method is conceptually similar to
			[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

			_Examples_:

			```js
			const haystack = { a: 0, b: 'bar' };
			objectScan(['**'], {
			joined: true,
			filterFn: ({ value }) => typeof value === 'string'
			})(haystack);
			// => [ 'b' ]
			```
		 */
		filterFn?: (context: C) => boolean;
		/**
		 * When defined, this callback is invoked for every key that is traversed by
			the search. If `true` is returned, all keys nested under the current key are
			skipped in the search and from the final result.

			Note that `breakFn` is invoked before the corresponding `filterFn` might be invoked.

			_Examples_:

			```js
			const haystack = { a: { b: { c: 0 } } };
			objectScan(['**'], {
			joined: true,
			breakFn: ({ key }) => key === 'a.b'
			})(haystack);
			// => [ 'a.b', 'a' ]
			```
		 */
		breakFn?: (context: C) => boolean;
		/**
		 * When defined, this function is called before traversal as `beforeFn(state = { haystack, context })`
			and `state.haystack` is then traversed using `state.context`.

			_Examples_:

			```js
			const haystack = { a: 0 };
			objectScan(['**'], {
			joined: true,
			beforeFn: (state) => { state.haystack = [state.haystack, state.context]; },
			rtn: 'key'
			})(haystack, { b: 0 });
			// => [ '[1].b', '[1]', '[0].a', '[0]' ]
			```
		 */
		beforeFn?: (context: C) => void;
		/**
		 * When defined, this function is called after traversal as `afterFn(state = { result, haystack, context })`
			and `state.result` is then returned from the search invocation.

			_Examples_:
			<details><summary> <code>['**']</code> <em>(returning count plus context)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0 };
			objectScan(['**'], {
			afterFn: (state) => { state.result += state.context; },
			rtn: 'count'
			})(haystack, 5);
			// => 6
			```
		 */
		afterFn?: (context: C) => void;
		/**
		 * This function has the same signature as the callback functions. When defined it is expected to return a `function` or `undefined`.

			The returned value is used as a comparator to determine the traversal order of any `object` keys.

			This works together with the `reverse` option.

			_Examples_:
			<details><summary> <code>['**']</code> <em>(simple sort)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, c: 1, b: 2 };
			objectScan(['**'], {
			joined: true,
			compareFn: () => (k1, k2) => k1.localeCompare(k2),
			reverse: false
			})(haystack);
			// => [ 'a', 'b', 'c' ]
			```
		 */
		compareFn?: (context: C) => (k1: string, k2: string) => boolean;
		/**
		 * When set to `true`, the scan is performed in reverse order. This means `breakFn` is executed in _reverse post-order_ and
			`filterFn` in _reverse pre-order_. Otherwise `breakFn` is executed in _pre-order_ and `filterFn` in _post-order_.

			When `reverse` is `true` the scan is _delete-safe_. I.e. `property` can be deleted / spliced from `parent` object / array in `filterFn`.

			_Examples_:
			<details><summary> <code>['**']</code> <em>(breakFn, reverse true)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { f: { b: { a: {}, d: { c: {}, e: {} } }, g: { i: { h: {} } } } };
			objectScan(['**'], {
			breakFn: ({ isMatch, property, context }) => { if (isMatch) { context.push(property); } },
			reverse: true
			})(haystack, []);
			// => [ 'f', 'g', 'i', 'h', 'b', 'd', 'e', 'c', 'a' ]
			```
			</details>
			<details><summary> <code>['**']</code> <em>(filterFn, reverse true)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { f: { b: { a: {}, d: { c: {}, e: {} } }, g: { i: { h: {} } } } };
			objectScan(['**'], {
			filterFn: ({ property, context }) => { context.push(property); },
			reverse: true
			})(haystack, []);
			// => [ 'h', 'i', 'g', 'e', 'c', 'd', 'a', 'b', 'f' ]
			```
			</details>
			<details><summary> <code>['**']</code> <em>(breakFn, reverse false)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { f: { b: { a: {}, d: { c: {}, e: {} } }, g: { i: { h: {} } } } };
			objectScan(['**'], {
			breakFn: ({ isMatch, property, context }) => { if (isMatch) { context.push(property); } },
			reverse: false
			})(haystack, []);
			// => [ 'f', 'b', 'a', 'd', 'c', 'e', 'g', 'i', 'h' ]
			```
			</details>
			<details><summary> <code>['**']</code> <em>(filterFn, reverse false)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { f: { b: { a: {}, d: { c: {}, e: {} } }, g: { i: { h: {} } } } };
			objectScan(['**'], {
			filterFn: ({ property, context }) => { context.push(property); },
			reverse: false
			})(haystack, []);
			// => [ 'a', 'c', 'e', 'd', 'b', 'h', 'i', 'g', 'f' ]
			```
			</details>
		 */
		reverse?: boolean;
		/**
		 * When set to `false`, all targeted keys are traversed and matched
			in the order determined by the `compareFn` and `reverse` option.

			When set to `true`, all targeted keys are traversed and matched
			in the order determined by the corresponding needles,
			falling back to the above ordering.

			Note that this option is constraint by the depth-first search approach.

			_Examples_:
			<details><summary> <code>['c', 'a', 'b']</code> <em>(order by needle)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: 1, c: 1 };
			objectScan(['c', 'a', 'b'], {
			joined: true,
			orderByNeedles: true
			})(haystack);
			// => [ 'c', 'a', 'b' ]
			```
			</details>
			<details><summary> <code>['b', '*']</code> <em>(fallback reverse)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: 1, c: 1 };
			objectScan(['b', '*'], {
			joined: true,
			reverse: true,
			orderByNeedles: true
			})(haystack);
			// => [ 'b', 'c', 'a' ]
			```
			</details>
			<details><summary> <code>['b', '*']</code> <em>(fallback not reverse)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: 1, c: 1 };
			objectScan(['b', '*'], {
			joined: true,
			reverse: false,
			orderByNeedles: true
			})(haystack);
			// => [ 'b', 'a', 'c' ]
			```
			</details>
			<details><summary> <code>['a', 'b.c', 'd']</code> <em>(nested match)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: { c: 1 }, d: 2 };
			objectScan(['a', 'b.c', 'd'], {
			joined: true,
			orderByNeedles: true
			})(haystack);
			// => [ 'a', 'b.c', 'd' ]
			```
			</details>
			<details><summary> <code>['b', 'a', 'b.c', 'd']</code> <em>(matches traverse first)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: { c: 1 }, d: 2 };
			objectScan(['b', 'a', 'b.c', 'd'], {
			joined: true,
			orderByNeedles: true
			})(haystack);
			// => [ 'b.c', 'b', 'a', 'd' ]
			```
			</details>
		 */
		orderByNeedles?: boolean;
		/**
		 * When set to `true` the scan immediately returns after the first match.

			_Examples_:
			<details><summary> <code>['a', 'b']</code> <em>(only return first property)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = { a: 0, b: 1 };
			objectScan(['a', 'b'], {
			rtn: 'property',
			abort: true
			})(haystack);
			// => 'b'
			```
			</details>
			<details><summary> <code>['[0]', '[1]']</code> <em>(abort changes count)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = ['a', 'b'];
			objectScan(['[0]', '[1]'], {
			rtn: 'count',
			abort: true
			})(haystack);
			// => 1
			```
		 */
		abort?: boolean;
		/**
		 * When set to `false`, no array selectors should be used in any needles and arrays are automatically traversed.

			Note that the results still include the array selectors.

			_Examples_:
			<details><summary> <code>['a', 'b.d']</code> <em>(automatic array traversal)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [{ a: 0 }, { b: [{ c: 1 }, { d: 2 }] }];
			objectScan(['a', 'b.d'], {
			joined: true,
			useArraySelector: false
			})(haystack);
			// => [ '[1].b[1].d', '[0].a' ]
			```
			</details>
			<details><summary> <code>['']</code> <em>(top level array matching)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [{ a: 0 }, { b: 1 }];
			objectScan([''], {
			joined: true,
			useArraySelector: false
			})(haystack);
			// => [ '[1]', '[0]' ]
			```
			</details>
		 */
		useArraySelector?: boolean;
		/**
		 * When set to `true`, errors are thrown when:
			- a path is identical to a previous path
			- a path invalidates a previous path
			- a path contains consecutive recursions

			_Examples_:
			<details><summary> <code>['a.b', 'a.b']</code> <em>(identical)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [];
			objectScan(['a.b', 'a.b'], { joined: true })(haystack);
			// => 'Error: Redundant Needle Target: "a.b" vs "a.b"'
			```
			</details>
			<details><summary> <code>['a.{b,b}']</code> <em>(identical, same needle)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [];
			objectScan(['a.{b,b}'], { joined: true })(haystack);
			// => 'Error: Redundant Needle Target: "a.{b,b}" vs "a.{b,b}"'
			```
			</details>
			<details><summary> <code>['a.b', 'a.**']</code> <em>(invalidates previous)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [];
			objectScan(['a.b', 'a.**'], { joined: true })(haystack);
			// => 'Error: Needle Target Invalidated: "a.b" by "a.**"'
			```
			</details>
			<details><summary> <code>['**.!**']</code> <em>(consecutive recursion)</em> </summary>

			<!-- eslint-disable no-undef -->
			```js
			const haystack = [];
			objectScan(['**.!**'], { joined: true })(haystack);
			// => 'Error: Redundant Recursion: "**.!**"'
			```
			</details>
		 */
		strict?: boolean;
	}

	interface OptionsJoined extends Options<ContextJoined> {
		joined: true;
	}

	interface OptionsUnjoined extends Options<ContextUnjoined> {
		joined: false;
	}

	interface SearchContext {
		[x: string | number | symbol]: any;
	}

	interface ContextJoined<K extends string | number | symbol = string, V = any> extends Context<K, V> {
		key: K[];
	}

	interface ContextUnjoined<K extends string | number | symbol = string, V = any> extends Context<K, V> {
		key: K;
	}

	type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
	type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
}

declare module 'object-scan' {
	const _: <
		K extends string | number | symbol = string,
		V = any,
		O extends ObjectScan.Options = ObjectScan.OptionsJoined | ObjectScan.OptionsUnjoined,
		R extends ObjectScan.NonFunctionPropertyNames<ObjectScan.Context> | 'bool' | 'count',
		C extends (O extends ObjectScan.OptionsJoined ? ObjectScan.ContextJoined : ObjectScan.ContextUnjoined)
	>(
		matcher: string[],
		options?: O & {
			/**
			 * Defaults to `key` when search context is _undefined_ and to `context` otherwise.

				Can be explicitly set as a `string`:
				- `context`: search context is returned
				- `key`: as passed into `filterFn`
				- `value`: as passed into `filterFn`
				- `entry`: as passed into `filterFn`
				- `property`: as passed into `filterFn`
				- `gproperty`: as passed into `filterFn`
				- `parent`: as passed into `filterFn`
				- `gparent`: as passed into `filterFn`
				- `parents`: as passed into `filterFn`
				- `isMatch`: as passed into `filterFn`
				- `matchedBy`: as passed into `filterFn`
				- `excludedBy`: as passed into `filterFn`
				- `traversedBy`: as passed into `filterFn`
				- `isCircular`: as passed into `filterFn`
				- `isLeaf`: as passed into `filterFn`
				- `depth`: as passed into `filterFn`
				- `bool`: returns _true_ iff a match is found
				- `count`: returns the match count

				Or, when set as an `array`, can contain any of the above except `context`, `bool` and `count`.


				When **abort** is set to `true` and the result would be a list, the first match or _undefined_ is returned.

				_Examples_:
				<details><summary> <code>['[*]']</code> <em>(return values)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = ['a', 'b', 'c'];
				objectScan(['[*]'], { rtn: 'value' })(haystack);
				// => [ 'c', 'b', 'a' ]
				```
				</details>
				<details><summary> <code>['foo[*]']</code> <em>(return entries)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { foo: ['bar'] };
				objectScan(['foo[*]'], { rtn: 'entry' })(haystack);
				// => [ [ [ 'foo', 0 ], 'bar' ] ]
				```
				</details>
				<details><summary> <code>['a.b.c', 'a']</code> <em>(return properties)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { a: { b: { c: 0 } } };
				objectScan(['a.b.c', 'a'], { rtn: 'property' })(haystack);
				// => [ 'c', 'a' ]
				```
				</details>
				<details><summary> <code>['a.b', 'a.c']</code> <em>(checks for any match, full scan)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { a: { b: 0, c: 1 } };
				objectScan(['a.b', 'a.c'], { rtn: 'bool' })(haystack);
				// => true
				```
				</details>
				<details><summary> <code>['**']</code> <em>(return not provided context)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { a: 0 };
				objectScan(['**'], { rtn: 'context' })(haystack);
				// => undefined
				```
				</details>
				<details><summary> <code>['a.b.{c,d}']</code> <em>(return keys with context passed)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { a: { b: { c: 0, d: 1 } } };
				objectScan(['a.b.{c,d}'], { rtn: 'key' })(haystack, []);
				// => [ [ 'a', 'b', 'd' ], [ 'a', 'b', 'c' ] ]
				```
				</details>
				<details><summary> <code>['a.b.{c,d}']</code> <em>(return custom array)</em> </summary>

				<!-- eslint-disable no-undef -->
				```js
				const haystack = { a: { b: { c: 0, d: 1 } } };
				objectScan(['a.b.{c,d}'], { rtn: ['property', 'value'] })(haystack, []);
				// => [ [ 'd', 1 ], [ 'c', 0 ] ]
				```
				</details>
			*/
			rtn?: R,
		},
	) => (
		haystack: Record<K, V>,
		searchContext?: ObjectScan.SearchContext,
	) => R extends 'bool'
		? boolean
		: R extends 'count'
			? number
			: R extends keyof C
				? C[R]
				: string;

	export default _;
}