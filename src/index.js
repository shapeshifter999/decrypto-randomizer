import RandomPicker from './random-picker.js';
import SequencePicker from "./sequence-picker.js";

const cards = [1,2,3,4]
const randomPicker = new RandomPicker(cards);
const sequencePicker = new SequencePicker(randomPicker);

for (let i=0; i<100; i++) {
    const sequence = sequencePicker.generate();
    console.log(sequence);
}
