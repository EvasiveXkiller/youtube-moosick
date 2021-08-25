export declare class ClientError extends Error {
    constructor(message?: string);
    static from<T extends ClientError>(obj: PlainErrorObject | Error): T;
    toPlainObject(): PlainErrorObject;
}
export interface PlainErrorObject {
    name: string;
    message: string;
    stack?: string;
}
