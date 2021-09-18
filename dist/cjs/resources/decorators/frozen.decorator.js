"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frozen = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
function frozen(target, _) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}
exports.frozen = frozen;
//# sourceMappingURL=frozen.decorator.js.map