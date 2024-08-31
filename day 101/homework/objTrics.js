const personName = "Alex";
const age = 15;
const obj = {
    personName,
    age
}
console.log(obj);

const newObj = {
    name: "Luka",
    age: 21
}
const {name} = newObj;
console.log(name);

const merged = Object.assign({}, newObj, obj);
console.log(merged);

const swapVal = {
    firstName: "Nika",
    personAge: 23
}
let {firstName, personAge} = swapVal;
[firstName, personAge] = [personAge, firstName];
console.log(firstName, personAge);

function accessVal(obj){
    const {name, age} = obj;
    return [name, age];
}
console.log(accessVal(newObj));

const objectCopy = {...obj}
console.log(objectCopy);

const object7 = {...obj, ...newObj}
console.log(object7);

const obj8 = {
    name8: undefined,
    age: 32
}
const {name8 = "user", age8 = 30} = obj8;
console.log(name8, age8);

const dinamic = "Hello";
const obj9 = {}
obj9[dinamic] = "World";
console.log(obj9);


const obj10 = {
    user: "Nika",
    id: 1
}
function extract({user, id}){
    console.log(`Hello ${user}, your id is ${id}`);
}
extract(obj10);