"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinuableUnsorted = exports.Unsorted = exports.UnsortedFactory = void 0;
const item_js_1 = require("../../blocks/item.js");
const continuableResult_js_1 = require("./continuableResult.js");
/**
 * @internal
 */
class UnsortedFactory extends item_js_1.Factory {
    constructor() {
        super(Unsorted);
    }
}
exports.UnsortedFactory = UnsortedFactory;
class Unsorted extends Array {
}
exports.Unsorted = Unsorted;
class ContinuableUnsorted extends continuableResult_js_1.ContinuableResult {
}
exports.ContinuableUnsorted = ContinuableUnsorted;
//# sourceMappingURL=unsorted.js.map