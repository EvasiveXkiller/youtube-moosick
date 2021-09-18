"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.set = void 0;
const contextToKeyValueMap = new Map();
/**
 * Adds a callback to when a property is set.
 * @param onSet Called when a property is set. Returns the value to be set by the setter.
 */
function set(onSet) {
    return function (target, name) {
        const desc = Object.getOwnPropertyDescriptor(target, name)
            ?? {
                configurable: true,
            };
        if (desc.set) {
            const { set: setter } = desc;
            desc.set = function (v) {
                // console.log('set1');
                setter.call(this, onSet.call(this, v));
            };
        }
        else {
            let { value } = desc;
            const consumeValue = () => {
                if (value) {
                    const v = value;
                    value = undefined;
                    return v;
                }
            };
            desc.set = function (v) {
                // console.log('set2');
                // console.log({ value, v });
                let keyValueMap = contextToKeyValueMap.get(this);
                if (keyValueMap == null) {
                    contextToKeyValueMap.set(this, keyValueMap = {});
                }
                keyValueMap[name] = onSet.call(this, v);
            };
            if (!desc.get) {
                desc.get = function () {
                    // console.log('set\'s get');
                    const v = contextToKeyValueMap.get(this)?.[name];
                    const initialV = consumeValue();
                    return v ?? initialV;
                };
            }
        }
        Object.defineProperty(target, name, desc);
    };
}
exports.set = set;
/**
 * Adds a callback to when a property is get.
 * @param onGet Called when a property is get. Returns the value to be gotten by the getter.
 */
function get(onGet) {
    return function (target, name) {
        const desc = Object.getOwnPropertyDescriptor(target, name)
            ?? {
                configurable: true,
            };
        if (desc.get) {
            const { get: getter } = desc;
            desc.get = function () {
                // console.log('get1');
                return onGet.call(this, getter.call(this));
            };
        }
        else {
            let { value } = desc;
            const consumeValue = () => {
                if (value) {
                    const v = value;
                    value = undefined;
                    return v;
                }
            };
            desc.get = function () {
                // console.log('get2');
                const v = contextToKeyValueMap.get(this)?.[name];
                const initialV = consumeValue();
                return onGet.call(this, v ?? initialV);
            };
            if (!desc.set) {
                desc.set = function (v) {
                    // console.log('get\'s set');
                    let keyValueMap = contextToKeyValueMap.get(this);
                    if (keyValueMap == null) {
                        contextToKeyValueMap.set(this, keyValueMap = {});
                    }
                    keyValueMap[name] = v;
                };
            }
        }
        Object.defineProperty(target, name, desc);
    };
}
exports.get = get;
//# sourceMappingURL=setget.decorator.js.map