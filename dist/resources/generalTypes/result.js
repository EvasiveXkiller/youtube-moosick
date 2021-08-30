var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EndPoint } from '../../enums.js';
import { unenumerable } from '../decorators/enumerable.decorator.js';
import { IllegalInvocationError } from '../errors/illegalInvocation.error.js';
export class ContinuableResultBuilder {
    result;
    isBuilt = false;
    constructor(ctx) {
        this.result = new ContinuableResult(ctx);
    }
    push(...items) {
        this.result.push(...items);
        return this;
    }
    setParser(parser) {
        this.result['parser'] = parser;
        return this;
    }
    setGetContent(getContent) {
        this.result['getContent'] = getContent;
        return this;
    }
    setIsDone(isDone) {
        this.result['isDone'] = isDone;
        return this;
    }
    setContinuation(continuation) {
        this.result['continuation'] = continuation;
        return this;
    }
    build() {
        if (this.isBuilt) {
            throw new IllegalInvocationError('You may only call Builder#build only once per instance');
        }
        this.isBuilt = true;
        return this.result;
    }
}
export class ContinuableResult extends Array {
    ctx;
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    async loadNext() {
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
    async loadUntil(length = Infinity) {
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
    async *iterator() {
        for (let i = 0, l = this.length; i < l; ++i) {
            yield this[i];
            if (i === l - 1) {
                await this.loadNext();
            }
        }
    }
}
__decorate([
    unenumerable
], ContinuableResult.prototype, "parser", void 0);
__decorate([
    unenumerable
], ContinuableResult.prototype, "getContent", void 0);
__decorate([
    unenumerable
], ContinuableResult.prototype, "isDone", void 0);
__decorate([
    unenumerable
], ContinuableResult.prototype, "items", void 0);
__decorate([
    unenumerable
], ContinuableResult.prototype, "continuation", void 0);
//# sourceMappingURL=result.js.map