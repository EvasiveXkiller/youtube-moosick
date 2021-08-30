import { ClientError } from './client.error.js';
export class IllegalCategoryError extends ClientError {
    constructor(message) {
        super(`Illegal Type${message ? `: ${message}` : ''}`);
    }
}
//# sourceMappingURL=illegalCategory.error.js.map