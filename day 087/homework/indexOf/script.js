function indexOfSpecificCharacter(str, indexVal){
    return str.indexOf(indexVal);
}

function indexOfNumber(arr, indexVal){
    return arr.join('').indexOf(indexVal);
}

function indexOfSubstring(str, indexVal){
    return str.indexOf(indexVal);
}

function indexOfElement(arr, indexVal){
    return arr.join('').indexOf("loser");
}

function indexOf(str, indexVal){
    var arr = str.split(' ');
    return arr.findIndex(function(val, index){
        return val == indexVal;
    });
}

console.log(indexOfSpecificCharacter("My name is Nika Keshelava and I am gigachad!", "a"));
console.log(indexOfNumber([1, 3, 9, 5, 20], 5));
console.log(indexOfSubstring("My name is Nika Keshelava and I am gigachad!", "gigachad"));
console.log(indexOfElement(["gigachad", "sigma", "loser", "me"], "loser"));
console.log(indexOf("My name is Nika Keshelava and I am gigachad!", "and"));