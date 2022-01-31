class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this._state *= 1.5;
    }
    set state(state) {
        this._state = state;
        if (state < 0) this._state = 0;
        if (state > 100) this._state = 100;
    }
    get state() {
        return this._state;
    }
}