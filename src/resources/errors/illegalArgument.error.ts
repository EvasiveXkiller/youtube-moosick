import { ClientError } from './client.error.js';

export class IllegalArgumentError extends ClientError {
	constructor(message: string, paramName?: string) {
		super(`Illegal argument${paramName ? ` (caused by ${paramName})` : ''}${message ? `: ${message}` : ''}`);
	}
}
