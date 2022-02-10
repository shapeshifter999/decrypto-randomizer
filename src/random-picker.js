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
        if (this.extracted.length === 0) {
            throw new Error("Source exhausted. Please reset it.");
        }
        const index = Math.floor(Math.random() * this.extracted.length);
        const value = this.extracted[index];
        this.extracted.splice(index, 1);
        return value;
    }
}
