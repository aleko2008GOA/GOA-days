function lastIndexOfCharacter(str, character){
    return str.lastIndexOf(character);
}

function lastIndexOfPrime(arr){
    return arr.lastIndexOf(function(num){
        if(num == 2){
            return 2;
        }
        var count = 0;
        for(var i = 0; i <= num.length; i++){
            if(num % i == 0){
                count += 1;
            }
        }
        if(count == 2){
            return num;
        }
    });
}

function lastIndexOfWord(arr, word){
    return arr.lastIndexOf(word);
}

function lastIndexOfActive(arr, active){
    var index = [];
    for(var i = 0; i < arr.length; i++){
        index.push(arr[i].isActive);
    }
    return index.lastIndexOf(active);
}

function lastIndexOf(str, element){
    var arr = str.split('');
    for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i] == element){
            return i;
        }
    }
}

console.log(lastIndexOfCharacter("My name is alex", "e"));
console.log(lastIndexOfPrime([1, 4, 3, 9, 2, 1]));
console.log(lastIndexOfWord(["alex", "my", "name", "is", "alex", "e"], "alex"));
console.log(lastIndexOfActive([
    {isActive: "notActive"},
    {isActive: "active"},
    {isActive: "notActive"},
    {isActive: "notActive"}
], "active"));
console.log(lastIndexOf("My name is alex", "e"));