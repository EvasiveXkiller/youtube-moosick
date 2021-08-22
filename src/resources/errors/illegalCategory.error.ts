import { ClientError } from './client.error.js';

export class IllegalTypeError extends ClientError {
	constructor(message: string) {
		super(`Illegal Type${message ? `: ${message}` : ''}`);
	}
}
