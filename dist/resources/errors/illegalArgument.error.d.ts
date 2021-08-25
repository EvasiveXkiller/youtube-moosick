import { ClientError } from './client.error.js';
export declare class IllegalArgumentError extends ClientError {
    constructor(message: string, paramName?: string);
}
