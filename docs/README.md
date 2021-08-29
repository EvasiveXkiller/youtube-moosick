youtube-moosick / [Exports](modules.md)

# Youtube-MooSick

<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/rollup-build">

> API? ¯\_(ツ)_/¯

```typescript
import { MooSick } from "MooSick";

const api = new MooSick.new();

// Using Callbacks
api.search("Never gonna give you up").then((results) => {
	console.log(results);
})

// Using Async await 
const results = await api.search("Never gonna give you up");
console.log(results);
```

## Information
That's all we have for now...

Star the repo to stay in the loop

## Docs
Wait [docs](./docs/generated/index.md)?

## Contributors

- [EvasiveXkiller](https://github.com/EvasiveXkiller)

- [Sxxov](https://github.com/Sxxov)
