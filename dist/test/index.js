import glob from 'glob';
import * as pathTool from 'path';
import { fileURLToPath } from 'url';
process.chdir(pathTool.dirname(fileURLToPath(import.meta.url)));
const tests = await new Promise((resolve) => {
    glob('./tests/**/*.js', (_, matches) => {
        resolve(matches);
    });
});
tests.forEach((test) => {
    console.log(test);
    import(test);
});
// FOR DEBUGGER TO NOT QUIT
setInterval(() => {
    console.log('timer that keeps nodejs processing running');
}, 1000 * 60 * 60);
//# sourceMappingURL=index.js.map