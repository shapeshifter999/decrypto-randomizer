export default class SequencePicker {
    randomPicker;
    generatedSequences = [];

    constructor(randomPicker) {
        this.randomPicker = randomPicker.clone();
    }

    reset() {
        this.generatedSequences = [];
    }

    generate() {
        this.randomPicker.reset();
        let sequence = "";

        do {
            sequence = `${this.randomPicker.pick()}-${this.randomPicker.pick()}-${this.randomPicker.pick()}`;
        } while (this.generatedSequences.indexOf(sequence) > -1)

        this.generatedSequences.push(sequence);

        return sequence
    }
}
