var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Factory } from '../../blocks/item.js';
import { EndPoint } from '../../enums.js';
import { unenumerable } from '../decorators/enumerable.decorator.js';
export class ContinuableResultFactory extends Factory {
    constructor(ContinuableResultClass) {
        super(ContinuableResultClass ?? ContinuableResult);
    }
}
export class ContinuableResult extends Array {
    isDone = (content) => content == null;
    async loadNext() {
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
        this.merge(content);
        return result;
    }
    /**
     * Basically `Array.prototype.concat` but with the behaviour of push.
     * Supports adding non POJA's (will add keys to `this`)
     * @param obj - An `Array` a or class that extends `Array`
     */
    merge(obj) {
        // is POJA
        if (obj.constructor === Array) {
            this.push(...obj);
        }
        else {
            Object.entries(obj).forEach(([key, value]) => {
                // is string key
                if (Number.isNaN(Number(key))) {
                    // @ts-expect-error dynamic obj assignment
                    this[key] = value;
                }
                else {
                    this.push(value);
                }
            });
        }
    }
    async loadUntil(minimumLength = Infinity) {
        const loaded = [];
        while (this.length < minimumLength) {
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
], ContinuableResult.prototype, "continuation", void 0);
__decorate([
    unenumerable
], ContinuableResult.prototype, "ctx", void 0);
//# sourceMappingURL=continuableResult.js.map