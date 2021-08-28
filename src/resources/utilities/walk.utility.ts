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

	public static walkAndCompareShape<
		T1 extends Record<string, any>,
		T2 extends Record<string, any>,
	>(
		obj1: T1,
		obj2: T2,
	): boolean {
		for (const key in obj1) {
			if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
				continue;
			}

			// skip into objects inside array, as lengths may be different
			if (obj1?.[key] as any instanceof Array) {
				if (!(obj2[key] as any instanceof Array)) {
					return false;
				}

				if (!this.walkAndCompareShape(obj1[key][0], obj2[key]?.[0])) {
					return false;
				}

				continue;
			}

			// is leaf node
			if (obj1[key] === null
				|| typeof obj1[key] !== 'object'
				|| obj2[key] === null
				|| typeof obj2[key] !== 'object') {
				if (typeof obj1[key] !== typeof obj2[key]) {
					return false;
				}

				continue;
			}

			// if false return false, else continue onto next loop iteration
			if (!this.walkAndCompareShape(obj1[key], obj2[key])) {
				return false;
			}
		}

		return true;
	}
}
