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
        let sequence = "";

        if (this.generatedSequences.length === this.maxCapacity(4, 3)) {
            throw new Error("All possibility have been generated. Please reset.");
        }
        do {
            this.randomPicker.reset();
            sequence = `${this.randomPicker.pick()}-${this.randomPicker.pick()}-${this.randomPicker.pick()}`;
        } while (this.generatedSequences.indexOf(sequence) > -1)

        this.generatedSequences.push(sequence);

        return sequence
    }

    maxCapacity(possibility, round) {
        let result = 1;
        while (round > 0) {
            result *= possibility;

            possibility--;
            round--;
        }
        return result;
    }
}
