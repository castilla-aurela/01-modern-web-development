// Refactor this file so that:
// All functions are in a separate module called math.js 

//function add(a, b) {
// return a + b;
//}

const add = (a,b) => a + b;

/* function subtract(a, b) {
  return a - b;
} */

const subtract = (a,b) => a-b;


/* function multiply(a, b) {
  return a * b;
} */

const multiply = (a,b) => a*b;

const answer1 = add(21, 21);
console.log(answer1);
const answer2 = subtract(44, 2);
console.log(answer2);
const answer3 = multiply(21, 2);
console.log(answer3);
