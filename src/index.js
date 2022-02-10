import RandomPicker from './random-picker.js';
import SequencePicker from "./sequence-picker.js";

const cards = [1,2,3,4]
const randomPicker = new RandomPicker(cards);
const sequencePicker = new SequencePicker(randomPicker);

for (let i=0; i<25; i++) {
    const sequence = sequencePicker.generate();
    console.log(sequence);
}


//generate([1, 2, 3, 4], 0);

function generate(array, level) {
    for (let i=0; i<array.length; i++) {
        const separator = "-".repeat(level)
        console.log(`${separator}-${array[i]}`);
        const clonedArray = array.slice();
        clonedArray.splice(i, 1);

        if (level < 3) {
            console.log(clonedArray);
            generate(
                clonedArray,
                level + 1
            )
        }
    }
}



