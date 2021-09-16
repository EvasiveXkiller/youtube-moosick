import { ClientError } from './client.error.js';
export class IllegalStateError extends ClientError {
    constructor(message) {
        super(`Illegal state${message ? `: ${message}` : ''}`);
    }
}
//# sourceMappingURL=illegalState.error.js.map