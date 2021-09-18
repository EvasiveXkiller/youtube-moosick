"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalInvocationError = void 0;
const client_error_js_1 = require("./client.error.js");
class IllegalInvocationError extends client_error_js_1.ClientError {
    constructor(message) {
        super(`Method was invoked illegally${message ? `: ${message}` : ''}`);
    }
}
exports.IllegalInvocationError = IllegalInvocationError;
//# sourceMappingURL=illegalInvocation.error.js.map