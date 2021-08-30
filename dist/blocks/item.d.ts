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
    static from<T extends typeof Item>(this: T, options: ItemOptions<T>): InstanceType<T>;
}
export declare abstract class Factory<T extends Item> {
    abstract create(): T | Promise<T>;
}
export {};
//# sourceMappingURL=item.d.ts.map