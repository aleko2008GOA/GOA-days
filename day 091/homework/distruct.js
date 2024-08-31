const arr = [1, 3, 9];
const obj = {
    name: "Alex",
    age: 15
}
const users = [
    obj,
    person = {
        name: "Nika",
        age: 23
    }
];

const mixed = [
    obj,
    3,
    person = {
        name: "Nika",
        age: 23
    }
];

const [a, b, c] = arr;
console.log(a, c);

const {name, age} = obj;
console.log(name, age);

const [k, p, o] = [a, b, c];
console.log(k, p, o);

const [d,, e] = arr;
console.log(d, e);

for (const {name, age} of users){
    console.log(name, age);
}

const [f, ...rest] = arr;
console.log(rest);

const [g, ...middle] = arr;
console.log(g, middle.pop());

function filterArr(arr){
    arr.filter(obj =>{
        const {name, age} = obj;
        console.log(age > 18);
    });
}
filterArr(users);

function filterMixed(arr){
    arr.filter(obj =>{
        const {name, age} = obj;
        if(age > 18) console.log(true);
        else if(age <= 18) console.log(false);
        else console.log("Not an object");
    });
}
filterMixed(mixed);

