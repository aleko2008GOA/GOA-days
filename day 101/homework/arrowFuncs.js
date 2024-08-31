const sumOfTwo = (num1, num2) => num1 + num2;
console.log(sumOfTwo(5, 7));

const reversedStr = str => str.split('').reverse().join('');
console.log(reversedStr("Aleko"));

const isEven = num => num % 2 == 0;
console.log(isEven(7));

const arrLen = arr => arr.length;
console.log(arrLen([7, 6, 32, 4, 1, 2]));

const area = (width, height) => width * height;
console.log(area(5, 7));

const doubleArr = arr => arr.map(val => val * 2);
console.log(doubleArr([7, 6, 32, 4, 1, 2]));

const upper = str => str.toUpperCase();
console.log(upper("Aleko"));

const oddFilter = arr => arr.filter(val => val % 2 == 0);
console.log(oddFilter([7, 6, 32, 4, 1, 2]));

const factorial = num => num <= 1 ? num : num * factorial(num - 1);
console.log(factorial(5));

const numOfVowel = str => str.split('').filter(val => ('aeiou').includes(val.toLowerCase())).length;
console.log(numOfVowel("Aleko"));