"use strict";
/*
    eslint-disable
        @typescript-eslint/no-unsafe-return,
        @typescript-eslint/no-unsafe-member-access,
        @typescript-eslint/no-unsafe-assignment,
*/
// stolen wholesale from https://stackoverflow.com/a/61863345
Object.defineProperty(exports, "__esModule", { value: true });
exports.unenumerable = exports.enumerable = void 0;
function enumerable(target, name, desc) {
    if (desc) {
        desc.enumerable = true;
        return desc;
    }
    Object.defineProperty(target, name, {
        set(value) {
            Object.defineProperty(this, name, {
                value,
                enumerable: true,
                writable: true,
                configurable: true,
            });
        },
        enumerable: true,
        configurable: true,
    });
}
exports.enumerable = enumerable;
function unenumerable(target, name, desc) {
    if (desc) {
        desc.enumerable = false;
        return desc;
    }
    Object.defineProperty(target, name, {
        set(value) {
            Object.defineProperty(this, name, {
                value,
                writable: true,
                configurable: true,
            });
        },
        configurable: true,
    });
}
exports.unenumerable = unenumerable;
//# sourceMappingURL=enumerable.decorator.js.map