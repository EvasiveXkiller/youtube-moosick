export class ClientError extends Error {
    constructor(message = 'No message provided, an error with errors?') {
        super(message);
        this.name = this.constructor.name;
        // eslint is drunk
        // eslint-disable-next-line
        Error.captureStackTrace?.(this, this.constructor);
    }
    static from(obj) {
        const clientError = new this();
        clientError.name = obj.name;
        clientError.message = obj.message;
        clientError.stack = obj.stack;
        return clientError;
    }
    toPlainObject() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
        };
    }
}
//# sourceMappingURL=client.error.js.map