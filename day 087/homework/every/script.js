function checkEvery(arr){
    return arr.every(function(val){
        return val > 0;
    });
}

function checkEveryStr(arr){
    return arr.every(function(val){
        return val != "";
    });
}

function checkEveryBolean(arr){
    return arr.every(function(val){
        return val == true;
    });
}

function checkEveryEven(arr){
    return arr.every(function(val){
        return val % 2 == 0;
    });
}

function every(arr){
    var n = true;
    arr.forEach(function(val){
        if(val < 18){
            n = false;
            return n;
        }
    });
    return n;
}

console.log(checkEvery([1, 2, 1, 7]));
console.log(checkEveryStr(["", "2", "-1", "7"]));
console.log(checkEveryBolean([true, true, true, false]));
console.log(checkEveryEven([4, 2, 10, 72]));
console.log(every([34, 465, 17, 19]));