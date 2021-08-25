import { WalkUtility } from '../resources/utilities/index.js';

type IfEquals<X, Y, A, B> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B;
type WritableProps<T> = Pick<T, {
	[P in keyof T]: IfEquals<
	{ [Q in P]: T[P] },
	{ -readonly [Q in P]: T[P] },
	P,
	never
	>
}[keyof T]>;
export type ItemOptions<T extends abstract new (...args: any[]) => any> = {
	[Q in keyof WritableProps<InstanceType<T>>]: InstanceType<T>[Q]
};

export class Item {
	/** @deprecated You're probably looking for `Item.from()` */
	constructor() {}

	public static from<T extends typeof Item>(
		this: T,
		// use this adapter type instead of just `InstanceType<T>`
		// to hide protected types & `toString`
		options: ItemOptions<T>,
	): InstanceType<T> {
		const instance = new this();

		WalkUtility.mirror(options, instance);

		return instance as InstanceType<T>;
	}
}

export abstract class Factory<T extends Item> {
	public abstract create(): T | Promise<T>;
}
