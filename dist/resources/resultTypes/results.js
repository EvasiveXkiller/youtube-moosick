class results {
    _results;
    _continuation;
    constructor(results, continuation) {
        this._results = results;
        this._continuation = continuation;
    }
    get continuation() {
        return this._continuation;
    }
    set continuation(value) {
        this._continuation = value;
    }
    get results() {
        return this._results;
    }
    set results(value) {
        this._results = value;
    }
}

export { results };
//# sourceMappingURL=results.js.map
