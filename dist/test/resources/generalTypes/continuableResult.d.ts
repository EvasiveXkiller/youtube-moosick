import { Factory, Item } from '../../blocks/item.js';
import type { NextContinuationData } from '../etc/rawResultTypes/common.js';
/**
 * @internal
 */
export interface ContinuableResultBlueprint<T extends Item> {
    result: T[];
    continuation?: NextContinuationData;
}
/**
 * @internal
 */
export declare class ContinuableResultFactory<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[], R extends ContinuableResult<T, ParserResult, GetContentResult> = ContinuableResult<T, ParserResult, GetContentResult>> extends Factory<R, {
    ctx: ContinuableResult<T, ParserResult, GetContentResult>['ctx'];
    parser: ContinuableResult<T, ParserResult, GetContentResult>['parser'];
    getContent: ContinuableResult<T, ParserResult, GetContentResult>['getContent'];
    getContinuation: ContinuableResult<T, ParserResult, GetContentResult>['getContinuation'];
    isDone?: ContinuableResult<T, ParserResult, GetContentResult>['isDone'];
    continuation?: ContinuableResult<T, ParserResult, GetContentResult>['continuation'];
    endpoint?: ContinuableResult<T, ParserResult, GetContentResult>['endpoint'];
}> {
    constructor(ContinuableResultClass?: new () => R);
}
/**
 * Enables the loading of continuation
 */
export declare class ContinuableResult<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[]> extends Array<T> implements Item {
    /**
     * Parser for the result of `MooSick#createApiRequest`
     * @internal
     */
    private parser;
    /**
     * Returns the continuation from the result of the parser
     * @internal
     */
    private getContinuation;
    /**
     * Returns the content from the result of the parser
     * @internal
     */
    private getContent;
    /**
     * Returns whether or not there's still more items to continue fetching
     * @internal
     */
    private isDone;
    /**
     * The endpoint for `MooSick#createApiRequest`
     * @internal
     */
    private endpoint;
    /**
     * The continuation where this object will refer to
     * @internal
     */
    private continuation?;
    /**
     * An instance of `MooSick`
     * @internal
     */
    private ctx;
    /**
     * Loads the next continuation
     */
    loadNext(): Promise<ContinuableResultBlueprint<T> | null>;
    /**
     * Basically `Array.prototype.concat` but with the behaviour of push.
     * Supports adding non POJA's (will add keys to `this`)
     * @param obj - An `Array` a or class that extends `Array`
     */
    append(obj: Record<string | number | symbol, T> | T[]): this;
    loadUntil(minimumLength?: number): Promise<ContinuableResultBlueprint<T>>;
    iterator(): AsyncGenerator<Awaited<T>, void, unknown>;
}
//# sourceMappingURL=continuableResult.d.ts.map