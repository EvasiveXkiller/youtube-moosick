import { Factory, Item } from '../../blocks/item.js';
import { EndPoint } from '../../enums.js';
import type { MooSick } from '../../index.js';
import type { Result as IResult, NextContinuationData } from '../etc/rawResultTypes/common.js';
import { unenumerable } from '../decorators/enumerable.decorator.js';

export interface ContinuableResultBlueprint<T extends Item> {
	result: T[];
	continuation?: NextContinuationData;
}

export class ContinuableResultFactory<
	T extends Item,
	ParserResult = ContinuableResultBlueprint<T>,
	GetContentResult extends any[] = T[],
> extends Factory<
	ContinuableResult<T, ParserResult, GetContentResult>,
	{
		ctx: ContinuableResult<T, ParserResult, GetContentResult>['ctx'];
		parser: ContinuableResult<T, ParserResult, GetContentResult>['parser'];
		getContent: ContinuableResult<T, ParserResult, GetContentResult>['getContent'];
		isDone?: ContinuableResult<T, ParserResult, GetContentResult>['isDone'];
		continuation?: ContinuableResult<T, ParserResult, GetContentResult>['continuation'];
	}
> {
	constructor() {
		super(ContinuableResult);
	}
}

export class ContinuableResult<T extends Item, ParserResult = ContinuableResultBlueprint<T>, GetContentResult extends any[] = T[]> extends Array<T> implements Item {
	@unenumerable
	private declare parser: (context: IResult) => ParserResult;

	@unenumerable
	private declare getContent: (context: ParserResult) => GetContentResult;

	@unenumerable
	private isDone: (content: GetContentResult) => boolean = (content) => content == null;

	@unenumerable
	private declare continuation?: NextContinuationData;

	@unenumerable
	private declare ctx: MooSick;

	public async loadNext() {
		if (this.continuation == null) {
			return null;
		}

		const { continuation, clickTrackingParams } = this.continuation;

		const ctx = await this.ctx['createApiRequest'](EndPoint.BROWSE, {}, {
			ctoken: continuation,
			continuation,
			itct: clickTrackingParams,
		});

		const result = this.parser(ctx);
		const content = this.getContent(result);

		if (this.isDone(content)) {
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
