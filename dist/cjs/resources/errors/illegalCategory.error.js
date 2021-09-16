"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalCategoryError = void 0;
const client_error_js_1 = require("./client.error.js");
class IllegalCategoryError extends client_error_js_1.ClientError {
    constructor(message) {
        super(`Illegal Type${message ? `: ${message}` : ''}`);
    }
}
exports.IllegalCategoryError = IllegalCategoryError;
//# sourceMappingURL=illegalCategory.error.js.map