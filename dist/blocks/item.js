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
    item;
    constructor(item) {
        this.item = item;
    }
    create(options) {
        const instance = new this.item();
        WalkUtility.mirror(options, instance);
        return instance;
    }
}
//# sourceMappingURL=item.js.map