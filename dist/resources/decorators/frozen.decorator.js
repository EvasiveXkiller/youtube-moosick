/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function frozen(target, _) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}
//# sourceMappingURL=frozen.decorator.js.map