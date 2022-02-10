export default class SequencePicker {
    randomPicker;

    constructor(randomPicker) {
        this.randomPicker = randomPicker.clone();
    }

    generate() {
        this.randomPicker.reset();
        return `${this.randomPicker.pick()}-${this.randomPicker.pick()}-${this.randomPicker.pick()}`
    }
}
