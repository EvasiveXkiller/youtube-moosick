import type { Item } from '../../blocks/item.js';
import type { MooSick } from '../../index.js';
import type { NextContinuationData } from '../etc/rawResultTypes/common.js';
export interface ContinuableResultBlueprint<T extends Item> {
    result: T[];
    continuation?: NextContinuationData;
}
export declare class ContinuableResultBuilder<T extends Item, V = any> {
    private result;
    private isBuilt;
    constructor(ctx: MooSick);
    push(...items: T[]): this;
    setParser(parser: ContinuableResult<T, V>['parser']): this;
    setGetContent(getContent: ContinuableResult<T, V>['getContent']): this;
    setIsDone(isDone: ContinuableResult<T, V>['isDone']): this;
    setContinuation(continuation?: ContinuableResult<T, V>['continuation']): this;
    build(): ContinuableResult<T, V>;
}
export declare class ContinuableResult<T extends Item, V = T> extends Array {
    private ctx;
    private parser;
    private getContent;
    private isDone;
    private items;
    private continuation?;
    constructor(ctx: MooSick);
    loadNext(): Promise<V | null>;
    loadUntil(length?: number): Promise<(V extends readonly (infer InnerArr)[] ? InnerArr : V)[]>;
    iterator(): AsyncGenerator<any, void, unknown>;
}
//# sourceMappingURL=result.d.ts.map