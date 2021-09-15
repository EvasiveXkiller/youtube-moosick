/**
 * @param obj An object to perform the query on
 * @returns Either the result of the query, or an array of results from the query depending on the factory function
 */
declare type $Item<T = unknown> = {
    [x in ObjectScan.Rtn]: $Item;
} & ((obj: Record<string | number | symbol, any>) => T);
export declare class ObjectScanUtility {
    /**
     * Queries an object using a selector & returns the first result
     * @param selector A CSS selector string (excluding `+` & `~`)
     * @param reverse Defaults to `false`. Whether to reverse the query order
     * @returns A function that when called with an object, will perform the search with said object, returning the first result
     */
    static $<T = unknown>(selector: string, reverse?: boolean): $Item<T>;
    /**
     * Queries an object using a selector & returns an array of results
     * @param selector A CSS selector string (excluding `+` & `~`)
     * @param reverse Defaults to `false`. Whether to reverse the query order
     * @returns A function that when called with an object, will perform the search with said object, returning an array of results
     */
    static $$<T extends any[] = unknown[]>(selector: string, reverse?: boolean): $Item<T>;
    private static create$;
    private static adaptCSSSelector;
}
export declare const $: typeof ObjectScanUtility.$, $$: typeof ObjectScanUtility.$$;
export {};
//# sourceMappingURL=objectScan.utility.d.ts.map