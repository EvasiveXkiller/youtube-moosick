import { ClientError } from './client.error.js';

class IllegalTypeError extends ClientError {
    constructor(message) {
        super(`Illegal Type${message ? `: ${message}` : ''}`);
    }
}

export { IllegalTypeError };
//# sourceMappingURL=illegalType.error.js.map
