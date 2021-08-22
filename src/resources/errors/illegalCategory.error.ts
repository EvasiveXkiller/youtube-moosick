import { ClientError } from './client.error.js';

export class IllegalCategoryError extends ClientError {
	constructor(message: string) {
		super(`Illegal Type${message ? `: ${message}` : ''}`);
	}
}
