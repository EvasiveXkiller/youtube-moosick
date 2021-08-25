import { ClientError } from './client.error.js';
export class IllegalInvocationError extends ClientError {
    constructor(message) {
        super(`Method was invoked illegally${message ? `: ${message}` : ''}`);
    }
}
//# sourceMappingURL=illegalInvocation.error.js.map