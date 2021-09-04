import { Factory, Item } from '../../blocks/item.js';
import type { NextContinuationData } from '../etc/rawResultTypes/common.js';
export interface ContinuableResultBlueprint<T extends Item> {
    result: T[];
    continuation?: NextContinuationData;
}
export declare class ContinuableResultFactory<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[], R extends ContinuableResult<T, ParserResult, GetContentResult> = ContinuableResult<T, ParserResult, GetContentResult>> extends Factory<R, {
    ctx: ContinuableResult<T, ParserResult, GetContentResult>['ctx'];
    parser: ContinuableResult<T, ParserResult, GetContentResult>['parser'];
    getContent: ContinuableResult<T, ParserResult, GetContentResult>['getContent'];
    getContinuation: ContinuableResult<T, ParserResult, GetContentResult>['getContinuation'];
    isDone?: ContinuableResult<T, ParserResult, GetContentResult>['isDone'];
    continuation?: ContinuableResult<T, ParserResult, GetContentResult>['continuation'];
}> {
    constructor(ContinuableResultClass?: new () => R);
}
export declare class ContinuableResult<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[]> extends Array<T> implements Item {
    private parser;
    private getContinuation;
    private getContent;
    private isDone;
    private continuation?;
    private ctx;
    loadNext(): Promise<ContinuableResultBlueprint<T> | null>;
    /**
     * Basically `Array.prototype.concat` but with the behaviour of push.
     * Supports adding non POJA's (will add keys to `this`)
     * @param obj - An `Array` a or class that extends `Array`
     */
    merge(obj: Record<string | number | symbol, T> | T[]): void;
    loadUntil(minimumLength?: number): Promise<ContinuableResultBlueprint<T>>;
    iterator(): AsyncGenerator<T, void, unknown>;
}
//# sourceMappingURL=continuableResult.d.ts.map