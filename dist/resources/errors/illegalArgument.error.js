import { ClientError } from './client.error.js';

class IllegalArgumentError extends ClientError {
    constructor(message, paramName) {
        super(`Illegal argument${paramName ? ` (caused by ${paramName})` : ''}${message ? `: ${message}` : ''}`);
    }
}

export { IllegalArgumentError };
//# sourceMappingURL=illegalArgument.error.js.map
