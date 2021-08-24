import { WalkUtility } from './resources/utilities/walk.utility.js';

class Item {
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

export { Item };
//# sourceMappingURL=item.js.map
