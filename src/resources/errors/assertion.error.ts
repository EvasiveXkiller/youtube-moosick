import { ClientError } from './client.error.js';

export class AssertionError extends ClientError {
	constructor(message?: string, item1?: any, item2?: any) {
		super(`Assertion was false${message ? `: ${message}` : ''}`);

		if (item1 !== undefined
			|| item2 !== undefined) {
			console.error(item1, 'vs', item2);
		}
	}
}
