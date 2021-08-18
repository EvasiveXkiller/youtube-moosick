import { ClientError } from './client.error.js';

class IllegalStateError extends ClientError {
    constructor(message) {
        super(`Illegal state${message ? `: ${message}` : ''}`);
    }
}

export { IllegalStateError };
//# sourceMappingURL=illegalState.error.js.map
