const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(val => val * 2));

const arrStr = ["Alex", "Nika", "Luka"];
console.log(arrStr.map(val => val.toUpperCase()));

const arrObj = [
    {title: "first"},
    {title: "second"},
    {title: "third"},
];
console.log(arrObj.map(val => val.title));

console.log(arr.map(val => val + 5));

console.log(arr.map(val => val * val));

console.log(arr.map(val => String(val)));

console.log(arrStr.map(val => val.split('').length));

console.log(arrStr.map(val => `Hello ${val}`));

console.log(arr.map(val => val % 2 == 0 ? true : false));

console.log(arrStr.map(val => val.split('').map(char => char.toLowerCase() == "a" ? "o" : char).join('')));