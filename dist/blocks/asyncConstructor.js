import { IllegalInvocationError } from '../resources/errors/index.js';
export class AsyncConstructor {
    static isBeingInstantiated = false;
    constructor() {
        if (!this.constructor.isBeingInstantiated) {
            throw new IllegalInvocationError('Constructor was called directly. (Use "await [class].new()" instead)');
        }
        this.constructor.isBeingInstantiated = false;
    }
    static async new(..._args) {
        this.brace();
        return undefined;
    }
    static brace() {
        this.isBeingInstantiated = true;
    }
}
//# sourceMappingURL=asyncConstructor.js.map