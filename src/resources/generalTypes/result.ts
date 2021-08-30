import type { Item } from '../../blocks/item.js';
import { EndPoint } from '../../enums.js';
import type { MooSick } from '../../index.js';
import type { Result as IResult } from '../../resources/etc/rawResultTypes/common.js';
import { unenumerable } from '../decorators/enumerable.decorator.js';
import { IllegalInvocationError } from '../errors/illegalInvocation.error.js';
import type { NextContinuationData } from '../etc/rawResultTypes/common.js';

export interface ContinuableResultBlueprint<T extends Item> {
	result: T[];
	continuation?: NextContinuationData;
}

export class ContinuableResultBuilder<T extends Item, V = any> {
	private result: ContinuableResult<T, V>;
	private isBuilt = false;

	constructor(ctx: MooSick) {
		this.result = new ContinuableResult(ctx);
	}

	public push(...items: T[]) {
		this.result.push(...items);

		return this;
	}

	public setParser(parser: ContinuableResult<T, V>['parser']) {
		this.result['parser'] = parser;

		return this;
	}

	public setGetContent(getContent: ContinuableResult<T, V>['getContent']) {
		this.result['getContent'] = getContent;

		return this;
	}

	public setIsDone(isDone: ContinuableResult<T, V>['isDone']) {
		this.result['isDone'] = isDone;

		return this;
	}

	public setContinuation(continuation?: ContinuableResult<T, V>['continuation']) {
		this.result['continuation'] = continuation;

		return this;
	}

	public build() {
		if (this.isBuilt) {
			throw new IllegalInvocationError('You may only call Builder#build only once per instance');
		}

		this.isBuilt = true;

		return this.result;
	}
}

export class ContinuableResult<T extends Item, V = T> extends Array {
	@unenumerable
	private declare parser: (context: IResult) => V;

	@unenumerable
	private declare getContent: (context: V) => any;

	@unenumerable
	private declare isDone: (content: any) => boolean;

	@unenumerable
	private declare items: T[];

	@unenumerable
	private declare continuation?: NextContinuationData;

	constructor(
		private ctx: MooSick,
	) {
		super();
	}

	public async loadNext() {
		if (this.continuation == null) {
			return null;
		}

		const { continuation, clickTrackingParams } = this.continuation;

		const ctx = await this.ctx['createApiRequest'](EndPoint.SEARCH, {}, {
			ctoken: continuation,
			continuation,
			itct: clickTrackingParams,
		});

		console.log(ctx);
		const result = this.parser(ctx);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const content = this.getContent(result);

		if (this.isDone ? this.isDone(content) : content == null) {
			return null;
		}

		this.push(...content);

		return result;
	}

	public async loadUntil(length = Infinity) {
		const loaded = [];

		while (this.length < length) {
			const result = await this.loadNext();

			if (result == null) {
				break;
			}

			loaded.push(result);
		}

		return loaded.flat();
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
