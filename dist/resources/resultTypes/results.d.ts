import type { songSearchResult } from "./songSearchResult";
import type { videoSearchResult } from "./videoSearchResult";
import type { albumSearchResult } from "./albumSearchResult";
import type { artistSearchResults } from "./artistSearchResults";
import type { playlistSearchResult } from "./playlistSearchResult";
export declare class results {
    private _results;
    private _continuation;
    constructor(results?: songSearchResult | videoSearchResult | albumSearchResult | artistSearchResults | playlistSearchResult | Array<null>, continuation?: string | undefined);
    get continuation(): string | undefined;
    set continuation(value: string | undefined);
    get results(): songSearchResult | videoSearchResult | albumSearchResult | artistSearchResults | playlistSearchResult | Array<null> | undefined;
    set results(value: songSearchResult | videoSearchResult | albumSearchResult | artistSearchResults | playlistSearchResult | Array<null> | undefined);
}
