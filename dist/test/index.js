import glob from 'glob';
import * as pathTool from 'path';
import { fileURLToPath } from 'url';
const config = {
    keepAlive: false,
    test: '*',
};
for (let i = 2, l = process.argv.length; i < l; ++i) {
    const arg = process.argv[i];
    let unprefixedArg;
    switch (true) {
        case arg.startsWith('--'):
            unprefixedArg = arg.substr(2);
            break;
        case arg.length === 2 && arg.startsWith('-'):
        case arg.startsWith('/'):
            unprefixedArg = arg.substr(1);
            break;
        default:
            throw new Error(`Unexpected token in arguments: ${arg}`);
    }
    const key = unprefixedArg.length === 1
        ? Object.keys(config).find((k) => k.startsWith(unprefixedArg))
        : unprefixedArg
            .replace(/-./g, (a) => a[1].toUpperCase());
    switch (typeof config[key]) {
        case 'undefined':
            throw new Error(`Unrecognized flag: ${arg}`);
        case 'boolean':
            // ... what?
            config[key] = true;
            break;
        case 'string':
        case 'number':
            {
                const next = process.argv[++i];
                if (next == null
                    || (typeof next === 'string'
                        && next.startsWith('--'))) {
                    throw new Error(`No value provided for: ${key}`);
                }
                // why is it never???
                config[key] = (typeof config[key] === 'number'
                    ? Number
                    : String)(next);
            }
            break;
        default:
    }
}
process.chdir(pathTool.dirname(fileURLToPath(import.meta.url)));
const tests = await new Promise((resolve) => {
    glob(`./tests/**/${config.test}.js`, (_, matches) => {
        resolve(matches);
    });
});
tests.forEach((test) => {
    import(test);
});
if (config.keepAlive) {
    setInterval(() => { }, 2_147_483_647);
}
//# sourceMappingURL=index.js.map