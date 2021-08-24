import { ClientError } from './client.error.js';

class IllegalInvocationError extends ClientError {
    constructor(message) {
        super(`Method was invoked illegally${message ? `: ${message}` : ''}`);
    }
}

export { IllegalInvocationError };
//# sourceMappingURL=illegalInvocation.error.js.map
