/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function frozen(target: any, _: string): void {
	Object.freeze(target);
	Object.freeze(target.prototype);
}
