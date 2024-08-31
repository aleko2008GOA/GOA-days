function findNegative(arr){
    return arr.find(function(val, index){
        return val < 0;
    });
}

function findId(arr){
    return arr.find(function(val, index){
        return val.id == 3;
    });
}

function findIncomplate(arr){
    return arr.find(function(val, index){
        return val.complete == "incomplete";
    });
}

function findName(arr){
    return arr.find(function(val, index){
        return val == "gigachad";
    });
}

function find(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == true){
            return arr[i];
        }
    }
}

console.log(findNegative([1, 2, -9, 32, -78]));
console.log(findId([
    {id: 2, name: "Alex"},
    {id: 3, name: "Anna"},
    {id: 1, name: "Nika"},
    {id: 3, name: "Saba"}
]));
console.log(findIncomplate([
    {task: 1, complete: "complete"},
    {task: 2, complete: "incomplete"},
    {task: 3, complete: "incomplete"},
    {task: 4, complete: "complete"}
]));
console.log(findName(["ball", "rocket", "chad", "gigachad", "cake"]));
console.log(find([false, false, false, false]))