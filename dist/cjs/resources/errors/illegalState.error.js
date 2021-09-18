"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalStateError = void 0;
const client_error_js_1 = require("./client.error.js");
class IllegalStateError extends client_error_js_1.ClientError {
    constructor(message) {
        super(`Illegal state${message ? `: ${message}` : ''}`);
    }
}
exports.IllegalStateError = IllegalStateError;
//# sourceMappingURL=illegalState.error.js.map