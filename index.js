import { Words } from "./words.js";

const word = document.querySelector('.word');
const hint = document.querySelector('.hint');
const refresh = document.querySelector('.refresh');
const check = document.querySelector('.check');
const userGuess = document.querySelector('.user-guess');

// Class containing all the words
const words = new Words();
word.textContent(words.getWord());