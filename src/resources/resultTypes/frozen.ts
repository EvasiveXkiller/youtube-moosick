/**
 * Freeze constructor and prototype.
 * @param target Target.
 */
export function frozen(target: Function): void {
	Object.freeze(target);
	Object.freeze(target.prototype);
}
