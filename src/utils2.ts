export function $<T = unknown>(
	obj: Record<string | number | symbol, any>,
): (property: string) => T {
	// TODO: return a func to find first prop value, like JQuery
}

export function $$<T = unknown>(
	obj: Record<string | number | symbol, any>,
): (property: string) => T[] {
	// TODO: return a func to find all prop values, like JQuery
}
