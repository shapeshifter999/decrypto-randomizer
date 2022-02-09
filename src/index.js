import RandomPicker from './random-picker.js';

const cards = [1,2,3,4]

const randomPicker = new RandomPicker(cards);

console.log(randomPicker.pick());
console.log(randomPicker.pick());
console.log(randomPicker.pick());
console.log(randomPicker.pick());

/*
import * as RandomPicker from "./random-picker";

console.log(randomPicker.pick());
*/
