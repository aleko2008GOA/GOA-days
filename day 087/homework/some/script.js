function checkGrades(arr){
    return arr.some(function(val){
        return val >= 51;
    });
}

function checkRole(arr){
    return arr.some(function(val){
        return val.role == "admin";
    });
}

function checkProperty(arr){
    return arr.some(function(val){
        return val.overdue == true;
    });
}

function checkPrime(arr){
    return arr.some(function(val){
        if(val > 1){
            for(var i = 2; i < val; i++){
                if(val % i == 0){
                    return false;
                }
            }
        }else{
            return false;
        }
        return true;
    });
}

function some(arr){
    var n = true;
    arr.forEach(function(val){
        if(val == false){
            n = false;
        }
    });
    return n;
}

console.log(checkGrades([21, 55, 80, 12, 100]));
console.log(checkRole([
    {object: 1, role: "admin"},
    {object: 2, role: "participant"},
    {object: 3, role: "participant"},
    {object: 4, role: "participant"}
]));
console.log(checkProperty([
    {object: 1, overdue: false},
    {object: 2, overdue: false},
    {object: 3, overdue: false},
    {object: 4, overdue: false}
]));
console.log(checkPrime([0, -54, 134, 3, 100]));
console.log(some([true, true, true, true, false]));