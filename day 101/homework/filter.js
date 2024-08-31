const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.filter(val => val % 2 == 0));

const arrStr = ["Alex", "Nika", "Luka", "Giorgi"];
console.log(arrStr.filter(val => val.split('').length > 4));

const arrObj = [
    {title: "first", body: "good book"},
    {title: "second", body: "normal book"},
    {title: "third"},
];
console.log(arrObj.filter(val => val.body));

console.log(arr.filter(val => val != null || val != undefined));

console.log(arr.filter(val => val > 10));

console.log(arrStr.filter(val => val.split('')[0] == "N"));

console.log(arr.filter(val => {
    if(val <= 1){
        return;
    }
    for(let i = 2; i < val; i++){
        if(val % i == 0){
            return;
        }
    }
    return true;
}));

const users = [
    {title: "Nika", age: 25},
    {title: "Alex", age: 15},
    {title: "Luka", age: 21},
];
console.log(users.filter(val => val.age >= 18));

const dublicate = [1, 2, 1, 4, 9, 6, 1, 8, 9];
console.log(dublicate.filter((val, index) => dublicate.indexOf(val) == index));

console.log(arr.filter(val => val == true));

const x = 15
export default x;