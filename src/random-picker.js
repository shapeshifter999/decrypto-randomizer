export default class RandomPicker {
    source;
    extracted;

    constructor(source) {
        this.source = source.slice();
        this.reset();
    }

    clone() {
        return new RandomPicker(this.source);
    }

    reset() {
        this.extracted = this.source.slice();
    }

    pick() {
        const index = Math.floor(Math.random() * this.extracted.length);
        return this.extracted.splice(index, 1);
    }
}
