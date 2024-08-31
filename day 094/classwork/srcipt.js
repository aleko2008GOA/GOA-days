let x = 5;
const promise = new Promise((resolve, reject) =>{
    if(x > 5){
        resolve("yess")
    }else{
        reject("no")
    }
});

promise.then((yes) =>{
    console.log(yes);
}, (no) =>{
    console.log(no);
});