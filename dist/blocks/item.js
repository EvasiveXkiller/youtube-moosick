import { WalkUtility } from '../resources/utilities/index.js';
export class Item {
    /** @deprecated You're probably looking for `Item.from()` */
    constructor() { }
    static from(
    // use this adapter type instead of just `InstanceType<T>`
    // to hide protected types & `toString`
    options) {
        const instance = new this();
        WalkUtility.mirror(options, instance);
        return instance;
    }
}
export class Factory {
}
//# sourceMappingURL=item.js.map