"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncConstructor = void 0;
const index_js_1 = require("../resources/errors/index.js");
class AsyncConstructor {
    static isBeingInstantiated = false;
    constructor() {
        if (!this.constructor.isBeingInstantiated) {
            throw new index_js_1.IllegalInvocationError('Constructor was called directly. (Use "await [class].new()" instead)');
        }
        this.constructor.isBeingInstantiated = false;
    }
    static async new(..._args) {
        this.brace();
        return undefined;
    }
    static brace() {
        this.isBeingInstantiated = true;
    }
}
exports.AsyncConstructor = AsyncConstructor;
//# sourceMappingURL=asyncConstructor.js.map