function fromArrToVar(first, second, ...sum){
    console.log(sum);
}

function allArgs(...arg){
    console.log(arg);
}

function sum(...val){
    let elem = 0;
    for(const i of val){
        elem += i;
    }
    console.log(elem);
}

function forwardArg(...nums){
    consoleForwardArg(nums);
}

function consoleForwardArg(...nums){
    console.log(nums);
}

fromArrToVar("al", "bal", "chad", "nika");
allArgs(2, 6, 8, 9, 45, 12, 65);
sum(2, 6, 8, 9, 45, 12, 65);
forwardArg(2, 6, 8, 9, 45, 12, 65);
const person = {
    name: "alex",
    age: 12,
    gender: "male",
    isGigaChad: "yes"
}
const {name, age, ...details} = person;
console.log(details);