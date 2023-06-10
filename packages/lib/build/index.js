"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomFruit = void 0;
const FRUITS = [
    'Mango', 'Apple', 'Watermelon', 'Jackfruit', 'Banana',
    'Pineapple', 'Apricot', 'Green Apple', 'Peach', 'Fig'
];
function getRandomFruit() {
    return FRUITS[Math.trunc(Math.random() * 10)];
}
exports.getRandomFruit = getRandomFruit;
