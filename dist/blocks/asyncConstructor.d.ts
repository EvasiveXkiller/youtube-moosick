export declare class AsyncConstructor {
    private static isBeingInstantiated;
    protected constructor();
    static new<T = AsyncConstructor>(..._args: any[]): Promise<T>;
    protected static brace(): void;
}
