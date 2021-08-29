import { ClientError } from './client.error.js';
export class IllegalArgumentError extends ClientError {
    constructor(message, paramName) {
        super(`Illegal argument${paramName ? ` (caused by ${paramName})` : ''}${message ? `: ${message}` : ''}`);
    }
}
//# sourceMappingURL=illegalArgument.error.js.map