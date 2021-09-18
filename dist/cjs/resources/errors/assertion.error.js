"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionError = void 0;
const client_error_js_1 = require("./client.error.js");
class AssertionError extends client_error_js_1.ClientError {
    item1;
    item2;
    constructor(message, item1, item2) {
        super(`Assertion was false${message ? `: ${message}` : ''}`);
        this.item1 = item1;
        this.item2 = item2;
        if (item1 !== undefined
            || item2 !== undefined) {
            console.error(item1, 'vs', item2);
        }
    }
}
exports.AssertionError = AssertionError;
//# sourceMappingURL=assertion.error.js.map