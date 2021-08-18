import { ClientError } from './client.error.js';

export class IllegalStateError extends ClientError {
	constructor(message: string) {
		super(`Illegal state${message ? `: ${message}` : ''}`);
	}
}
