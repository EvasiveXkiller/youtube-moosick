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
}
