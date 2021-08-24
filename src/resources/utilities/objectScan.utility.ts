import objectScan from 'object-scan';
import { keys } from 'ts-transformer-keys';

/**
 * @param obj An object to perform the query on
 * @returns Either the result of the query, or an array of results from the query depending on the factory function
 */
type $Item<T = unknown> = {
	[x in ObjectScan.Rtn]: $Item;
} & ((obj: Record<string | number | symbol, any>) => T);

export class ObjectScanUtility {
	/**
	 * Queries an object using a selector & returns the first result
	 * @param selector A CSS selector string (excluding `+` & `~`)
	 * @param reverse Defaults to `false`. Whether to reverse the query order
	 * @returns A function that when called with an object, will perform the search with said object, returning the first result
	 */
	public static $<T = unknown>(
		selector: string,
		reverse?: boolean,
	) {
		return this.#$<T>(selector, true, reverse);
	}

	/**
	 * Queries an object using a selector & returns an array of results
	 * @param selector A CSS selector string (excluding `+` & `~`)
	 * @param reverse Defaults to `false`. Whether to reverse the query order
	 * @returns A function that when called with an object, will perform the search with said object, returning an array of results
	 */
	public static $$<T extends any[] = unknown[]>(
		selector: string,
		reverse?: boolean,
	) {
		return this.#$<T>(selector, false, reverse);
	}

	static #$<T = unknown>(
		selector: string,
		abort: boolean,
		reverse = false,
	) {
		const possibleRtns = keys<{
			[x in ObjectScan.Rtn]: never;
		}>();

		let rtn: ObjectScan.Rtn = 'value';

		const result = (obj: Record<string | number | symbol, any>) => objectScan(
			this.adaptCSSSelector(selector),
			{
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				get rtn() {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					return rtn;
				},
				abort,
				reverse,
			},
		)(obj) as ReturnType<$Item<T>>;

		possibleRtns.forEach((possibleRtn) => {
			Object.defineProperty(result, possibleRtn, {
				get() {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					rtn = possibleRtn;

					return result;
				},
			});
		});

		return result as $Item<T>;
	}

	private static adaptCSSSelector(cssSelector: string) {
		// doesn't support + or ~ selectors
		return cssSelector
			.split(',')
			.map((cssSelectorPart) => {
				let result = cssSelectorPart;

				// remove space around selector
				result = result.trim();
				// remove css child selector
				result = result.replace(/\s*>\s*(?=\W)\.?/gm, '.');

				// replace spaces
				result = result.replace(
					/ +?(?=\W)\.?/gm,
					'.**.',
				);
				// specify level at where search starts
				result = result.startsWith(':root')
					? result.replace(/:root\.?/, '')
					: '**' + result;

				return result;
			});
	}
}

export const {
	$,
	$$,
} = ObjectScanUtility;
