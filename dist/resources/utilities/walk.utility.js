/*
    eslint-disable
        @typescript-eslint/no-unsafe-assignment,
        @typescript-eslint/no-unsafe-return,
        @typescript-eslint/no-unsafe-member-access
*/
class WalkUtility {
    static walkAlongChildren(object, childKey, callback) {
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
    static walkAndReturnObject(object, callback) {
        if (typeof object !== 'object') {
            return callback(object);
        }
        const keys = Object.keys(object);
        const result = {};
        for (let i = 0, l = keys.length; i < l; ++i) {
            const key = keys[i];
            const value = object[key];
            result[key] = this.walkAndReturnObject(value, callback);
        }
        return result;
    }
    static walkAndReturnVoid(object, callback) {
        if (typeof object !== 'object') {
            callback(object);
            return;
        }
        const keys = Object.keys(object);
        for (let i = 0, l = keys.length; i < l; ++i) {
            const key = keys[i];
            const value = object[key];
            this.walkAndReturnObject(value, callback);
        }
    }
    static mirror(from, to) {
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
                to[key] = fromValue.constructor === Array
                    ? []
                    : fromValue.constructor === Object
                        ? {}
                        // not a POJO/POJA, just copy ref
                        : fromValue;
            }
            this.mirror(fromValue, to[key]);
        }
    }
}

export { WalkUtility };
//# sourceMappingURL=walk.utility.js.map
