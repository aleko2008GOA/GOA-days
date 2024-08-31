const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.reduce((prev, cur) => prev + cur, 0));

const arrStr = ["Alex", "Nika", "Luka", "Giorgi"];
console.log(arrStr.reduce((prev, cur) => prev + cur, ""));

console.log(arr.reduce((prev, cur) => prev < cur ? cur : prev, 0));

// console.log(arr.reduce((prev, cur) => prev < cur ? cur : prev, 0));

const shopCard = [1, 2, 12, 4, 2, 6, 7, 12, 9];
console.log(shopCard.reduce((prev, cur) => prev + cur, 0));

const arrObj = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 21 }
];
console.log(arrObj.reduce((prev, cur) =>{
    if(!prev[cur.age]) prev[cur.age] = [];
    prev[cur.age].push(cur);
    return prev;
}, {}));

const nestedArr = [1, [2, 8, 6], 3, [4, 2]];
const nestArray = [];
nestedArr.reduce((prev, cur) =>{
    if(Array.isArray(cur)) nestArray.push(...cur);
    else nestArray.push(cur);
    return prev;
}, []);
console.log(nestArray);

console.log(arr.reduce((prev, cur) => prev * cur, 1));

console.log(arrObj.reduce((prev, cur) => Object.assign(prev, cur), {}));

const newArr = [];
shopCard.reduce((cur, prev) =>{
    if(!newArr.find(val => val == cur)) newArr.push(cur);
    return prev;
}, 0);
console.log(newArr);