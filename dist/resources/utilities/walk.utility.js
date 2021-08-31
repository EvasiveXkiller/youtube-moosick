import { AssertionError } from '../errors/index.js';
export class Shape {
}
export class EitherShape extends Shape {
    shapes;
    constructor(shapes) {
        super();
        this.shapes = shapes;
    }
}
/*
    eslint-disable
        @typescript-eslint/no-unsafe-assignment,
        @typescript-eslint/no-unsafe-return,
        @typescript-eslint/no-unsafe-member-access
*/
export class WalkUtility {
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
    // TODO: separate this into another utility
    static walkAndCompare(obj1, obj2, comparator) {
        for (const key in obj1) {
            if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
                continue;
            }
            // is leaf node
            if (obj1[key] === null || typeof obj1[key] !== 'object') {
                if (!comparator(obj1[key], obj2[key], key)) {
                    return false;
                }
                continue;
            }
            // if false return false, else continue onto next loop iteration
            if (!this.walkAndCompare(obj1[key], obj2[key], comparator)) {
                return false;
            }
        }
        return true;
    }
    static walkAndAssertShape(obj1, obj2, key = '(root)') {
        // skip into objects inside array, as lengths may be different
        if (obj1 instanceof Array) {
            if (!(obj2 instanceof Array)) {
                throw new AssertionError(`Value in "${key}" is of different shape`, obj1, obj2);
            }
            obj1.forEach((obj1Part) => {
                this.walkAndAssertShape(obj1Part, obj2[0], `${key}[(index)]`);
            });
            return true;
        }
        // is leaf node
        if (obj1 === null
            || typeof obj1 !== 'object'
            || obj2 === null
            || typeof obj2 !== 'object') {
            if (obj2 instanceof EitherShape) {
                if (!obj2.shapes.some((shape) => typeof obj1 === typeof shape)) {
                    throw new AssertionError(`Value in "${key}" is not one of shape "${obj2.shapes.map((shape) => typeof shape).join(' | ')}"`, obj1, obj2);
                }
                return true;
            }
            if (typeof obj1 !== typeof obj2) {
                throw new AssertionError(`Value in "${key}" is of different shape`, obj1, obj2);
            }
            return true;
        }
        for (const key in obj1) {
            if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
                continue;
            }
            this.walkAndAssertShape(obj1[key], obj2[key], key);
        }
        return true;
    }
    static walkAndCompareShape(obj1, obj2) {
        try {
            return this.walkAndAssertShape(obj1, obj2);
        }
        catch (_) {
            return false;
        }
    }
}
//# sourceMappingURL=walk.utility.js.map