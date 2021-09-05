# Youtube-MooSick

<div>
    <img alt="TypeScript Build Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tscBuild">
    <img alt="Tests Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/youtube-moosick/tests?color=blue&label=tests">
    <img alt="Latest Tag" src="https://img.shields.io/github/v/tag/EvasiveXkiller/youtube-moosick?label=Latest">
</div>

Unofficial YouTube Music Library, written in TypeScript.

```typescript
import { MooSick } from "MooSick";

const ytmc = new MooSick.new();

// Using Callbacks
ytmc.search("Never gonna give you up").then((results) => {
	console.log(results);
})

// Using Async await 
const results = await ytmc.search("Never gonna give you up");
console.log(results);
```

## Installation

```shell
npm install youtube-moosick
```

## API

### ytmc.search(query, categoryName?, _pageLimit?)

▸ **search**(`query`, `searchType?`): `Promise`<`unknown`\>

Searches for songs using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | String query text to search |
| `searchType?` | [`Category`](./docs/enums/enums.Category.md) | `undefined` | Type of category to search |

#### Returns

`Promise`<`unknown`\>

An object formatted by parsers.js

See all available [return types](./docs/modules/resources_resultTypes.md)

Example

```typescript
const api = await MooSick.new();

// Get the general search results.
const resultsGeneral = await api.search('Never gonna give you up');
console.log(resultsGeneral)

// Gets a specific category
const resultsSong = await api.search('Never gonna give you up', Category.SONG);
console.log(resultsSong)
```

### ytmc.getSearchSuggestions(query);

▸ **getSearchSuggestions**(`query`): `Promise`<[`SearchSuggestions`](./docs/classes/resources_resultTypes.SearchSuggestions.md)[]\>

Get search suggestions from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | String query text to search |

#### Returns

`Promise`<[`SearchSuggestions`](./docs/classes/resources_resultTypes.SearchSuggestions.md)[]\>

An object formatted with utils class

Example

```typescript
const suggestions = ytmc.getSearchSuggestions("All We know");
console.log(suggestions);
```

### ytmc.getAlbum(browseId)

▸ **getAlbum**(`browseId`): `Promise`<[`AlbumURL`](./docs/classes/resources_resultTypes.AlbumURL.md)\>

Gets the album details

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The album Id only, without `https://....` |

#### Returns

`Promise`<[`AlbumURL`](./docs/classes/resources_resultTypes.AlbumURL.md)\>

Album URL object

Example:

```typescript
const ytmc = await MooSick.new();
const results = await ytmc.getAlbum('MPREb_REsMMqBZjZB');

console.log(results)
```

### ytmc.getArtist(browseId)

▸ **getArtist**(`browseId`): `Promise`<[`ArtistURL`](./docs/classes/resources_resultTypes.ArtistURL.md)\>

Gets the artist details from Youtube Music

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `browseId` | `string` | The artist `browseId` only, without `https://....` |

#### Returns

`Promise`<[`ArtistURL`](./docs/classes/resources_resultTypes.ArtistURL.md)\>

An object formatted by the artist page

Example:

```typescript
const ytmc = await MooSick.new();
const results = await ytmc.getArtist('UCAq0pFGa2w9SjxOq0ZxKVIw');

console.log(results);
```

### ytmc.getPlaylist(browseId)

▸ **getPlaylist**(`browseId`, `contentLimit?`): `Promise`<[`PlaylistURL`](./docs/classes/resources_resultTypes.PlaylistURL.md)\>

Gets the playlist using the Youtube Music API

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `browseId` | `string` | `undefined` | The playlist `browseId` only, without `https://....` |
| `contentLimit` | `number` | `100` | Maximum amount of contents to get, defaults to 100 |

#### Returns

`Promise`<[`PlaylistURL`](./docs/classes/resources_resultTypes.PlaylistURL.md)\>

An object formatted by the parser

Example:

```typescript
const api = await MooSick.new();
const results = await api.getPlaylist('PLXs921kKn8XT5_bq5kR2gQ_blPZ7DgyS1');

console.log(results);
```

## Authors

- [EvasiveXkiller](https://github.com/EvasiveXkiller)

- [Sxxov](https://github.com/Sxxov)
