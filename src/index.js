import RandomPicker from './random-picker.js';
import SequencePicker from "./sequence-picker.js";
import SequenceGenerator from "./sequence-generator.js";

const cards = [1,2,3,4]
const randomPicker = new RandomPicker(cards);
const sequencePicker = new SequencePicker(randomPicker);

const results = [];
SequenceGenerator.generateAllSequences(cards, 3, results);

console.log(results, results.length);
