import { ClientError } from './client.error.js';

export class IllegalInvocationError extends ClientError {
	constructor(message: string) {
		super(`Method was invoked illegally${message ? `: ${message}` : ''}`);
	}
}
