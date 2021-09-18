"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalArgumentError = void 0;
const client_error_js_1 = require("./client.error.js");
class IllegalArgumentError extends client_error_js_1.ClientError {
    constructor(message, paramName) {
        super(`Illegal argument${paramName ? ` (caused by ${paramName})` : ''}${message ? `: ${message}` : ''}`);
    }
}
exports.IllegalArgumentError = IllegalArgumentError;
//# sourceMappingURL=illegalArgument.error.js.map