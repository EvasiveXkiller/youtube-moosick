/*
	eslint-disable
		@typescript-eslint/no-unsafe-return,
		@typescript-eslint/no-unsafe-member-access,
		@typescript-eslint/no-unsafe-assignment,
*/
// stolen wholesale from https://stackoverflow.com/a/61863345

export function enumerable(
	target: any,
	name: string
): void;
export function enumerable(
	target: any,
	name: string,
	desc: PropertyDescriptor
): PropertyDescriptor;
export function enumerable(target: any, name: string, desc?: any): any {
	if (desc) {
		desc.enumerable = true;

		return desc;
	}

	Object.defineProperty(target, name, {
		set(value) {
			Object.defineProperty(this, name, {
				value,
				enumerable: true,
				writable: true,
				configurable: true,
			});
		},
		enumerable: true,
		configurable: true,
	});
}

export function unenumerable(
	target: any,
	name: string
): void;
export function unenumerable(
	target: any,
	name: string,
	desc: PropertyDescriptor
): PropertyDescriptor;
export function unenumerable(target: any, name: string, desc?: any): any {
	if (desc) {
		desc.enumerable = false;

		return desc;
	}

	Object.defineProperty(target, name, {
		set(value) {
			Object.defineProperty(this, name, {
				value,
				writable: true,
				configurable: true,
			});
		},
		configurable: true,
	});
}
