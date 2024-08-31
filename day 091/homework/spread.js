function combine(first, second){
    const array = [...first, ...second];
    console.log(array);
}

function combineObj(first, second){
    const obj = {...first, ...second}
    console.log(obj);
}

function modifyArr(arr, modificator){
    const array = [...arr, modificator];
    console.log(array);
}

function copyArr(arr){
    const copyArr = [...arr];
    console.log(copyArr);
}

function arrayaze(str){
    const arr = [...str];
    console.log(arr);
}

combine([1, 3, 5, 6, 6], [2, 34, 3, 1]);
combineObj({name:"alex", age:15}, {name:"nika", favoriteFood:"khinkhali"});
modifyArr([2, 34, 3, 1], 89);
copyArr([1, 3, 5, 6, 6]);
arrayaze("My name is Alex");