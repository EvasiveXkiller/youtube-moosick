import { Factory } from '../../blocks/item.js';
import { ContinuableResult } from './continuableResult.js';
/**
 * @internal
 */
export class UnsortedFactory extends Factory {
    constructor() {
        super(Unsorted);
    }
}
export class Unsorted extends Array {
}
export class ContinuableUnsorted extends ContinuableResult {
}
//# sourceMappingURL=unsorted.js.map