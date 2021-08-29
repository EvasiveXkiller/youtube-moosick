import { ClientError } from './client.error.js';
export class AssertionError extends ClientError {
    constructor(message, item1, item2) {
        super(`Assertion was false${message ? `: ${message}` : ''}`);
        if (item1 !== undefined
            || item2 !== undefined) {
            console.error(item1, 'vs', item2);
        }
    }
}
//# sourceMappingURL=assertion.error.js.map