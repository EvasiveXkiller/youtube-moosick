import { ClientError } from './client.error.js';

class IllegalCategoryError extends ClientError {
    constructor(message) {
        super(`Illegal Type${message ? `: ${message}` : ''}`);
    }
}

export { IllegalCategoryError };
//# sourceMappingURL=illegalCategory.error.js.map
