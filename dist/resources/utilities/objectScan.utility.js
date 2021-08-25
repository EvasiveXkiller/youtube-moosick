import lib from '../../node_modules/object-scan/lib/index.js';

class ObjectScanUtility {
    /**
     * Queries an object using a selector & returns the first result
     * @param selector A CSS selector string (excluding `+` & `~`)
     * @param reverse Defaults to `false`. Whether to reverse the query order
     * @returns A function that when called with an object, will perform the search with said object, returning the first result
     */
    static $(selector, reverse) {
        return this.#$(selector, true, reverse);
    }
    /**
     * Queries an object using a selector & returns an array of results
     * @param selector A CSS selector string (excluding `+` & `~`)
     * @param reverse Defaults to `false`. Whether to reverse the query order
     * @returns A function that when called with an object, will perform the search with said object, returning an array of results
     */
    static $$(selector, reverse) {
        return this.#$(selector, false, reverse);
    }
    static #$(selector, abort, reverse = false) {
        const possibleRtns = [];
        let rtn = 'value';
        const result = (obj) => lib(this.adaptCSSSelector(selector), {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            get rtn() {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return rtn;
            },
            abort,
            reverse,
        })(obj);
        possibleRtns.forEach((possibleRtn) => {
            Object.defineProperty(result, possibleRtn, {
                get() {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    rtn = possibleRtn;
                    return result;
                },
            });
        });
        return result;
    }
    static adaptCSSSelector(cssSelector) {
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
            result = result.replace(/ +?(?=\W)\.?/gm, '.**.');
            // specify level at where search starts
            result = result.startsWith(':root')
                ? result.replace(/:root\.?/, '')
                : '**' + result;
            return result;
        });
    }
}
const { $, $$, } = ObjectScanUtility;

export { $, $$, ObjectScanUtility };
//# sourceMappingURL=objectScan.utility.js.map
