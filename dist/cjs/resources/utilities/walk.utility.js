"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalkUtility = exports.EitherShape = exports.Shape = void 0;
const index_js_1 = require("../errors/index.js");
class Shape {
}
exports.Shape = Shape;
class EitherShape extends Shape {
    shapes;
    constructor(shapes) {
        super();
        this.shapes = shapes;
    }
}
exports.EitherShape = EitherShape;
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
    static walkAndAssertShape(obj1, obj2, path = '.') {
        if (obj2 instanceof EitherShape) {
            const shape = obj2.shapes.find((shape) => shape !== null
                && typeof shape === 'object'
                && shape.constructor
                ? obj1 instanceof shape.constructor
                : typeof obj1 === typeof shape);
            if (shape == null && !obj2.shapes.includes(shape)) {
                throw new index_js_1.AssertionError(`Value in "${path}" is not one of shape "${obj2.shapes.map((shape) => shape !== null
                    && typeof shape === 'object'
                    && shape.constructor?.name
                    ? shape.constructor.name
                    : typeof shape).join(' | ')}"`, obj1, obj2);
            }
            this.walkAndAssertShape(obj1, shape, path);
            return true;
        }
        // skip into objects inside array, as lengths may be different
        if (obj1 instanceof Array) {
            if (!(obj2 instanceof Array)) {
                throw new index_js_1.AssertionError(`Value in "${path}" is of different shape`, obj1, obj2);
            }
            obj1.forEach((obj1Part, i) => {
                this.walkAndAssertShape(obj1Part, obj2[0], `${path}[${i}]`);
            });
            return true;
        }
        // is leaf node
        if (obj1 === null
            || typeof obj1 !== 'object'
            || obj2 === null
            || typeof obj2 !== 'object') {
            if (typeof obj1 !== typeof obj2) {
                throw new index_js_1.AssertionError(`Value in "${path}" is of different shape`, obj1, obj2);
            }
            return true;
        }
        for (const key in obj1) {
            if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
                continue;
            }
            this.walkAndAssertShape(obj1[key], obj2[key], `${path}.${key}`);
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
exports.WalkUtility = WalkUtility;
//# sourceMappingURL=walk.utility.js.map