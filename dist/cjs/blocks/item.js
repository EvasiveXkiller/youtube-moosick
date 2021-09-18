"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = exports.Item = void 0;
const index_js_1 = require("../resources/utilities/index.js");
class Item {
    /**
     * @internal
     * @deprecated You're probably looking for `Item.from()`
     */
    constructor() { }
    static from(
    // use this adapter type instead of just `InstanceType<T>`
    // to hide protected types & `toString`
    options) {
        const instance = new this();
        index_js_1.WalkUtility.mirror(options, instance);
        return instance;
    }
}
exports.Item = Item;
class Factory {
    item;
    constructor(item) {
        this.item = item;
    }
    create(options) {
        const instance = new this.item();
        index_js_1.WalkUtility.mirror(options, instance);
        return instance;
    }
}
exports.Factory = Factory;
//# sourceMappingURL=item.js.map