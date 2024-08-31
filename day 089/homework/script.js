function sumArrElements(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}

function sumArrStrElements(arr){
    let sum = "";
    for(let i of arr){
        if(i.split('').length > sum.split('').length){
            sum = i;
        }
    }
    return sum;
}

function consoleObjectElementsCount(obj){
    let arr = [];
    for(let i in obj){
        arr.push(obj[i]);
    }
    return arr.length;
}

function consoleObjectElements(obj){
    let arr = [];
    for(let i in obj){
        arr.push(i);
    }
    return arr;
}

//var: can be used before defined, is global in every function let: is global in every block
//can not be used more than one time const: is global in every block can not change its value
//hosting means that you can not use varaible before definding it or you can but is
//will return unndefined and it means that const and let can be used only in one block {}
//but var can be used outside id but only in one function 

console.log(sumArrElements([1, 4, 3, 9, 23, 21]));
console.log(sumArrStrElements(["alex", "nika", "alexandro", "dad", "mom", "gsshsg"]));
console.log(consoleObjectElementsCount({name:"alex", username:"gigachad", age:15}));
console.log(consoleObjectElements({name:"alex", username:"gigachad", age:15}));

let square = a => a * a;
console.log(square(8));

let onlyEvens = arr =>{
    let arr1 = [];
    arr.forEach(element => {
        if(element % 2 == 0){
            arr1.push(element);
        }
    });
    return arr1;
};
console.log(onlyEvens([8, 7, 11, 23, 90]));

let sumOfNums = arr =>{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};
console.log(sumOfNums([8, 7, 11, 23, 90]));

let generateFibonachi = num =>{
    let arr = [0, 1];
    if(num <= 0) return [];
    else if(num == 1) return [1];
    while(arr.length != num){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr;
}
console.log(generateFibonachi(12));

let palindrome = str =>{
    if(str == str.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome("akaka"));

let button = document.getElementById("but");
let element = document.getElementById("element");
button.addEventListener("click", () =>{
    if(element.style.display == "none") {
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
});