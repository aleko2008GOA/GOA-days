function findIndexPrime(arr){
    return arr.findIndex(function(val, index){
        if(val >= 2){
            var prime = true;
            for(var i = 2; i < val; i++){
                if(val % i == 0){
                    prime = false;
                }
            }
            if(prime){
                return val;
            }
        }
    });
}

function checkIndexOfRole(arr){
    return arr.findIndex(function(val, index){
        return val.role == "admin";
    });
}

function checkIndexOfProperty(arr){
    return arr.findIndex(function(val, index){
        return val.overdue == true;
    });
}

function checkIndexOfStock(arr){
    return arr.findIndex(function(val, index){
        return val.inStock == false;
    });
}

function findIndex(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 7){
            return i;
        }
    }
    return -1;
}

console.log(findIndexPrime([1, 14, 12, 6, 1]));
console.log(checkIndexOfRole([
    {object: 1, role: "admin"},
    {object: 2, role: "participant"},
    {object: 3, role: "participant"},
    {object: 4, role: "participant"}
]));
console.log(checkIndexOfProperty([
    {object: 1, overdue: false},
    {object: 2, overdue: false},
    {object: 3, overdue: false},
    {object: 4, overdue: false}
]));
console.log(checkIndexOfStock([
    {object: 1, inStock: true},
    {object: 2, inStock: true},
    {object: 3, inStock: false},
    {object: 4, inStock: true}
]));
console.log(findIndex([1, 14, 12, 6, 1]));