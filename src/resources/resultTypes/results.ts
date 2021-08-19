import type {songSearchResult} from "./songSearchResult";
import type {videoSearchResult} from "./videoSearchResult";
import type {albumSearchResult} from "./albumSearchResult";
import type {artistSearchResults} from "./artistSearchResults";
import type {playlistSearchResult} from "./playlistSearchResult";

export class results {
    private _results: songSearchResult |
        videoSearchResult |
        albumSearchResult |
        artistSearchResults |
        playlistSearchResult |
        Array<null> | undefined
    private _continuation: string | undefined

    constructor(results?: songSearchResult |
                    videoSearchResult |
                    albumSearchResult |
                    artistSearchResults |
                    playlistSearchResult |
                    Array<null>
        , continuation?: string | undefined) {
        this._results = results;
        this._continuation = continuation
    }

    get continuation(): string | undefined {
        return this._continuation;
    }

    set continuation(value: string | undefined) {
        this._continuation = value;
    }

    get results(): songSearchResult | videoSearchResult | albumSearchResult | artistSearchResults | playlistSearchResult | Array<null> | undefined {
        return this._results;
    }

    set results(value: songSearchResult | videoSearchResult | albumSearchResult | artistSearchResults | playlistSearchResult | Array<null> | undefined) {
        this._results = value;
    }
}