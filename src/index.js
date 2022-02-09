import RandomPicker from './random-picker.js';

const cards = [1,2,3,4]
const randomPicker = new RandomPicker(cards);

const sequence = generateSequence(randomPicker);

console.log(sequence);

function generateSequence(randomPicker) {
    randomPicker.reset();
    return `${randomPicker.pick()}-${randomPicker.pick()}-${randomPicker.pick()}`
}
