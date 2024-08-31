const person = {
    name: "Alex",
    age: 15,
}

const obj1 = {
    name: "nika",
    age: 15
}

const obj2 = {
    name: "Saba",
    loves: "khinkhali"
}

const sourse = {
    name: "gio",
    age: 12,
    loves: "khachapuri"
}

const target = {
    name: "Saba",
    interestedIn: "football"
}

let result = {}

const arr1 = [];
arr1.push(person, obj1, obj2);

const arr2 = [];
arr2.push(sourse, target);

let employee = Object.assign({position: "none"}, person);
console.log(employee);

console.log(Object.assign(obj1, obj2));

console.log(Object.assign(obj1, obj2, person));

console.log(Object.assign({}, person));

console.log(Object.assign(sourse, target));

arr1.forEach(val =>{
    result = Object.assign(result, val);
});

arr2.forEach(val =>{
    result = Object.assign(result, val);
});

console.log(result);

let chagedPerson = Object.assign(person, {name: "aleko", age: 17});
console.log(chagedPerson);

function extend(obj1, obj2){
    console.log(Object.assign(obj1, obj2));
}

extend(obj1, obj2);

function manualAssign(obj1, ...sources){
    for(const index in sources){
        for(const key in sources[index]){
            obj1[key] = sources[index][key];
        }
    }
    console.log(obj1);
}

manualAssign(person, obj1, obj2);

function manualAssign2(obj1, ...sources){
    for(const val of sources){
        const keys = Object.keys(val); 
        for(const key of keys){
            obj1[key] = val[key];
        }
    }
    console.log(obj1);
}

manualAssign2(person, obj1, obj2);