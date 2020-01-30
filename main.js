/*******************
 * YOUR CODE HERE! *
 *******************/




function capitalize(anything){
  return anything.toUpperCase();
}

function exclaim(important) {
  return important + '!';
} 
const result = exclaim ('hey')
result;

function firstCharacter(word){
  return word[0];
}
const result1 = firstCharacter ('hello!')
result1;

function lastCharacter(stuff){
  return stuff[stuff.length - 1]
}

const result2 = lastCharacter('hello')
result2;

function oneCharacter(word, x) {
  return word[x];
}
function twoCharacters(word, x, y){
  return word[x] + word[y];
}

const result3 = twoCharacters('hello', 3, 4)
result3;

function yeller(weird){
  return weird.toUpperCase() + '!!!';
}
const result4 = yeller('hello')
result4;

function initials(entername){
  const indexOfSpace = 0;

  return entername[0]+ '.' + entername[entername.indexOf(' ') + 1]+ '.';
}
const result5 = initials('Patrick Hurley')
result5;
/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};