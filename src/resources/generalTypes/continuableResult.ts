import { Factory, Item } from '../../blocks/item.js';
import { EndPoint } from '../../enums.js';
import type { YoutubeMoosick } from '../../index.js';
import type { Result as IResult, NextContinuationData } from '../etc/rawResultTypes/common.js';
import { unenumerable } from '../decorators/enumerable.decorator.js';

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
export class ContinuableResultFactory<
	T extends Item,
	ParserResult = ContinuableResultBlueprint<T>,
	GetContentResult extends any[] = T[],
	R extends ContinuableResult<T, ParserResult, GetContentResult> = ContinuableResult<T, ParserResult, GetContentResult>,
> extends Factory<
	R,
	{
		ctx: ContinuableResult<T, ParserResult, GetContentResult>['ctx'];
		parser: ContinuableResult<T, ParserResult, GetContentResult>['parser'];
		getContent: ContinuableResult<T, ParserResult, GetContentResult>['getContent'];
		getContinuation: ContinuableResult<T, ParserResult, GetContentResult>['getContinuation'];
		isDone?: ContinuableResult<T, ParserResult, GetContentResult>['isDone'];
		continuation?: ContinuableResult<T, ParserResult, GetContentResult>['continuation'];
		endpoint?: ContinuableResult<T, ParserResult, GetContentResult>['endpoint'];
	}
> {
	constructor(ContinuableResultClass?: new() => R) {
		super(ContinuableResultClass ?? ContinuableResult as unknown as new() => R);
	}
}

/**
 * Enables the loading of continuation
 */
export class ContinuableResult<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[]> extends Array<T> implements Item {
	/**
	 * Parser for the result of `MooSick#createApiRequest`
	 * @internal
	 */
	@unenumerable
	private declare parser: (this: ContinuableResult<T, ParserResult, GetContentResult>, context: IResult) => ParserResult;

	/**
	 * Returns the continuation from the result of the parser
	 * @internal
	 */
	@unenumerable
	private declare getContinuation: (this: ContinuableResult<T, ParserResult, GetContentResult>, context: ParserResult) => NextContinuationData | undefined;

	/**
	 * Returns the content from the result of the parser
	 * @internal
	 */
	@unenumerable
	private declare getContent: (this: ContinuableResult<T, ParserResult, GetContentResult>, context: ParserResult) => GetContentResult;

	/**
	 * Returns whether or not there's still more items to continue fetching
	 * @internal
	 */
	@unenumerable
	private isDone: (this: ContinuableResult<T, ParserResult, GetContentResult>, content: GetContentResult) => boolean = (content) => content == null;

	/**
	 * The endpoint for `MooSick#createApiRequest`
	 * @internal
	 */
	@unenumerable
	private endpoint: EndPoint = EndPoint.SEARCH;

	/**
	 * The continuation where this object will refer to
	 * @internal
	 */
	@unenumerable
	private declare continuation?: NextContinuationData;

	/**
	 * An instance of `MooSick`
	 * @internal
	 */
	@unenumerable
	private declare ctx: YoutubeMoosick;

	/**
	 * Loads the next continuation
	 */
	public async loadNext(): Promise<ContinuableResultBlueprint<T> | null> {
		if (this.continuation == null) {
			return null;
		}

		const { continuation, clickTrackingParams } = this.continuation;

		const ctx = await this.ctx['createApiRequest'](this.endpoint, {}, {
			ctoken: continuation,
			continuation,
			itct: clickTrackingParams,
		});

		const result = this.parser(ctx);
		const content = this.getContent(result);

		this.continuation = this.getContinuation(result);

		if (this.isDone(content)) {
			return null;
		}

		this.append(content);

		return {
			result: content,
			continuation: this.continuation,
		};
	}

	/**
	 * Basically `Array.prototype.concat` but with the behaviour of push.
	 * Supports adding non POJA's (will add keys to `this`)
	 * @param obj - An `Array` a or class that extends `Array`
	 */
	public append(obj: Record<string | number | symbol, T> | T[]) {
		// is POJA
		if (obj.constructor === Array) {
			this.push(...obj);
		} else {
			Object.entries(obj).forEach(([key, value]) => {
				// is string key
				if (Number.isNaN(Number(key))) {
					// @ts-expect-error dynamic obj assignment
					this[key] = value;
				} else {
					this.push(value);
				}
			});
		}

		return this;
	}

	public async loadUntil(minimumLength = Infinity): Promise<ContinuableResultBlueprint<T>> {
		const content: T[] = [];
		let continuation: NextContinuationData | undefined;

		while (this.length < minimumLength) {
			const result = await this.loadNext();

			if (result == null) {
				break;
			}

			content.push(...result.result);
			continuation = result.continuation;
		}

		return {
			result: content,
			continuation,
		};
	}

	public async * iterator() {
		for (let i = 0, l = this.length; i < l; ++i) {
			yield this[i];

			if (i === l - 1) {
				await this.loadNext();
			}
		}
	}
}
