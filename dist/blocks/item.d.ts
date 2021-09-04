declare type IfEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;
declare type WritableProps<T> = Pick<T, {
    [P in keyof T]: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P, never>;
}[keyof T]>;
export declare type ItemOptions<T extends abstract new (...args: any[]) => any> = {
    [Q in keyof WritableProps<InstanceType<T>>]: InstanceType<T>[Q];
};
export declare class Item {
    /** @deprecated You're probably looking for `Item.from()` */
    constructor();
    static from<T extends Item>(this: new () => T, options: ItemOptions<new () => T>): T;
}
export declare abstract class Factory<R extends Item, T extends Partial<Item> = R> {
    private item;
    constructor(item: (new () => R));
    create(options: T): R;
}
export {};
//# sourceMappingURL=item.d.ts.map