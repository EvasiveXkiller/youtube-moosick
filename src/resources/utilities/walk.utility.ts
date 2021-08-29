import { AssertionError } from '../errors/index.js';

export abstract class Shape {}

export class EitherShape extends Shape {
	constructor(public shapes: any[]) {
		super();
	}
}

/*
	eslint-disable
		@typescript-eslint/no-unsafe-assignment,
		@typescript-eslint/no-unsafe-return,
		@typescript-eslint/no-unsafe-member-access
*/
export class WalkUtility {
	public static walkAlongChildren<
		T,
	>(
		object: T,
		childKey: keyof T,
		callback: (object: T[typeof childKey]) => boolean,
	) {
		if (typeof object[childKey] !== 'object') {
			return;
		}

		const keys = Object.keys(object[childKey]);

		for (let i = 0, l = keys.length; i < l; ++i) {
			const key = keys[i];
			// @ts-expect-error obj[string]
			const value = object[childKey][key];

			if (callback(value)) {
				this.walkAlongChildren(value, childKey, callback);
			}
		}
	}

	public static walkAndReturnObject(object: any, callback: (object: any) => any) {
		if (typeof object !== 'object') {
			return callback(object);
		}

		const keys = Object.keys(object as Record<any, any>);
		const result: Record<string, any> = {};

		for (let i = 0, l = keys.length; i < l; ++i) {
			const key = keys[i];
			const value = object[key];

			result[key] = this.walkAndReturnObject(value, callback);
		}

		return result;
	}

	public static walkAndReturnVoid(object: any, callback: (objectPart: any) => void) {
		if (typeof object !== 'object') {
			callback(object);

			return;
		}

		const keys = Object.keys(object as Record<any, any>);

		for (let i = 0, l = keys.length; i < l; ++i) {
			const key = keys[i];
			const value = object[key];

			this.walkAndReturnObject(value, callback);
		}
	}

	public static mirror<T extends Record<string, any>>(from: T, to: T) {
		for (const key in from) {
			if (!Object.prototype.hasOwnProperty.call(from, key)) {
				continue;
			}

			const fromValue = from[key];

			if (fromValue === null
				|| typeof fromValue !== 'object') {
				to[key] = fromValue;

				continue;
			}

			if (to[key] === null
				|| typeof to[key] !== 'object') {
				// @ts-expect-error obj[string]
				to[key] = (fromValue as any[]).constructor === Array
					? []
					: (fromValue as Record<any, any>).constructor === Object
						? {}
						// not a POJO/POJA, just copy ref
						: fromValue;
			}

			this.mirror(fromValue, to[key]);
		}
	}

	// TODO: separate this into another utility
	public static walkAndCompare<
		T1 extends Record<string, any>,
		T2 extends Record<string, any>,
	>(
		obj1: T1,
		obj2: T2,
		comparator: (v1: T1[keyof T1], v2: T2[keyof T2], key: keyof T1) => boolean,
	): boolean {
		for (const key in obj1) {
			if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
				continue;
			}

			// is leaf node
			if (obj1[key] === null || typeof obj1[key] !== 'object') {
				if (!comparator(obj1[key], obj2[key], key)) {
					return false;
				}

				continue;
			}

			// if false return false, else continue onto next loop iteration
			if (!this.walkAndCompare(obj1[key], obj2[key], comparator)) {
				return false;
			}
		}

		return true;
	}

	public static walkAndAssertShape<
		T1 extends Record<string, any>,
		T2 extends T1,
	>(
		obj1: T1,
		obj2: T2,
		key = '(root)',
	): true | never {
		// skip into objects inside array, as lengths may be different
		if (obj1 as any instanceof Array) {
			if (!(obj2 as any instanceof Array)) {
				throw new AssertionError(`Value in "${key}" is of different shape`, obj1, obj2);
			}

			(obj1 as unknown as any[]).forEach((obj1Part) => {
				this.walkAndAssertShape(obj1Part, obj2[0], `${key}[(index)]`);
			});

			return true;
		}

		// is leaf node
		if (obj1 === null
			|| typeof obj1 !== 'object'
			|| obj2 === null
			|| typeof obj2 !== 'object') {
			if (obj2 instanceof EitherShape) {
				if (!obj2.shapes.some((shape) => typeof obj1 === typeof shape)) {
					throw new AssertionError(`Value in "${key}" is not one of shape "${
						obj2.shapes.map((shape) => typeof shape).join(' | ')
					}"`, obj1, obj2);
				}

				return true;
			}

			if (typeof obj1 !== typeof obj2) {
				throw new AssertionError(`Value in "${key}" is of different shape`, obj1, obj2);
			}

			return true;
		}

		for (const key in obj1) {
			if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
				continue;
			}

			this.walkAndAssertShape(obj1[key], obj2[key], key);
		}

		return true;
	}

	public static walkAndCompareShape<
		T1 extends Record<string, any>,
		T2 extends T1,
	>(
		obj1: T1,
		obj2: T2,
	): boolean {
		try {
			return this.walkAndAssertShape(obj1, obj2);
		} catch (_: unknown) {
			return false;
		}
	}
}
