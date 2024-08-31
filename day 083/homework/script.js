var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var strarr = ["he", "hi", "ha"];
var arrARR = [
    ["he", "hi", "ha"],
    ["he", "hi", "ha"],
    ["he", "hi", "ha"]
];

simpleSum();
simpleSumIndex();
simpleReduce(0);
arrOfArr();
forEachFor();
reduceFor(0);

function simpleSum(){
    var sum = 0;
    arr.forEach(function(val){
        sum+=val;
    });
    console.log("The sum of numbers is " + sum);
}

function simpleSumIndex(){
    strarr.forEach(function(val, index){
        console.log("Number " + index + ": " + val);
    });
}

function simpleReduce(x = 0){
    arr.reduce(function(prevVal, curVal, index){
        console.log(curVal);
    }, x);
}

function arrOfArr(){
    var fullArr = [];
    arrARR.reduce(function(prevVal, curVal, index){
        curVal.reduce(function(prevVal1, curVal1, index1){
            fullArr.push(curVal1);
        }, "");
    }, "");
    console.log(fullArr);
}

function forEachFor(){
    for(var i = 0; i < arr.length; i++){
        console.log(i + " - index");
        console.log(arr[i] + " - currect value");
        console.log(arr + " - array");
    }
}

function reduceFor(x = 0){
    for(var i = 0; i < arr.length; i++){
        console.log(x + " - first element");
        console.log(i + " - index");
        console.log(arr[i] + " - currect value");
    }
}